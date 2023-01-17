/* eslint-disable no-unreachable */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
// const locales = require("./config/i18n");
const {
  localizedSlug,
  // findKey,
  // removeTrailingSlash,
} = require("./src/utils");

const { defaultLanguage} = require("./languages");

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions;

//   // First delete the incoming page that was automatically created by Gatsby
//   // So everything in src/pages/
//   deletePage(page);

//   // Grab the keys ('en' & 'de') of locales and map over them
//   Object.keys(locales).map((lang) => {
//     // Use the values defined in "locales" to construct the path
//     const localizedPath = locales[lang].default
//       ? page.path
//       : `${locales[lang].path}${page.path}`;

//     return createPage({
//       // Pass on everything from the original page
//       ...page,
//       // Since page.path returns with a trailing slash (e.g. "/de/")
//       // We want to remove that
//       "path": removeTrailingSlash(localizedPath),
//       // Pass in the locale as context to every page
//       // This context also gets passed to the src/components/layout file
//       // This should ensure that the locale is available on every page
//       "context": {
//         ...page.context,
//         "locale": lang,
//         "dateFormat": locales[lang].dateFormat,
//       },
//     });
//   });
// };

// As you don't want to manually add the correct language to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === "Mdx") {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    // const name = path.basename(
    //   node.fileAbsolutePath,
    //   ".mdx"
    // );

    const name = path.basename(
      node.internal.contentFilePath,
      ".mdx"
    );

    console.log("node name", name);

    // const { name } = node.parent;

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === "index";

    // Find the key that has "default: true" set (in this case it returns "en")
    // const defaultKey = findKey(
    //   languages,
    //   (o) => o.default === true
    // );

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault
      ? defaultLanguage
      : name.split(".")[1];

    createNodeField({ node,
      "name": "locale",
      "value": lang });
    createNodeField({ node,
      "name": "isDefault",
      "value": isDefault });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
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
              internal {
                contentFilePath
              }
            }
          }
        }
      }
    }
  `);
  // const result = await graphql(`
  //   {
  //     blog: allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
  //       edges {
  //         node {
  //           relativeDirectory
  //           childMdx {
  //             fields {
  //               locale
  //               isDefault
  //             }
  //             frontmatter {
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);


  if (result.errors) reporter.panicOnBuild("Error loading MDX result", result.errors);
  
  const postList = result.data.blog.edges;

  postList.forEach(({ "node": post }) => {
    if (!post.childMdx) return;

    // All files for a blogpost are stored in a folder
    // relativeDirectory is the name of the folder
    // const slug = post.childMdx.parent.relativeDirectory;
    // const slug = post.childMdx.internal.contentFilePath;

    const { title, slug } = post.childMdx.frontmatter;

    // Use the fields created in exports.onCreateNode
    const { locale } = post.childMdx.fields;
    const { isDefault } = post.childMdx.fields;

    createPage({
      "path": localizedSlug({ isDefault,
        locale,
        slug: `blog/${slug}`,
      }),
      // "component": blogTemplate,
      "component": `${blogTemplate}?__contentFilePath=${post.childMdx.internal.contentFilePath}`,
      "context": {
        // Pass both the "title" and "locale" to find a unique file
        // Only the title would not have been sufficient as articles could have the same title
        // in different languages, e.g. because an english phrase is also common in german
        locale,
        title,
        slug,
      },
    });
  });
};