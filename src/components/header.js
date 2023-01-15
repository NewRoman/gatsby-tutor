// i18next-extract-mark-ns-start common
import * as React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import {
  headerTitle,
  siteHeader,
  languageList,
  languageListItem,
  languageListItemLink
} from "../layouts/layout.module.css";

const Header = ({ pageTitle }) => {
  const { languages, originalPath, t } = useI18next();
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

  return (
    <header className={siteHeader}>
      <div className={headerTitle}>
        <p>Header</p>
      </div>
      <div>
        <ul className={languageList}>
          {languages.map((lang) => <li key={lang} className={languageListItem}>
            <Link to={originalPath} language={lang} className={languageListItemLink}>
              {/* {t(`${lang}`)} */}
              {lang}
            </Link>
          </li>)}
        </ul>
      </div>
    </header>
  );
};

export default Header;