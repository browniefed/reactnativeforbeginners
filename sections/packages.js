import React from "react";
import { SmallText } from "../components/misc";
import { Packages } from "../components/sections";
import { InlineBlock } from "glamorous-jsxstyle";
import {
  Item,
  BuyTitle,
  BuyContainer,
  BuyFooter,
  BuyButton,
  BuyContent,
} from "../components/purchase";

const PackagesSection = ({ onBuyNow, course }) => {
  return (
    <Packages>
      <BuyContainer>
        <InlineBlock>
          <BuyTitle>Master Package</BuyTitle>
          <BuyContent>
            <ul>
              <Item>Access all 40 HD Videos, and 37 articles</Item>
              <Item>
                All Source Code - All application code and example code for each video
              </Item>
              <Item>Download/Stream videos from any device</Item>
              <Item>Unlimited Updates</Item>
              <Item>Future updates when React Native upgrades</Item>
            </ul>
          </BuyContent>
          <BuyFooter>
            <BuyButton onClick={() => onBuyNow(false)}>
              Buy Now - ${course.price}
            </BuyButton>
          </BuyFooter>
          <SmallText>
            There is only one course. And it includes everything! We don't make up fake promotions.
          </SmallText>
        </InlineBlock>
      </BuyContainer>
      <BuyContainer>
        <InlineBlock>
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
        </InlineBlock>
      </BuyContainer>
    </Packages>
  );
};

export default PackagesSection;
