import React from "react";
import css from "./HostStory.module.scss";
import { Button } from "../index";
import RichardImage from "../../../styles/images/Richard.png";
import RichardImage2 from "../../../styles/images/Richard2.png";
import { MDXRenderer } from "gatsby-plugin-mdx";

const HostStory = props => (
  <div className={css.container}>
    <div className={css.title}>Richard's Story</div>
    <div className={css.innerContainer}>
      <div className={css.imagesContainer}>
        <img
          src={RichardImage2}
          alt="Trulli"
          width="500"
          height="383"
          className={css.primaryImage}
        />
        <img
          src={RichardImage}
          alt="Trulli"
          width="220"
          height="220"
          className={css.secondaryImage}
        />
      </div>
      <div className={css.description}>
        <MDXRenderer>{props.story}</MDXRenderer>
        <Button
          onClick={() => window.open("https://stermanrealty.com/about-us/")}
          className={css.button}
        >
          Learn more about Richard
        </Button>
      </div>
    </div>
  </div>
);

export default HostStory;
