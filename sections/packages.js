import React from "react";
import { SmallText } from "../components/misc";
import { Packages } from "../components/sections";
import { InlineBlock } from "glamorous-jsxstyle";
import glamorous from "glamorous";
import { Column } from "glamorous-jsxstyle";

const BuyContainer = glamorous.div({
  maxWidth: "650px",
  backgroundColor: "#FFF",
  boxShadow: "0px 0px 1px rgba(0,0,0,.1)",
  margin: "15px auto",
  padding: "0",
  minHeight: "350px",
});

const BuyWrap = glamorous(Column)({
  flex: "1 0 auto",
  justifyContent: "space-between",
});

const BuyTitle = glamorous.h1({
  textAlign: "center",
  margin: "15px 0",
  paddingBottom: "15px",
  borderBottom: "1px solid #05A5D1",
});

const BuyFooter = glamorous.div({});

const BuyContent = glamorous.div({});

const Item = glamorous.div({
  padding: "5px 15px",
  margin: 0,
  borderBottom: "1px solid #DDD"
});

const BuyButton = glamorous.button({});

const PackagesSection = ({ onBuyNow, course }) => {
  return (
    <Packages>
      <BuyContainer>
        <BuyWrap>
          <BuyTitle>Master Package</BuyTitle>
          <BuyContent>
            <Item>Access all 40 HD Videos, and 37 articles</Item>
            <Item>
              All Source Code - All application code and example code for each video
            </Item>
            <Item>Download/Stream videos from any device</Item>
            <Item>Unlimited Updates</Item>
            <Item>Future updates when React Native upgrades</Item>
          </BuyContent>
          <BuyFooter>
            <BuyButton onClick={() => onBuyNow(false)}>
              Buy Now - ${course.price}
            </BuyButton>
          </BuyFooter>
          <SmallText>
            There is only one course. And it includes everything! We don't make up fake promotions.
          </SmallText>
        </BuyWrap>
      </BuyContainer>
      <BuyContainer>
        <BuyWrap>
          <BuyTitle>Team Package</BuyTitle>
          <BuyContent>
            <p>
              The team package gets you access to 10 licenses. Also get an invoice emailed to you.
            </p>
          </BuyContent>
          <BuyFooter>
            <BuyButton onClick={() => onBuyNow(true)}>
              Buy Now - ${course.team_price}
            </BuyButton>
          </BuyFooter>
        </BuyWrap>
      </BuyContainer>
    </Packages>
  );
};

export default PackagesSection;
