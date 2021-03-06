import React, { Component } from "react";
import Page from "../page";
import ReactGA from "react-ga";
import { getParsedToken } from "../token";
import { charge, loadCourse } from "../api";

import { CourseSection, SpacedRounded, RelativeWrap, MtnBg } from "../components/sections";
import { Follow } from "react-twitter-widgets";
import { InlineBlock, Flex, Column } from "glamorous-jsxstyle";

import TopHeader from "../sections/header";
import Overview from "../sections/overview";
import MeSection from "../sections/me";
import Course from "../sections/course";
import WhatWho from "../sections/whatwho";
import Packages from "../sections/packages";
import FAQSection from "../sections/faq";

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
          <Overview />
          <MeSection />
        </RelativeWrap>
        <WhatWho />
        <Course />
        <Packages onBuyNow={this.handleBuyNow} course={this.props.course} />
        <FAQSection />
      </Page>
    );
  }
}

export default Index;
