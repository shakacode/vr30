import * as React from "react"
import BaseButton from "./BaseButton/BaseButton"

const Button = props => {
  console.log("I am renderend")
  return <BaseButton {...props} />
}

export default Button
