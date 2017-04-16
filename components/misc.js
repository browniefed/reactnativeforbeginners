import React from "react";
import glamorous from "glamorous";

export const RNVersion = glamorous.div({
  backgroundColor: "#FFC600",
  fontSize: "30px",
  padding: "25px",
  border: "3px solid rgba(0,0,0,.2)",
  display: "inline-block",
  color: "#FFF",
  fontWeight: 800,
  textShadow: "rgba(0,0,0,.05) 3px 2px 0",
});

export const SmallText = glamorous.div({
  fontSize: "12px",
});

export const Text = glamorous.p({
  color: "#333",
  fontSize: "1.1rem",
  lineHeight: "1.3rem",
})

const PlatformImage = glamorous.img({
  width: "75px",
  height: "75px",
});

export const Android = () => <PlatformImage src="/static/android.svg" />;
export const Apple = () => <PlatformImage src="/static/apple.svg" />;
export const ReactNative = () => <PlatformImage src="/static/react_dark.svg" />;
