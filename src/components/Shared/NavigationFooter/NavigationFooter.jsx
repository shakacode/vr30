import React from "react";
import css from "./NavigationFooter.module.scss";
import { Button } from "../index";

const NavigationFooter = props => (
  <div className={css.container}>
    <div className={css.message}>{props.details.heading}</div>
    <div className={css.buttonWrapper}>
      <Button>List my Rentals</Button>
    </div>
  </div>
);

export default NavigationFooter;
