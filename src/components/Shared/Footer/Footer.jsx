import React from "react";
import css from "./Footer.module.scss";

const Footer = () => (
  <div className={css.container}>
    <div className={css.tag}>© 2019 VR30.rent. All rights reserved.</div>
    <div className={css.linkWrapper}>
      <a href={"google.com"} className={css.messageLink}>
        Message us
      </a>
    </div>
  </div>
);

export default Footer;
