import React from "react";
import css from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = ({ heading, subHeading }) => (
  <div className={css.container}>
    <div className={css.heroDescription}>
      <div className={css.mainHeading}>{heading}</div>
      <div
        className={css.subHeading}
        dangerouslySetInnerHTML={{ __html: subHeading }}
      />
      <div className={css.buttonContainer}>
        <Button>List my Rentals</Button>
      </div>
    </div>
  </div>
);

export default Hero;
