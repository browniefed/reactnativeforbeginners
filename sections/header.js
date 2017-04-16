import React from "react";
import Header, { TextLine, SubText, SmallTextHeader } from "../components/header";
import { Android, Apple, ReactNative } from "../components/misc";

const TopHeader = () => {
  return (
    <Header>
      <TextLine>
        React Native
      </TextLine>
      <SmallTextHeader>
        for
      </SmallTextHeader>
      <TextLine>
        Beginners
      </TextLine>
      <SubText>Get the knowledge to build the app you've always dreamed of</SubText>
      <Android />
      <ReactNative />
      <Apple />
    </Header>
  );
};

export default TopHeader;
