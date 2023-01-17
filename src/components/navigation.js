
// i18next-extract-mark-ns-start common
import * as React from "react";

import { Link } from "gatsby";

import {
  navLinks,
  navLinkItem,
  navLinkText
} from "../layouts/layout.module.css";

const Navigation = () => {

  return (
    <>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;