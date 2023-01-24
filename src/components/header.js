import * as React from "react";

import { Link, useI18next } from "gatsby-plugin-react-i18next";

import {
  headerTitle,
  siteHeader,
  languageList,
  languageListItem,
  languageListItemLink
} from "../layouts/layout.module.css";

const Header = () => {

  const { languages, originalPath } = useI18next();

  return (
    <header className={siteHeader}>
      <div className={headerTitle}>
        <p>Header</p>
      </div>
      <div>
        <ul className={languageList}>
          {languages.map((lang) => {
            return (
              <li key={lang} className={languageListItem}>
                <Link to={originalPath} language={lang} className={languageListItemLink}>
                  {lang}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;