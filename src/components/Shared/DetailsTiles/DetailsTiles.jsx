import React from "react";
import css from "./DetailsTiles.module.scss";
import cn from "classnames";

const DetailsTiles = props => (
  <div className={cn(css.container, props.className)}>{props.text}</div>
);

export default DetailsTiles;
