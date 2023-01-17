import * as React from "react";

import Header from "../components/header";
import Navigation from "../components/navigation";

import {
  container,
  heading
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <Header />

      <Navigation />

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;