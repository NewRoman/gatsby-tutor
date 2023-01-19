// i18next-extract-mark-ns-start about
import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t("About page seo title")}>
      <p>{t("Hi! Are you ready to make some sort of magic to implement translations for all hardcoded phrases?")}</p>
    </Layout>
  );

};

export const Head = () => {
  return <Seo title="About page seo title" />;
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "about"]}, language: {eq: $language}}) {
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

export default AboutPage;
