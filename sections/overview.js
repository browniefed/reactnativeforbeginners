import React from "react";
import glamorous from "glamorous";
import { Column } from "glamorous-jsxstyle";

import { SpacedRounded, FlexReverse } from "../components/sections";
import { Text } from "../components/misc";

const FlexMe = glamorous(FlexReverse)({
  alignItems: "flex-start",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    alignItems: "center",
  },
});

const Description = glamorous.div({
  marginTop: "50px",
});

const OverviewSection = () => {
  return (
    <SpacedRounded>
      <Column>
        <div>
          Look at this gif here. It's so great
        </div>
        <Description>
          <h2>It's time to learn React Native</h2>
          <Text>
            React Native has gained immense popularity with it's ability to share code across iOS and Android, develop performant apps quickly, and even update without going through the app store review process.
          </Text>
          <Text>
            We'll walk through getting setup, cover some basics, then dive into building a Weather app.
            We'll learn about native components and then expand and build on top of our Weather app.
            Finally we'll step our game up and build out an ecommerce app. You'll finally understand how to take control of huge lists, navigation, forms, and truly grasp React Native development.
          </Text>
          <Text>
            If you already ready to start building "get the course now".
          </Text>
        </Description>
      </Column>
    </SpacedRounded>
  );
};

export default OverviewSection;
