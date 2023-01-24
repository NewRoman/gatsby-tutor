// i18next-extract-mark-ns-start blog
import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const BlogPage = (props) => {
  const { t } = useTranslation();

  const { data: { blogs }, pageContext: { language } } = props;

  return (
    <Layout pageTitle={t("Blogs page seo title")}>
      <h3>
        {t("Here is the list of blogs preview")}
      </h3>
      <p>{t("Below you can see all blogs sorted by its language")}</p>
      <p>{t("But initialy this list is empty")}</p>

      {
        blogs.nodes.map((blog) => (
          <article key={blog.id}>
            <h2>
              <Link to={`/blog/${blog.frontmatter.slug}`}>
                {blog.frontmatter.title}
              </Link>
            </h2>
            {/* eslint-disable-next-line new-cap */}
            <p>Posted: {Intl.DateTimeFormat(language).format(new Date(blog.frontmatter.date).getTime())}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="Blogs page seo title" />;
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