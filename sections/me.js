import React from "react";
import glamorous from "glamorous";

import { SpacedRounded, FlexReverse } from "../components/sections";
import { Text } from "../components/misc";
import { Follow } from "react-twitter-widgets";
import { InlineBlock } from "glamorous-jsxstyle";


const MeImg = glamorous.img({
  width: "256px",
  height: "226px",
});

const MeDescription = glamorous.div({
  marginLeft: "50px",
  "@media (max-width: 768px)": {
    marginLeft: "0",
    marginTop: "30px",
  },
});

const FlexMe = glamorous(FlexReverse)({
  alignItems: "flex-start",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    alignItems: "center",
  },
});

const MeTitle = glamorous.h2({
  marginTop: 0,
  "@media (max-width: 768px)": {
    textAlign: "center",
  },
});

const FollowWrap = glamorous(InlineBlock)({
  marginLeft: "15px",
  "@media (max-width: 768px)": {
    marginLeft: 0,
    marginTop: "15px",
  },
});

const MeSection = () => {
  return (
    <SpacedRounded>
      <FlexMe>
        <MeImg src="/static/me.jpg" />
        <MeDescription>
          <MeTitle>Meet Jason Brown</MeTitle>
          <Text>
            On the internet he is known as <a href="https://browniefed.com" target="_blank">Browniefed</a>. He is a self taught Developer with a focus on the Front End located in the Portland, Oregon. He has worked for many startups converting and integrating React into their applications. He organizes the very successful Portland React.JS Meetup and has hosted workshops for organizations like ChickTech and Women Who Code, given talks at code schools, as well as helped code schools develop their curriculum.
          </Text>
          <Text>
            Since React Native has been published he has invested countless hours into building complex screens, animations, and applications with it. To gain additional experience he has freelanced with many companies to build their React Native applications. He also the author of the very popular React Native Animation Fundamentals book, as well as publisher of many courses and lessons on Egghead.
          </Text>
          <InlineBlock>
            <Follow username="browniefed" />
          </InlineBlock>
          <FollowWrap>
            <Follow username="codedailyio" />
          </FollowWrap>
        </MeDescription>
      </FlexMe>
    </SpacedRounded>
  );
};

export default MeSection;
