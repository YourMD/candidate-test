import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { App } from "./app";

describe("App", () => {
  it("renders exactly one h1", () => {
    const html = renderToStaticMarkup(<App />);
    const headingMatches = html.match(/<h1/g) || [];

    expect(headingMatches).toHaveLength(1);
  });
});
