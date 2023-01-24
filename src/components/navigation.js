// i18next-extract-mark-ns-start common
import * as React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

// замінюємо Link з gatsby на Link з gatsby-plugin-react-i18next
// import { Link } from "gatsby";

import {
  navLinks,
  navLinkItem,
  navLinkText
} from "../layouts/layout.module.css";

const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            {t("Home")}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            {t("About")}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            {t("Blog")}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;