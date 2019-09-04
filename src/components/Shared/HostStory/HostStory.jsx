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
        {/*Richard Sterman has been building VR30.rent since 2013 with the idea of*/}
        {/*creating a master directory of all the legal,*/}
        {/*non-vacation-rental-permitted, 30-day listings so that travelers would*/}
        {/*easily find right 30-day rentals for their visits. The lack of*/}
        {/*enforcement on Oahu resulted in no interest in legal rentals. The big*/}
        {/*listing sites like VRBO.com and Airbnb.com hosted the majority of the*/}
        {/*listings.*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*On August 1st, 2019, Bill 89 passed and became law. Oahu hosts had to*/}
        {/*switch to 30 minimum stays, but the big listings sites don't attract*/}
        {/*many visitors interested in doing 30+ day stays. The owners and managers*/}
        {/*need an alternative marketing source.*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*Richard gets back into high gear with building VR30.rent, but realizes*/}
        {/*that it's tough to build good technology.*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*Common friends introduce Richard to Justin Gordon who founded{" "}*/}
        {/*<a href={"www.shakacode.com"} className={css.link}>*/}
        {/*ShakaCode.com*/}
        {/*</a>*/}
        {/*, a company that focuses on building sites like VR30.rent. ShakaCode has*/}
        {/*also been its own vacation rental site,{" "}*/}
        {/*<a className={css.link} href={"www.hawaiichee.com"}>*/}
        {/*HawaiiChee.com*/}
        {/*</a>*/}
        {/*, since 2015.*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*It immediately became clear to both of them that they should partner up!*/}
        {/*So Richard has joined Hawaii Chee as the “Manager of Oahu Operations,”*/}
        {/*responsible for building the Oahu and overall Hawaii inventory for*/}
        {/*Hawaii Chee (and VR30.rent).*/}
        {/*<br />*/}
        <MDXRenderer>{props.story}</MDXRenderer>

        <Button className={css.button} />
      </div>
    </div>
  </div>
);

export default HostStory;
