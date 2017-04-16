import React, { Component } from "react";
import Page from "../page";
import ReactGA from "react-ga";
import { getParsedToken } from "../token";
import { charge, loadCourse } from "../api";

import { RNVersion, SmallText, Text, Android, Apple, ReactNative } from "../components/misc";
import {
  Packages,
  CourseSection,
  SpacedRounded,
  RelativeWrap,
  MtnBg,
} from "../components/sections";
import { Follow } from "react-twitter-widgets";
import { InlineBlock, Flex, Column } from "glamorous-jsxstyle";
import {
  Item,
  BuyTitle,
  BuyContainer,
  BuyFooter,
  BuyButton,
  BuyContent,
} from "../components/purchase";

import TopHeader from "../sections/header";
import Overview from "../sections/overview";
import MeSection from "../sections/me";
import Course from "../sections/course";
import WhatWho from "../sections/whatwho";

const priceToNum = price => parseFloat(price, 10) * 100;

class Index extends Component {
  static async getInitialProps({ req }) {
    const course = await loadCourse(process.env.COURSE_TOKEN);

    return {
      user: getParsedToken(req) || {},
      course,
    };
  }
  componentDidMount() {
    if (this.props.user.id) {
      ReactGA.set({ userId: this.props.user.id, email: this.props.user.email });
    }

    this.stripe = StripeCheckout.configure({
      key: process.env.STRIPE_PUBLIC_KEY,
      image: "https://stripe.com/img/documentation/checkout/marketplace.png",
      locale: "auto",
      zipCode: true,
      token: async (token, tokenInfo) => {
        try {
          const charged = await charge(token, process.env.COURSE_TOKEN);
          ReactGA.set({ email: token.email, category: "React Native" });
          ReactGA.event({
            category: "BUY_NOW",
            action: "BUY_SUCCESS",
            label: "Buy Success",
          });
        } catch (e) {
          ReactGA.event({
            category: "BUY_NOW",
            action: "BUY_FAIL",
            label: "Buy Failed",
          });
        }
      },
    });
  }
  handleBuyNow = isTeam => {
    ReactGA.event({
      category: "BUY_NOW",
      action: "CLICKED_BUY_BUTTON",
      label: "Clicked Buy Button",
    });

    const price = isTeam ? this.props.course.team_price : this.props.course.price;
    let title = this.props.course.title;

    if (isTeam) {
      title = `${title} (Team Package)`;
    }

    this.stripe.open({
      name: "Code Daily",
      description: title,
      amount: priceToNum(price),
    });
  };
  render() {
    return (
      <Page>
        <TopHeader />
        <RelativeWrap>
          <MeSection />
          <Overview />
        </RelativeWrap>
        <WhatWho />
        <Course />

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
                <BuyButton onClick={() => this.handleBuyNow(false)}>
                  Buy Now - ${this.props.course.price}
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
                <BuyButton onClick={() => this.handleBuyNow(true)}>
                  Buy Now - ${this.props.course.team_price}
                </BuyButton>
              </BuyFooter>
            </InlineBlock>
          </BuyContainer>
        </Packages>

        <div>
          <h2>What is react native</h2>
          <div>
            <h4>React Native is used by companies big and small including: </h4>
            Facebook
            AirBnB
            Instagram
            Tesla
            Walmart
            MLS
          </div>
          <div>
            FAQ
          </div>
        </div>
      </Page>
    );
  }
}

export default Index;
