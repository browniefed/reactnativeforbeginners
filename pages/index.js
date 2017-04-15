import React, { Component } from "react";
import Page from "../page";
import ReactGA from "react-ga";
import { getParsedToken } from "../token";
import { charge, loadCourse } from "../api";

import Header, { TextLine, SubText, SmallTextHeader } from "../components/header";
import { RNVersion, SmallText } from "../components/misc";
import { Packages } from "../components/sections";
import {
  Item,
  BuyTitle,
  BuyContainer,
  BuyFooter,
  BuyButton,
  BuyContent,
} from "../components/purchase";

const priceToNum = price => parseFloat(price, 10) * 100;

const video = {
  title: "Use Animated.timing to transition UI elements",
  duration: 33,
  category: "Animation",
  image: "https://i.vimeocdn.com/video/619001114_640x360.jpg?r=pad",
};

const videos = [video, video, video, video, video, video, video, video, video, video];

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
          <SubText>Gain the knowledge to build the app you've always dreamed of.</SubText>
        </Header>
        <div>
          <RNVersion>Built With React Native V.43</RNVersion>
          <div>
            Look at this gif here. It's so great
          </div>
          <div>
            <h5>It's time to learn React Native</h5>
            <p>
              React Native has gained immense popularity with it's ability to share code across iOS and Android, develop performant apps quickly, and even update without going through the app store review process.
            </p>
            <p>
              We'll walk through getting setup, cover some basics, then dive into building a Weather app.
              We'll learn about native components and then expand and build on top of our Weather app.
              Finally we'll step our game up and build out an ecommerce app. You'll finally understand how to take control of huge lists, navigation, forms, and truly grasp React Native development.
            </p>
            <p>
              If you already ready to start building "get the course now".
            </p>
          </div>
        </div>

        <div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <h3>The Course</h3>
          <div>Each video can be watched independently</div>
          <div>Over 7 hours of videos, 37 articles, and 2 apps</div>
          <div>
            {videos.map(vid => {
              return (
                <div>
                  <img src={vid.image} width="250px" />
                  <div>
                    <h5>{vid.title}</h5>
                    <div>{vid.category}</div>
                    <div>{vid.duration}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Packages>
          <BuyContainer>
            <BuyTitle>Master Package</BuyTitle>
            <BuyContent>
              <ul>
                <Item>Access all 40 HD Videos, and 37 articles</Item>
                <Item>All Source Code - All application code and example code for each video</Item>
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

            <SmallText>There is only one course. And it includes everything!</SmallText>
          </BuyContainer>
          <BuyContainer>
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
