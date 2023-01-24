const {languages, defaultLanguage} = require('./languages');
const siteUrl = process.env.URL || `http://localhost:8000`;

module.exports = {
  siteMetadata: {
    title: "Gatsby translation implementation tutorial",
    description: `Tutorial how to add translations for harcoded phrases and mdx files`,
    author: `newRoman`,
    siteUrl,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`// назва має бути саме така, не locales
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        siteUrl,
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false,
          }
        },
      },
      
    },
  ],
};