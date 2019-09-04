import React from "react";
import css from "./DetailsContainer.module.scss";
import { DetailsTiles } from "../index";

const DetailsContainer = () => (
  <div className={css.container}>
    <DetailsTiles
      text={
        "Guests searching for dates shorter than your minimum 30-day stay will still be able to find your listing advertised as having a 30-day minimum with the ability for guests to still send you inquiries."
      }
    />
    <DetailsTiles
      text={
        "Within a short time, VR30.rent will be up and running, showing your listings that are managed on HawaiiChee.com. Then you'll have 2 sites bringing you inquiries!"
      }
    />
    <DetailsTiles
      className={css.lastTile}
      text={
        "Within a short time, VR30.rent will be up and running, showing your listings that are managed on HawaiiChee.com. Then you'll have 2 sites bringing you inquiries!"
      }
    />
  </div>
);

export default DetailsContainer;
