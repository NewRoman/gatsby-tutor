// i18next-extract-mark-ns-start blog
import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import Layout from "../../layouts/layout";
import Seo from "../../components/seo";

const BlogPage = (props) => {
  const { t } = useTranslation();

  const { data: { blogs }, pageContext: { language } } = props;

  return (
    <Layout pageTitle={t("blogPageSeoTitle")}>
      <h3>
        {t("blogPostHeading")}
      </h3>
      <p>{t("This is part 1 of blog page text")}</p>
      <p>{t("This is part 2 of blog page text")}</p>

      {
        blogs.nodes.map((blog) => (
          <article key={blog.id}>
            <h2>
              <Link to={`/blog/${blog.frontmatter.slug}`} language={language}>
                {blog.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {blog.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const Head = () => {
  const { t } = useTranslation();
  return <Seo title={t("blogPageSeoTitle")} />;
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "blog"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          language
          data
        }
      }
    }
    blogs: allMdx(filter: {fields: {locale: {eq: $language}}}, sort: { frontmatter: { date: ASC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  } 
`;

export default BlogPage;