import React from "react";
import button from "react";
import css from "./Button.module.scss";
import cn from "classnames";

const Button = props => (
  <button
    className={cn(css.button, props.className)}
    onClick={() => (window.location.href = "https://www.hawaiichee.com/hosts")}
  >
    List my Rentals
  </button>
);

export default Button;
