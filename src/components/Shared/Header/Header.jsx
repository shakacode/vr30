import React from "react";
import css from "./Header.module.scss";
import { Button } from "../index";

const Header = () => (
  <div className={css.container}>
    <div className={css.labelContainer} />
    <div className={css.linksContainer}>
      <div className={css.linkWrapper}>
        <a href={"https://www.hawaiichee.com/about"} className={css.link}>
          About
        </a>
      </div>
      <div className={css.linkWrapper}>
        <a href={"https://www.hawaiichee.com/faq"} className={css.link}>
          FAQ
        </a>
      </div>
      <Button
        onClick={() =>
          (window.location.href = "https://www.hawaiichee.com/hosts")
        }
        className={css.button}
      >
        List my Rentals
      </Button>
    </div>
  </div>
);

export default Header;
