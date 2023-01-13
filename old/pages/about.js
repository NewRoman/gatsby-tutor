import * as React from 'react'
// import { graphql } from 'gatsby'
// import {useTranslation} from 'gatsby-plugin-react-i18next';

import Layout from '../layouts/layout'
// import Seo from '../components/seo'

const AboutPage = () => {
  // const {t} = useTranslation();
  return (
    <Layout pageTitle={"t('aboutPageSeoTitle')"}>
      {/* <p>{t('textPage')}</p> */}
      <p>Hello about</p>
    </Layout>
  )
}

// export const Head = () => {
//   const {t} = useTranslation();
//   return <Seo title={t('aboutPageSeoTitle')} />;
// };

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: {ns: {in: ["common", "about"]}, language: {eq: $language}}) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;

export default AboutPage