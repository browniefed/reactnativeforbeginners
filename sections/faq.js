import React from "react";
import glamorous from "glamorous";
import { InlineBlock } from "glamorous-jsxstyle";
import { Follow } from "react-twitter-widgets";

const InnerWrap = glamorous.div({
  margin: "30px auto",
  maxWidth: "1280px",
  width: "100%",
  "@media (max-width: 768px)": {
    width: "auto",
    margin: "30px 5px",
  },
});

const CenterTitle = glamorous.h1({
  textAlign: "center",
});

const Icon = glamorous.img({
  height: "50px",
  margin: "0 15px",
});

const FAQItem = glamorous.div({
  margin: "20px 0",
  borderLeft: "3px solid #05A5D1",
  padding: "5px 0 5px 10px",
});

const FAQTitle = glamorous.h3({
  margin: 0,
  marginBottom: "5px",
});

const FAQAnswer = glamorous.div({
  fontSize: "1.1rem",
  lineHeight: "1.6rem",
  margin: 0,
});

const FollowItems = glamorous.div({
  marginTop: "30px",
});
const FollowWrap = glamorous(InlineBlock)({
  marginLeft: "15px",
  "@media (max-width: 768px)": {
    marginLeft: 0,
    marginTop: "15px",
  },
});

const FAQSection = () => {
  return (
    <div>
      <InnerWrap>
        <CenterTitle>FAQ</CenterTitle>
        <FAQItem>
          <FAQTitle>How do I access my content?</FAQTitle>
          <FAQAnswer>
            You will receive a welcome email that asks you to sign up. If you didn't receive this email you can create an account on
            {" "}
            <a href="https://codedaily.io/">Code Daily</a>
            {" "}
            with the email you used to purchase. Otherwise email me at
            {" "}
            <a href="mailto:jason@codedaily.io">jason@codedaily.io</a>
            {" "}
            and we'll get things sorted out.
          </FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQTitle>What is the quality of the videos?</FAQTitle>
          <FAQAnswer>
            All videos are recorded at 1080P at 1280x720 using the HiDPI monitor setting. We don't use 1920×1080 because this causes text to appear very small. We want everything to be crisp and legible whether you're watching on your phone, computer, or using a projector. We use professional recording equipment so the audio is crisp with no background noise. All videos are available for download as well.
          </FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQTitle>
            Who Is Using React Native?
          </FAQTitle>
          <FAQAnswer>
            <p>React Native is used by companies big and small including:</p>
            <Icon src="/static/facebook.svg" />
            <Icon src="/static/airbnb.svg" />
            <Icon src="/static/instagram.svg" />
            <Icon src="/static/tesla.svg" />
            <Icon src="/static/walmart.svg" />
            <Icon src="/static/mls.svg" />
          </FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQTitle>What about refunds?</FAQTitle>
          <FAQAnswer>
            If you are not 100% satisfied with your purchase I'm happy to refund you. Email me at
            {" "}
            <a href="mailto:jason@codedaily.io">jason@codedaily.io</a>
            {" "}
            with the email you used to purchase the course and I will refund you.
          </FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQTitle>What if I can't afford it? What if I'm a student?</FAQTitle>
          <FAQAnswer>
            No worries! Shoot me an email at
            {" "}
            <a href="mailto:jason@codedaily.io">jason@codedaily.io</a>
            {" "}
            with proof you're a student, or just let me know you can't afford it and I'll provide a discount code for you to use.
          </FAQAnswer>
        </FAQItem>

        <strong>
          Email me at
          {" "}
          <a href="mailto:jason@codedaily.io">jason@codedaily.io</a>
          {" "}
          with any other questions.
        </strong>
        <FollowItems>
          <InlineBlock>
            <Follow username="browniefed" />
          </InlineBlock>
          <FollowWrap>
            <Follow username="codedailyio" />
          </FollowWrap>
        </FollowItems>
      </InnerWrap>
    </div>
  );
};

export default FAQSection;
