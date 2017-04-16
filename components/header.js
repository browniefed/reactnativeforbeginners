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
  backgroundColor: "#FFC600",
  padding: "75px 0",
  backgroundImage: "url(/static/pattern_cubes.png)",
  backgroundRepeat: "repeat",
});

export const TextHeader = glamorous.h1({
  textAlign: "center",
  color: "#333",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "75px",
  fontWeight: 800,
  letterSpacing: "-3px",
  lineHeight: 1,
  textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
  margin: 0,
  "@media (max-width: 768px)": {
    fontSize: "50px"
  }
});

export const SmallTextHeader = glamorous(TextHeader)({
  fontSize: "35px",
  letterSpacing: "0px",
  "@media (max-width: 768px)": {
    fontSize: "25px",
  }
})

export const SubText = glamorous.p({
  textAlign: "center",
  color: "#333",
  fontSize: "30px",
  textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
  "@media (max-width: 768px)": {
    fontSize: "20px",
  }
})

export default Header;
