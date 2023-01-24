const { languages } = require('./languages');
process.env.NODE_ENV = 'test';
module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'i18next-extract',
      {
        locales: languages,
        keyAsDefaultValue: languages,
        useI18nextDefaultValue: languages,
        defaultNS: 'common',
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['gatsby-plugin-react-i18next', 'Trans']]
      }
    ]
  ]
};