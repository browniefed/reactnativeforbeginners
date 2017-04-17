import React from "react";
import { InlineBlock } from "glamorous-jsxstyle";
import { FlexReverse } from "../components/sections";
import glamorous from "glamorous";
import { Column } from "glamorous-jsxstyle";

const Packages = glamorous.div({
  backgroundColor: "#F5F5F5",
  padding: "30px 0",
  boxShadow: "inset 0 -15px 0 -10px rgba(38,38,38,0.1), inset 0 15px 0 -10px rgba(38,38,38,0.1)",
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

const BuyContainer = glamorous(Column)({
  backgroundColor: "#FFF",
  boxShadow: "0px 0px 1px rgba(0,0,0,.1)",
  margin: "30px 15px",
  padding: "0",
  minHeight: "350px",
  width: "50%",
});

const BuyWrap = glamorous(Column)({
  flex: "1 0 auto",
  justifyContent: "flex-start",
});

const BuyTitle = glamorous.h1({
  textAlign: "center",
  margin: "15px 0",
  paddingBottom: "15px",
  borderBottom: "1px solid #05A5D1",
  fontSize: "2.5rem",
});

const BuyFooter = glamorous.div({});

const BuyContent = glamorous.div({
  minHeight: "250px",
});

const Item = glamorous.div({
  padding: "5px 15px",
  margin: 0,
  borderBottom: "1px solid #DDD",
});

const ButtonWrap = glamorous.div({
  textAlign: "center",
  margin: "30px 0",
});

const BuyButton = glamorous.button({
  cursor: "pointer",
  color: "#FFF",
  backgroundColor: "#05A5D1",
  background: "linear-gradient(45deg, #05a5d1 60%,#05a5d1 61%,#058baf 100%)",
  border: "1px solid #047e9f",
  borderRadius: "3px",
  padding: "10px 30px",
  fontSize: "1.4rem",
  textTransform: "uppercase",
  fontWeight: 600,
  textAlign: "center",
  textShadow: "2px 2px 0 rgba(255,255,255,0.2)",
  boxShadow: "0 0 0 3px rgba(0,0,0,.05)",
  transition: "all ease .3s",
});

const BuySplit = glamorous.span({
  borderLeft: "1px solid #FFF",
  margin: "0 15px",
});

const BuyFake = glamorous.p({
  textAlign: "center",
  fontWeight: 600,
});

const PackagesSection = ({ onBuyNow, course }) => {
  return (
    <Packages>
      <InnerWrap>
        <FlexReverse>
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
                <Item>Discounts for future courses</Item>
                <BuyFake>
                  There is only one course. And it includes everything! We don't make up fake promotions!
                </BuyFake>
              </BuyContent>
              <BuyFooter>
                <ButtonWrap>
                  <BuyButton onClick={() => onBuyNow(false)}>
                    Buy Now<BuySplit />${course.price}
                  </BuyButton>
                </ButtonWrap>
              </BuyFooter>

            </BuyWrap>
          </BuyContainer>
          <BuyContainer>
            <BuyWrap>
              <BuyTitle>Team Package</BuyTitle>
              <BuyContent>
                <Item>
                  Everything in the Master Package
                </Item>
                <Item>
                  Licenses for up to 10 additional users
                </Item>
                <Item>
                  Invoice emailed to you
                </Item>
                <Item>
                  Add or Remove users at any time
                </Item>
                <Item>
                  10 users for the price of 3
                </Item>
              </BuyContent>
              <BuyFooter>
                <ButtonWrap>
                  <BuyButton onClick={() => onBuyNow(true)}>
                    Buy Now<BuySplit />${course.team_price}
                  </BuyButton>
                </ButtonWrap>
              </BuyFooter>
            </BuyWrap>
          </BuyContainer>
        </FlexReverse>
      </InnerWrap>
    </Packages>
  );
};

export default PackagesSection;
