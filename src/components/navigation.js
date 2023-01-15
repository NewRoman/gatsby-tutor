
// i18next-extract-mark-ns-start common
import * as React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

// import { useStaticQuery, graphql } from 'gatsby'

import {
  navLinks,
  navLinkItem,
  navLinkText
} from "../layouts/layout.module.css";

const Navigation = () => {
  const { t } = useTranslation();
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
    <>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            {t("mainMenu.home")}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            {t("mainMenu.about")}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            {t("mainMenu.blog")}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;