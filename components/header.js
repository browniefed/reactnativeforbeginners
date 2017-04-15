import React from "react";
import glamorous from "glamorous";

const Header = ({ children }) => {
  return (
    <LandingHeader>
      {children}
    </LandingHeader>
  );
};

export const TextLine = ({ children }) => (
  <TextHeader>
    {children}
  </TextHeader>
);

const LandingHeader = glamorous.div({
  textAlign: "center",
  backgroundColor: "#333",
  padding: "75px 0"
});

export const TextHeader = glamorous.h1({
  textAlign: "center",
  color: "#FFF",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "75px",
  fontWeight: 800,
  letterSpacing: "-3px",
  lineHeight: 1,
  textShadow: "#666 3px 2px 0",
  margin: 0
});

export const SmallTextHeader = glamorous(TextHeader)({
  fontSize: "30px",
})

export const SubText = glamorous.p({
  textAlign: "center",
  color: "#FFF",
  fontSize: "20px",
})

export default Header;
