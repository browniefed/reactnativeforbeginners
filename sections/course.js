import React from "react";

import {
  CourseSection,
  Courses,
  CourseHeader,
  CourseItem,
  VideoDuraiton,
  CourseImage,
  VideoTitle,
} from "../components/course";

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
