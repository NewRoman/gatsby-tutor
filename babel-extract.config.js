const { defaultLanguage, languages } = require('./languages');
process.env.NODE_ENV = 'test';
module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'i18next-extract',
      {
        locales: languages,
        // keySeparator: '.',
        // nsSeparator: null,
        keyAsDefaultValue: languages,
        useI18nextDefaultValue: languages,
        // discardOldKeys: true,
        defaultNS: 'common',
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['gatsby-plugin-react-i18next', 'Trans']]
      }
    ]
  ]
};