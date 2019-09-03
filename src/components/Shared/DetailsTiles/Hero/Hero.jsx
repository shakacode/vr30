import React from "react";
import css from "./Hero.module.scss";
import Button from "../../Button/Button";

const Hero = () => (
    <div className={css.container}>
        <div className={css.heroDescription}>
         <div className={css.mainHeading}>Let's Get Your 30-day Vacation Rental Booked up!</div>
            <div className={css.subHeading}>List your rentals right now on HawaiiChee.com. Today. Now.</div>
            <Button>List my Rentals</Button>
        </div>
        <div className={css.blankSpace}/>
    </div>
);

export default Hero;
