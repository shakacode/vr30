import React from "react";
import css from "./Header.module.scss";
import { Button } from "../index";

const Header = () => (
  <div className={css.container}>
    <div className={css.labelContainer} />
    <div className={css.linksContainer}>
      <div className={css.linkWrapper}>
        <a href={"www.google.com"} className={css.link}>
          About
        </a>
      </div>
      <div className={css.linkWrapper}>
        <a href={"www.google.com"} className={css.link}>
          FAQ
        </a>
      </div>
      <Button className={css.button} />
    </div>
  </div>
);

export default Header;
