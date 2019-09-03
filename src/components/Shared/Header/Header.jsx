import React from "react";
import css from "./Header.module.scss";
import { Button } from "../index";

const Header = () => (
  <div className={css.container}>
    <h1>Hello</h1>
    <Button />
  </div>
);

export default Header;
