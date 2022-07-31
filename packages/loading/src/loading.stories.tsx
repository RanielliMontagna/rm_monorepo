import React from "react";
import ThemeProvider from "../../themeProvider/src/themeProvider";
import Loading from "./loading";

export default {
  component: Loading,
  title: "Design System/Loading",
};

export const padrao = () => (
  <ThemeProvider>
    <Loading />
  </ThemeProvider>
);
