// i18next-extract-mark-ns-start blog
import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t("Blogs page seo title")}>
      <h3>
        {t("Here is the list of blogs preview")}
      </h3>
      <p>{t("Below you can see all blogs sorted by its language")}</p>
      <p>{t("But initialy this list is empty")}</p>

      <span>...</span>
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
  } 
`;

export default BlogPage;