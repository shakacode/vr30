import React from "react";
import css from "./Footer.module.scss";

const Footer = () => (
  <div className={css.container}>
    <p className={css.tag}>© 2019 VR30.rent. All rights reserved.</p>
    <a href={"google.com"} className={css.messageLink}>
      Message us
    </a>
  </div>
);

export default Footer;
