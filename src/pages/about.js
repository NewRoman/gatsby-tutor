import * as React from "react";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const AboutPage = () => {

  return (
    <Layout pageTitle="About page seo title">
      <p>Hi! Are you ready to make some sort of magic to implement translations for all hardcoded phrases?</p>
    </Layout>
  );

};

export const Head = () => {
  return <Seo title="About page seo title" />;
};

export default AboutPage;
