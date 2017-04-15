import React, { Component } from "react";
import Page from "../page";
import ReactGA from "react-ga";
import { getParsedToken } from "../token";
import { charge, loadCourse } from "../api";


const priceToNum = (price) => parseFloat(price, 10) * 100

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
          ReactGA.set({ email: token.email, category: "React Native" })
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
  handleBuyNow = (isTeam) => {
    ReactGA.event({
      category: "BUY_NOW",
      action: "CLICKED_BUY_BUTTON",
      label: "Clicked Buy Button",
    });

    const price = isTeam ? this.props.course.team_price : this.props.course.price;
    let title = this.props.course.title;

    if (isTeam) {
      title = `${title} (Team Package)`
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
        <div>
          <h1>Learn React Native</h1>
        </div>
        <div>
          The course
          800 hours of videos
          37 tutorials lessons
          2 apps
          <div>
            List sections w/ videos in each

          </div>
        </div>

        <div>
          <div onClick={() => this.handleBuyNow(false)}>
            Package 1 - basic
          </div>
          <div onClick={() => this.handleBuyNow(true)}>
            Package 2 - team
          </div>
        </div>
        <div>
          <h2>What is react native</h2>
          <div>
            List of companies who use it
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
