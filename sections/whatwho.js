import React from "react";
import { WhiteRounded, FlexReverse } from "../components/sections";
import glamorous from "glamorous";
import { InlineBlock, Flex, Column } from "glamorous-jsxstyle";

const Spacer = glamorous(WhiteRounded)({
  margin: "30px 15px",
  width: "50%",
  display: "flex",
  flex: "1 0 auto",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "8px",
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
});

const InnerWrap = glamorous.div({
  margin: "30px auto",
  maxWidth: "1280px",
  width: "100%",
  "@media (max-width: 768px)": {
    width: "auto",
    margin: "30px 5px",
  },
});

const Title = glamorous.h2({
  color: "#333",
  textAlign: "center",
  margin: "15px 0px",
  paddingBottom: "15px",
  borderBottom: "1px solid #05A5D1",
});

const Content = glamorous.div({
  padding: "15px",
});

const Item = glamorous.li({
  color: "#333",
  fontSize: "1.2rem",
  lineHeight: "1.6rem",
});

const Text = glamorous.p({
  color: "#333",
  fontSize: "1.2rem",
  lineHeight: "1.6rem",
});

const TopText = glamorous(Text)({
  marginTop: 0,
});

const Footer = glamorous.div({
  textAlign: "center",
  paddingTop: "8px",
  borderTop: "1px solid #05A5D1",
});

const WhatWhoSection = () => {
  return (
    <Wrapper>
      <InnerWrap>
        <FlexReverse>
          <Spacer>
            <Title>What You'll Be An Expert In</Title>
            <Content>
              <TopText>
                This course is meant to help you understand how to get started with the basics React Native all the way through building a complex application with animations.
              </TopText>
              <Text>
                By the end you'll have everything you need to start building your own application.
              </Text>

              <ul>
                <Item>How to build a complete App in React Native</Item>
                <Item>Understand how to use native components</Item>
                <Item>Building application navigation flow with react-navigation</Item>
                <Item>Working with AsyncStorage to persist data across application loads</Item>
                <Item>Learn latest ES6 and beyond features</Item>
                <Item>Basic and advanced animations to improve UX</Item>
                <Item>...the list goes on. Check the full video list below</Item>
              </ul>
            </Content>
          </Spacer>
          <Spacer>
            <Title>Who Should Get This Course</Title>
            <Content>
              <TopText>
                Anyone looking to expand on their React skills and take them mobile. If you don't know React already then don't worry, we'll cover all the basics.
              </TopText>
              <ul>
                <Item>React developers currently using Cordova</Item>
                <Item>Developers or companies looking to launch apps across both platforms</Item>
                <Item>Anyone looking to grow their JavaScript skills</Item>
                <Item>Someone looking to convert their web app to React Native</Item>
              </ul>
            </Content>
            <Footer>
              <Text>Still unsure? </Text>
              <Text>We provide a <strong>100% money back guarantee!</strong></Text>
            </Footer>
          </Spacer>
        </FlexReverse>
      </InnerWrap>
    </Wrapper>
  );
};

export default WhatWhoSection;
