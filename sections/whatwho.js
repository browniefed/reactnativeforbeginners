import React from "react";
import { SpacedRounded, FlexReverse } from "../components/sections";
import glamorous from "glamorous";
import { InlineBlock, Flex, Column } from "glamorous-jsxstyle";

const Spacer = glamorous(SpacedRounded)({
  margin: "30px 15px",
  "@media (max-width: 768px)": {
    width: "auto",
    margin: "10px 5px",
  },
});

const Wrapper = glamorous(FlexReverse)({
  padding: "30px 0",
  backgroundColor: "#FFC600",
  backgroundImage: "url(/static/fake-luxury.png)",
  backgroundRepeat: "repeat",
  boxShadow: "inset 0 -15px 0 -10px rgba(38,38,38,0.1), inset 0 15px 0 -10px rgba(38,38,38,0.1)",
});

const WhatWhoSection = () => {
  return (
    <Wrapper>
      <Spacer>
        <h4>What You'll Be An Expert In</h4>
        <ul>
          <li>How to build a complete App in React Native</li>
          <li>Understand how to use native components</li>
          <li>Building application navigation flow with react-navigation</li>
          <li>Working with AsyncStorage to persist data across application loads</li>
          <li>Learn latest ES6 and beyond features</li>
          <li>Basic and advanced animations to improve UX</li>
          <li>...the list goes on. Check the full video list below</li>
        </ul>
      </Spacer>
      <Spacer>
        <h4>Who Should Get This Course</h4>
        <p>
          Anyone looking to expand on their React skills and take them mobile. If you don't know React already then don't worry, we'll cover all the basics.
        </p>
        <ul>
          <li>React developers currently using Cordova</li>
          <li>Developers or companies looking to launch apps across both platforms</li>
          <li>Anyone looking to grow their JavaScript skills</li>
        </ul>

        <h3>Still unsure?</h3>
        <h3>We provide a 100% money back guarantee!</h3>
      </Spacer>
    </Wrapper>
  );
};

export default WhatWhoSection;
