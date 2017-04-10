import React, { Component } from "react";
import ExecutionEnvironment from "exenv";
import ReactGA from "react-ga";
import { rehydrate, css } from "glamor";
import glamorous from "glamorous";
import { Column } from "glamorous-jsxstyle";

if (typeof window !== "undefined") {
  rehydrate(window.__NEXT_DATA__.ids);
}

if (ExecutionEnvironment.canUseDOM) {
  ReactGA.initialize(process.env.GA_KEY, {
    debug: process.env.NODE_ENV !== "production",
  });
}

class Page extends Component {
  componentDidMount() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Column flex="1">
        {this.props.children}
      </Column>
    );
  }
}

export default Page;
