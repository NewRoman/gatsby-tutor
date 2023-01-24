const { join } = require('path')
const { readdirSync, lstatSync } = require('fs')

const defaultLanguage = 'en';

// грунтуючись на вкладених в locales директоріях створюємо масив з підтримуваних мов
const languages = readdirSync(join(__dirname, 'locales')).filter((fileName) => {
  const joinedPath = join(join(__dirname, 'locales'), fileName)
  const isDirectory = lstatSync(joinedPath).isDirectory()
  return isDirectory
});
// defaultLanguage - мову за замовчуванням ставим на перше місце
languages.splice(languages.indexOf(defaultLanguage), 1);
languages.unshift(defaultLanguage);

module.exports = {
  languages,
  defaultLanguage,
};