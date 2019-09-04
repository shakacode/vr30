import React from "react";
import { Header, Hero, NavigationFooter, Footer, HostStory } from "../Shared";
import DetailsContainer from "./DetailsContainer/DetailsContainer";
import FAQ from "./FAQ/FAQ";
import css from "./Welcome.module.scss";

const WelcomePage = props => (
  <div className={css.container}>
    <Header />
    <Hero {...props.data.hero.frontmatter} />
    <DetailsContainer tilesBody={props.data.detailTiles.body} />
    <FAQ faqBody={props.data.faq.body} />
    <HostStory story={props.data.story.body} />
    <NavigationFooter details={props.data.banner.frontmatter} />
    <Footer />
  </div>
);

export default WelcomePage;
