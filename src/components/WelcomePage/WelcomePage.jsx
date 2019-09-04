import React from "react";
import {
  Header,
  Hero,
  DetailsContainer,
  NavigationFooter,
  Footer,
  HostStory
} from "../Shared";
import css from "./Welcome.module.scss";
const WelcomePage = props => (
  <div className={css.container}>
    {console.log("props", props)}
    <Header />
    <Hero />
    <DetailsContainer />
    <HostStory />
    <NavigationFooter />
    <Footer />
  </div>
);

export default WelcomePage;
