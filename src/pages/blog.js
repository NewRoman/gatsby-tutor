import * as React from "react";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const BlogPage = () => {

  return (
    <Layout pageTitle="Blogs page seo title">
      <h3>
        Here is the list of blogs preview
      </h3>
      <p>Below you can see all blogs sorted by its language</p>
      <p>But initialy this list is empty</p>

      <span>...</span>
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="Blogs page seo title" />;
};

export default BlogPage;