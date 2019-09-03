/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/no-static-element-interactions */

import * as React from "react"
import { Link } from "react-router-dom"
import cn from "classnames"
// import { Spinner } from "styleguide/components"

import css from "./BaseButton.module.scss"

const getAriaLabel = ({ busy, ariaLabel }) => {
  if (!ariaLabel) return undefined
  return busy ? `${ariaLabel}--Loading` : ariaLabel
}

const BaseButton = ({
  type = "button",
  size = "lg",
  color = "primary",
  ghost = false,
  margin,
  marginTablet,
  marginMobile,
  expanded,
  expandedTablet,
  expandedMobile,
  // Sometimes we don't want it to be actually disabled
  // to have pointer-events on
  visuallyDisabled,
  className,
  onClick,
  setRef,
  // Links
  asLink,
  asNativeLink,
  to,
  targetBlank,
  busy,
  children,
  ...otherProps
}) => {
  const resultClassName = cn(
    css[`size--${size}`],
    css[`color--${color}`],
    margin &&
      (expanded
        ? css[`margin--${margin}--expanded`]
        : css[`margin--${margin}`]),
    marginTablet &&
      (expandedTablet
        ? css[`marginTablet--${marginTablet}--expanded`]
        : css[`marginTablet--${marginTablet}`]),
    marginMobile &&
      (expandedMobile
        ? css[`marginMobile--${marginMobile}--expanded`]
        : css[`marginMobile--${marginMobile}`]),
    { [css.busy]: busy },
    { [css.ghost]: ghost },
    { [css.expanded]: expanded },
    { [css.expandedMobile]: expandedMobile },
    { [css.expandedTablet]: expandedTablet },
    { [css.visuallyDisabled]: visuallyDisabled },
    className
  )
  console.log(resultClassName)
  // Getting rid of focus outline after the click
  let domNode
  const wrappedOnClick = event => {
    // $FlowIgnoreMe
    if (onClick) onClick(event)
    if (domNode) domNode.blur()
  }

  switch (true) {
    case asLink:
      return (
        <Link
          {...otherProps}
          to={to}
          className={css["color--primary"]}
          onClick={event => {
            if (onClick) onClick(event)
            event.target.blur()
          }}
        >
          {children}
        </Link>
      )
    case asNativeLink:
      return (
        <a
          {...otherProps}
          className={resultClassName}
          target={targetBlank && "_blank"}
          rel={targetBlank && "noopener noreferrer"}
          onClick={wrappedOnClick}
          ref={ref => {
            domNode = ref
            if (setRef) setRef(ref)
          }}
        >
          {children}
        </a>
      )
    default:
      return (
        <button
          {...otherProps}
          type={type}
          aria-label={getAriaLabel({
            busy,
            ariaLabel: otherProps["aria-label"],
          })}
          className={css["color--primary"]}
          onClick={wrappedOnClick}
          ref={ref => {
            domNode = ref
            if (setRef) setRef(ref)
          }}
        >
          {busy ? (
            <span aria-hidden="true">
              {/*<Spinner size={size} color={getSpinnerColor(color, ghost)} />*/}
              loading...
              {children}
            </span>
          ) : (
            children
          )}
        </button>
      )
  }
}

export default BaseButton
