import React, { Component } from "react";
import Page from "../page";
import ReactGA from "react-ga";
import { getParsedToken } from "../token";
import { charge } from "../api";

// IF USER ReactGA.set({ userId: 123 })
// ReactGA.modalview on purchase click
// ReactGA.event on purchase ? purchase click too
/*
ReactGA.event({
  category: 'Editing',
  action: 'Deleted Component',
  label: 'Game Widget'
});
*/
class Index extends Component {
  static getInitialProps({ req }) {
    return { user: getParsedToken(req) };
  }
  componentDidMount() {
    // this.props.user;

    this.stripe = StripeCheckout.configure({
      key: process.env.STRIPE_PUBLIC_KEY,
      image: "https://stripe.com/img/documentation/checkout/marketplace.png",
      locale: "auto",
      zipCode: true,
      token: async (token, tokenInfo) => {
        try {
          const charged = await charge(token, process.env.COURSE_TOKEN);
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
  handleBuyNow = () => {
    ReactGA.event({
      category: "BUY_NOW",
      action: "CLICKED_BUY_BUTTON",
      label: "Clicked Buy Button",
    });

    this.stripe.open({
      name: "Code Daily",
      description: "Learn React Native",
      amount: 7200,
    });
  };
  render() {
    return (
      <Page>
        <button onClick={this.handleBuyNow}>Buy Now</button>
      </Page>
    );
  }
}

export default Index;
