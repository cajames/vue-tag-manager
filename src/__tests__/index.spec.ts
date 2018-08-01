jest.mock("../utils");
jest.mock("../dom-injector");
jest.mock("../tag-manager");

import VueTagManager from "../index";
import { warn } from "../utils";
import TagManager from "../tag-manager";

const mockVue = jest.fn(() => ({
  prototype: {}
}));

describe("VuePlugin", () => {
  it("should have a default export as Vue plugin", () => {
    expect(VueTagManager.install).toBeDefined();
    expect(typeof VueTagManager.install).toBe("function");
  });

  it("should only error in console when an error is thrown", () => {
    expect(() => VueTagManager.install({})).not.toThrowError();
    expect(warn).toHaveBeenCalled();
  });

  it("should only be installed once when called multiple times", () => {
    jest.resetAllMocks();
    VueTagManager.install(mockVue, { gtmId: "something" });
    VueTagManager.install(mockVue, { gtmId: "something" });
    expect(TagManager).toHaveBeenCalledTimes(1);
  });
});
