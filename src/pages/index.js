import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const IndexPage = () => {

  return (
    <Layout pageTitle="Welcome to our page!">
      <p>Hello this is home page of gatsby project, ready for multilanguage implementation</p>
      <StaticImage
        alt="A fluffy white cat with blue eyes"
        src="../images/cat-funtik.jpeg"
      />
      <StaticImage
        alt="A cute dog"
        src="../images/dog.jpg"
      />
      <p>Now all phrases are hardcoded on each page and we will add some magic here soon</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Home page" />;

export default IndexPage;