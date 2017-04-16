import React from "react";
import glamorous from "glamorous";
import { Flex, Column } from "glamorous-jsxstyle";

export const CourseSection = glamorous.div({
  margin: "0",
  backgroundImage: "url(/static/gradient-squares.png), linear-gradient(24deg, #05A5D1 0%, #62d8af 100%)",
  backgroundRepeat: "repeat",
  padding: "30px 0",
  color: "#FFF",
  boxShadow: "inset 0 -15px 0 -10px rgba(38,38,38,0.1), inset 0 15px 0 -10px rgba(38,38,38,0.1)",
});

export const Courses = glamorous(Flex)({
  flexFlow: "row wrap",
  justifyContent: "center",
  padding: "0 30px",
});

export const CourseHeader = glamorous.div({
  textAlign: "center",
  margin: "30px 0",
});

export const CourseItem = glamorous.div({
  maxWidth: "250px",
  textAlign: "center",
  margin: "15px",
  position: "relative",
});

export const CourseImage = glamorous.img({
  width: "100%",
});

export const VideoTitle = glamorous.h5({
  marginBottom: "5px",
  fontSize: "1.1rem",
});
export const VideoDuraiton = glamorous.div({
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "#FFC600",
  color: "#333",
  padding: "3px 5px",
});

const video = {
  title: "Use Animated.timing to transition UI elements",
  duration: 323,
  category: "Animation",
  image: "https://i.vimeocdn.com/video/619001114_640x360.jpg?r=pad",
};

const videos = [video, video, video, video, video, video, video, video, video, video];

const secondsToMinutes = time => ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;

const Course = () => {
  return (
    <CourseSection>
      <CourseHeader>
        <h1>The Course</h1>
        <div>Each video can be watched independently</div>
        <div>Over 7 hours of videos, 37 articles, and 2 apps</div>
      </CourseHeader>
      <Courses>
        {videos.map(vid => {
          return (
            <CourseItem>
              <CourseImage src={vid.image} />
              <div>
                <VideoTitle>{vid.title}</VideoTitle>
                <div>{vid.category}</div>
                <VideoDuraiton>{secondsToMinutes(vid.duration)}</VideoDuraiton>
              </div>
            </CourseItem>
          );
        })}
      </Courses>
    </CourseSection>
  );
};

export default Course;
