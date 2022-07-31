import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Loading from "./loading";

describe("Button", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Loading />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
