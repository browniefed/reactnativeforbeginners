import React from "react";
import { Android, Apple, ReactNative } from "../components/misc";
import glamorous from "glamorous";

const LandingHeader = glamorous.div({
  textAlign: "center",
  backgroundColor: "#FFC600",
  padding: "75px 0",
  boxShadow: "inset 0 -15px 0 -10px rgba(38,38,38,0.1), inset 0 15px 0 -10px rgba(38,38,38,0.1)",
});

const TextLine = glamorous.h1({
  textAlign: "center",
  color: "#333",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "75px",
  fontWeight: 800,
  letterSpacing: "-3px",
  textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
  margin: 0,
  backgroundColor: "rgba(255,255,255,.4)",
  "@media (max-width: 768px)": {
    fontSize: "50px",
  },
});

const SmallTextHeader = glamorous(TextLine)({
  fontSize: "35px",
  letterSpacing: "0px",
  "@media (max-width: 768px)": {
    fontSize: "25px",
  },
});

const SubText = glamorous.p({
  textAlign: "center",
  color: "#333",
  fontSize: "30px",
  textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
  "@media (max-width: 768px)": {
    fontSize: "20px",
  },
});

const TopHeader = () => {
  return (
    <LandingHeader>
      <TextLine>
        React Native
      </TextLine>
      <SmallTextHeader>
        for
      </SmallTextHeader>
      <TextLine>
        Beginners
      </TextLine>
      <SubText>Get the knowledge to build the app you've always dreamed of</SubText>
      <Android />
      <ReactNative />
      <Apple />
    </LandingHeader>
  );
};

export default TopHeader;
