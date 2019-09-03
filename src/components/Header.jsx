import React from "react"
import { Button } from "../styleguide"

export const Header = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      paddingTop: "40px",
      paddingBottom: "40px",
    }}
  >
    <div
      style={{
        flex: "2",
        alignSelf: "center",
      }}
    >
      Hello
    </div>
    <div style={{ flex: "1", display: "flex" }}>
      <div
        style={{
          color: "#243A53",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "24px",
          textAlign: "center",
          flex: "1",
          alignSelf: "center",
        }}
      >
        About
      </div>
      <div
        style={{
          color: "#243A53",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "24px",
          textAlign: "center",
          flex: "1",
          alignSelf: "center",
        }}
      >
        FAQ
      </div>
      <div style={{ flex: "1" }}>
        <Button size="lg">Hello</Button>
      </div>
    </div>
  </div>
)
