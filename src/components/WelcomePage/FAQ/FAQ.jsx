import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import css from "./FAQ.module.scss";

const FAQ = ({ faqBody }) => (
  <div className={css.container}>
    <h1 className={css.heading}>FAQ</h1>
    <MDXRenderer>{faqBody}</MDXRenderer>
  </div>
);

export default FAQ;
