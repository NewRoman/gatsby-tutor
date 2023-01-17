import * as React from "react";

import {
  headerTitle,
  siteHeader,
} from "../layouts/layout.module.css";

const Header = () => {

  return (
    <header className={siteHeader}>
      <div className={headerTitle}>
        <p>Header</p>
      </div>
    </header>
  );
};

export default Header;