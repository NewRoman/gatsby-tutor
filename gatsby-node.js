
const path = require("path");
const { defaultLanguage} = require("./languages");

// Визначати мову статті всередині .mdx файлу в блокові frontmatter 
// може бути не зовсім безпечно, оскільки, про це можна елементарно забути
// то кращий спосіб отримати мову статті це з назви її файлу
// наприклад для статті first-post з blog/first-post
// index.mdx - en - англійськомовна версія статті
// inedx.uk.mdx - uk - україномовна версія статті
// визначення мови це необхідна дія, бо без цього ми не зможемо фільтрувати
// статті по мові
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  //  Перевіряємо на тип і робимо необхідні дії лише для типу Mdx
  if (node.internal.type === "Mdx") {

    const name = path.basename(
      node.internal.contentFilePath,
      ".mdx"
    );

    // Перевіряємо чи post.name index - якщо так, то це файл мови по замовчуванню
    // згідно наших налаштувань, наша мова за замовчуванням - "en"(англійська)
    const isDefault = name === "index";

    // Файли з іменами name-with-dashes.lang.mdx
    // будуь мати вигляд name-with-dashes.lang
    // отримуємо lang з їх назви і присвоюємо це значення lang
    // якщо назва файлу не містить .lang то змінній lang
    // присвоюємо значення мови за замовчуванням
  
    const lang = isDefault
      ? defaultLanguage
      : name.split(".")[1];

    // тут ми додаємо для кожного обєкту статті нові поля
    // locale - мова статті
    // isDefault - визначаємо чи мова замовчуванням чи ні
    // ці додані поля будуть доступні для graphql
    // і їх можна буде отримати в props сторінки 
    // за допомогою graphql query
    createNodeField({ node,
      "name": "locale",
      "value": lang });
    createNodeField({ node,
      "name": "isDefault",
      "value": isDefault });
  }
};

exports.createPages = async (props) => {
  const { graphql, actions, reporter } = props;

  const { createPage } = actions;
  const blogTemplate = require.resolve("./src/templates/blog.js");

  const result = await graphql(`
    {
      blog: allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        edges {
          node {
            childMdx {
              fields {
                locale
                isDefault
              }
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) reporter.panicOnBuild("Error loading MDX result", result.errors);
  const postList = result.data.blog.edges;
  postList.forEach(({ "node": post }) => {
    if (!post.childMdx) return;
    const { slug } = post.childMdx.frontmatter;
    // Використаємо поля які були додані в exports.onCreateNode
    const { isDefault } = post.childMdx.fields;

    const pageData = {
      "path": `blog/${slug}`,
      "component": blogTemplate,
      "context": {
        slug // за допомогою $slug ми отримаємо необхідну нам статтю на сторінці статті
      }
    };
    // всередині createPage плагін gatsby-plugin-react-i18next автоматично створить сторінки для en та uk
    if (isDefault) createPage(pageData);
  });
};