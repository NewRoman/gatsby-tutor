import * as React from 'react'
import { graphql } from 'gatsby'
import {useTranslation, Link} from 'gatsby-plugin-react-i18next';

import Layout from '../../layouts/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  const {t} = useTranslation();
  return (
    <Layout pageTitle={t('blogPageSeoTitle')}>
      <h3>
        {t('blogPostHeading')}
      </h3>
      <p>{t('textPage')}</p>
      {/* {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      } */}
    </Layout>
  )
}

export const Head = () => {
  const {t} = useTranslation();
  return <Seo title={t('blogPageSeoTitle')} />;
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

export default BlogPage