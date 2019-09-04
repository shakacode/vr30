import React from "react";
import css from "./HostStory.module.scss";
import { Button } from "../index";
import { MDXRenderer } from "gatsby-plugin-mdx";

const HostStory = props => (
  <div className={css.container}>
    <div className={css.title}>Richard's Story</div>
    <div className={css.innerContainer}>
      <div className={css.imagesContainer}>
        <img
          src="https://www.w3schools.com/html/pic_trulli.jpg"
          alt="Trulli"
          width="500"
          height="383"
          className={css.primaryImage}
        />
        <img
          src="https://images.pexels.com/photos/2147486/pexels-photo-2147486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Trulli"
          width="220"
          height="220"
          className={css.secondaryImage}
        />
      </div>
      <div className={css.description}>
        <MDXRenderer>{props.story}</MDXRenderer>
        <Button className={css.button} />
      </div>
    </div>
  </div>
);

export default HostStory;
