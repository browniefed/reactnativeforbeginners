import React from "react";
import glamorous from "glamorous";

export const BuyContainer = glamorous.div({
  maxWidth: "400px",
  backgroundColor: "#FFF",
  boxShadow: "0px 0px 1px rgba(0,0,0,.1)",
  margin: "15px auto",
  padding: "0 15px",
  minHeight: "350px",
});

export const BuyTitle = glamorous.h2({
  textAlign: "center",
  margin: "15px",
  paddingBottom: "15px",
  borderBottom: "1px solid #05A5D1"
});

export const BuyFooter = glamorous.div({});

export const BuyContent = glamorous.div({});

export const Item = glamorous.li({
  margin: 0,
});

export const BuyButton = glamorous.button({});

// export const Button = glamorous.button({
//   padding: "8px 36px",
//   backgroundColor: "rgba(255,255,255,.03)",
//   border: "5px solid rgba(255,255,255,.5)",
//   cursor: "pointer",
//   transition: "all ease .3s",
//   color: "#FFF",
//   ":hover": {
//     backgroundColor: "rgba(255,255,255,.15)"
//   }
// })
