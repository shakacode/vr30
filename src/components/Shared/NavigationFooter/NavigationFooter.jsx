import React from "react";
import css from "./NavigationFooter.module.scss";
import { Button } from "../index";

const NavigationFooter = () => (
  <div className={css.container}>
    <div className={css.message}>
      List your rentals right now on HawaiiChee.com. Today. Now.
    </div>
    <div className={css.buttonWrapper}>
      <Button>List my Rentals</Button>
    </div>
  </div>
);

export default NavigationFooter;
