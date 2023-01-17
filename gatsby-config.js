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
  ],
};