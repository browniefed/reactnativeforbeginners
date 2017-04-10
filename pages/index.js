import React, { Component } from "react";
import Page from "../page";

import { charge } from "../api";

const COURSE_TOKEN = "learnreactnative";

class Index extends Component {
  componentDidMount() {
    this.stripe = StripeCheckout.configure({
      key: process.env.STRIPE_PUBLIC_KEY,
      image: "https://stripe.com/img/documentation/checkout/marketplace.png",
      locale: "auto",
      zipCode: true,
      token: async (token, tokenInfo) => {
        try {
          const charged = await charge(token, COURSE_TOKEN);
        } catch (e) {
          // WE BROKE
        }
      },
    });
  }
  handleBuyNow = () => {
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
