import React from "react";
import glamorous from "glamorous";

import { Flex } from "glamorous-jsxstyle";

export const Courses = glamorous(Flex)({
  flexFlow: "row wrap",
  justifyContent: "center",
});

export const CourseHeader = glamorous.div({
  textAlign: "center",
  margin: "30px 0"
})