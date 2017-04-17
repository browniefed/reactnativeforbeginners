import React from "react";
import glamorous from "glamorous";
import { Flex } from "glamorous-jsxstyle";

export const WhiteRounded = glamorous.div({
  padding: "20px",
  backgroundColor: "rgba(255,255,255,.95)",
  borderRadius: "2px",
  border: "5px solid rgba(0,0,0,.1)",
});

export const SpacedRounded = glamorous(WhiteRounded)({
  margin: "30px auto",
  maxWidth: "1280px",
  width: "100%",
  "@media (max-width: 768px)": {
    width: "auto",
    margin: "30px 5px",
  },
});

export const RelativeWrap = glamorous.div({
  position: "relative",
  backgroundImage: "url(/static/bg.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  boxShadow: "inset 0 -15px 0 -10px rgba(38,38,38,0.1), inset 0 15px 0 -10px rgba(38,38,38,0.1)",
});

export const FlexReverse = glamorous(Flex)({
  flex: "1 0 auto",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});
