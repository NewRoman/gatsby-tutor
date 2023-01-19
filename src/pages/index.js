// i18next-extract-mark-ns-start index
import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle={t("Home page seo title")}>
      <p>{t("Page is ready for multilanguage implementation")}</p>
      <StaticImage
        alt="Cat"
        src="../images/cat-funtik.jpeg"
      />
      <StaticImage
        alt="Dog"
        src="../images/dog.jpg"
      />
      <p>{t("Now we added t function for each phrase")}</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Home page seo title" />;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "index"]}, language: {eq: $language}}) {
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

export default IndexPage;