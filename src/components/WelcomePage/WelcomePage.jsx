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
    {console.log("props", props)}
    <Header />
    <Hero details={props.data.hero.frontmatter} />
    <DetailsContainer tilesBody={props.data.detailTiles.body} />
    <FAQ faqBody={props.data.faq.body} />
    <HostStory story={props.data.story.body} />
    <NavigationFooter details={props.data.banner.frontmatter} />
    <Footer />
  </div>
);

export default WelcomePage;
