// i18next-extract-mark-ns-start one-blog
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const components = {
  h1: (props) => <h1 style={{ color: "green" }} {...props} />,
  h4: (props) => <h4 style={{ color: "red" }} {...props} />,
  p: (props) => (
    <p style={{ fontSize: "18px",
      lineHeight: 1.6,
      color: "blue" }} {...props} />
  ),
};

const Post = (props) => {
  const { data: { mdx } } = props;
  const image = getImage(mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle="">
      <hr />
      <GatsbyImage
        image={image}
        alt={mdx.frontmatter.hero_image_alt}
      />
      <h1>{mdx.frontmatter.title}</h1>

      <ReactMarkdown components={components}>
        {mdx.body}
      </ReactMarkdown>
    </Layout>
  );
};
export const Head = (props) => {
  return <Seo title={props.data.mdx.frontmatter.title} />;
};
export const query = graphql`
  query Post($language: String!, $slug: String!) {
    locales: allLocale(filter: {ns: {in: ["common"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          language
          data
        }
      }
    }
    mdx(
      frontmatter: { slug: { eq: $slug } }
      fields: { locale: { eq: $language } }
    ) {
      body
      frontmatter {
        title
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Post;