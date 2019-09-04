import React from "react";
import {
  Header,
  Hero,
  DetailsContainer,
  NavigationFooter,
  Footer,
  HostStory
} from "../Shared";
import FAQ from "./FAQ/FAQ";
import css from "./Welcome.module.scss";

const WelcomePage = props => (
  <div className={css.container}>
    <Header />
    <Hero />
    <DetailsContainer />
    <FAQ faqBody={props.data.faq.body} />
    <HostStory />
    <NavigationFooter />
    <Footer />
  </div>
);

export default WelcomePage;
