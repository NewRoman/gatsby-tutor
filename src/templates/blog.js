// i18next-extract-mark-ns-start one-blog
import React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const MyH1 = (props) => <h1 style={{ color: "tomato" }} {...props} />;
const MyH4 = (props) => <h4 style={{ color: "red" }} {...props} />;
const MyParagraph = (props) => (
  <p style={{ fontSize: "18px",
    lineHeight: 1.6 }} {...props} />
);

const components = {
  h1: MyH1,
  h4: MyH4,
  p: MyParagraph,
};

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
const Post = (props) => {
  const { t } = useTranslation();
  const { data: { mdx }, pageContext: { language }, children } = props;
  const image = getImage(mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle="">
      <Link to="/blog" language={language}>{t("Back to list")}</Link>
      <hr />
      <GatsbyImage
        image={image}
        alt={"mdx.frontmatter.hero_image_alt"}
      />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Layout>
  );
};

export const Head = (props) => {
  const { data: { mdx } } = props;
  return <Seo title={mdx.frontmatter.title} />;
};

export default Post;

export const query = graphql`
  query Post($language: String!, $slug: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "one-blog"]}, language: {eq: $language}}) {
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
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;