import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

import { App } from "./app";

describe("test for Thing", () => {
  it("expect the correct number of h1s to equal 1", () => {
    expect(shallow(<App />).find("h1").length).toEqual(1);
  });
});
