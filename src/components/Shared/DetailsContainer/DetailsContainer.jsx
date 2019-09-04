import React from "react";
import css from "./DetailsContainer.module.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";

const DetailsContainer = props => (
  <div className={css.container}>
    <MDXRenderer>{props.tilesBody}</MDXRenderer>
  </div>
);

export default DetailsContainer;
