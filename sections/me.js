import React from "react";
import { SpacedRounded, FlexReverse } from "../components/sections";
import { Text } from "../components/misc";
import { Follow } from "react-twitter-widgets";
import { InlineBlock } from "glamorous-jsxstyle";

import glamorous from "glamorous";

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
          <MeTitle>Jason Brown</MeTitle>
          <Text>
            I'm a self taught Front End Developer in the Portland, Oregon. I've worked for many startups converting and integrating React into their applications. I organize the very successful Portland React.JS Meetup. I've hosted workshops for organizations like Chicktech and Women Who Code, given talks at code schools, as well as helped code schools develop their curriculum.
          </Text>
          <Text>
            Since React Native has been published I've invested countless hours into building complex screens, animations, and applications with it. I've independently freelanced to help many companies build their React Native applications. I'm the author of a very popular React Native Animation Fundamentals book, as well as publishing many courses and lessons on Egghead.
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
