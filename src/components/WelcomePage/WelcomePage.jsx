import React from "react";
import { Header, Hero, DetailsTiles } from "../Shared";
import css from "./Welcome.module.scss";
const WelcomePage = props => (
  <div className={css.container}>
    <Header />
    <Hero />
    <DetailsTiles
      text={
        "Guests searching for dates shorter than your minimum 30-day stay will still be able to find your listing advertised as having a 30-day minimum with the ability for guests to still send you inquiries."
      }
    />
  </div>
);

export default WelcomePage;
