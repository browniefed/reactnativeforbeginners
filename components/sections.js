import React from "react";
import glamorous from "glamorous";

import { Flex } from "glamorous-jsxstyle";

export const Packages = glamorous.div({
  backgroundColor: "#F5F5F5",
  padding: "30px 0",
});

export const WhiteRounded = glamorous.div({
  padding: "20px",
  backgroundColor: "#FFF",
  borderRadius: "4px",
  border: "3px solid rgba(0,0,0,.2)",
});

export const SpacedRounded = glamorous(WhiteRounded)({
  margin: "30px auto",
  maxWidth: "1280px",
  width: "100%",
});

export const CourseSection = glamorous.div({
  margin: "30px 0",
});
