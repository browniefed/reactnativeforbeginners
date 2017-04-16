import React from "react";
import glamorous from "glamorous";

import { Flex, Column } from "glamorous-jsxstyle";

export const CourseSection = glamorous.div({
  margin: "0",
  backgroundImage: "url(/static/gradient-squares.png)",
  backgroundColor: "#05A5D1",
  backgroundRepeat: "repeat",
  padding: "30px 0",
  color: "#FFF",
  boxShadow: "inset 0 -15px 0 -10px rgba(38,38,38,0.1), inset 0 15px 0 -10px rgba(38,38,38,0.1)",
});

export const Courses = glamorous(Flex)({
  flexFlow: "row wrap",
  justifyContent: "center",

});

export const CourseHeader = glamorous.div({
  textAlign: "center",
  margin: "30px 0",
});

export const CourseItem = glamorous.div({
  textAlign: "center",
  margin: "15px",
  position: "relative",
});

export const CourseImage = glamorous.img({
  width: "100%",
  maxWidth: "300px",
});

export const VideoTitle = glamorous.h5({
  marginBottom: "5px",
})
export const VideoDuraiton = glamorous.div({
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "#FFC600",
  color: "#333",
  padding: "3px 5px",
});
