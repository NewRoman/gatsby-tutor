import * as React from 'react'
// import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import {useTranslation} from 'gatsby-plugin-react-i18next';

import Layout from '../layouts/layout'
// import Seo from '../components/seo'

const IndexPage = () => {
  // const {t} = useTranslation();
  return (
    <Layout pageTitle={"t('homePageSeoTitle')"}>
      {/* <p>{t('textPage')}</p> */}
      <p>Hello!!!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}

// export const Head = () => {
//   const {t} = useTranslation();
//   return <Seo title={t('homePageSeoTitle')} />;
// };

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: {ns: {in: ["common", "index"]}, language: {eq: $language}}) {
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

export default IndexPage



// based on react-intl
// https://betterprogramming.pub/internationalization-with-gatsby-ae3991c39e92
// based on react-i18n
// https://dev.to/adrai/best-internationalization-for-gatsby-mkf
// https://github.com/microapps/gatsby-plugin-react-i18next/tree/0cb31fe4e48dd5b1771efaf24c85ece5540aa084/example