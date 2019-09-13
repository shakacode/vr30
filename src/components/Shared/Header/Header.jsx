import React from "react";
import css from "./Header.module.scss";
import { Button } from "../index";
import Logo from "../../../styles/images/Logo.png";

const Header = () => (
  <div className={css.container}>
    <div className={css.labelContainer} >
      <img
          src={Logo}
          alt="Logo"
          width="219"
          height="44"
          className={css.logo}
      />
    </div>
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
