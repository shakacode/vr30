import React from "react";
import css from "./DetailsTiles.module.scss";

const DetailsTiles = (props) => (
    <div className={css.container}>
        {props.text}
    </div>
);

export default DetailsTiles;
