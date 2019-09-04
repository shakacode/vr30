import React from "react";
import button from "react";
import css from "./Button.module.scss";
import cn from "classnames";

const Button = props => (
  <button className={cn(css.button, props.className)}>List my Rentals</button>
);

export default Button;
