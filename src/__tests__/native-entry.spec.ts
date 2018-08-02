import * as native from "../native-entry";

describe("NativeEntry", () => {
  it("should provide an initialize function", () => {
    expect(native.initialize).toBeDefined();
    expect(native.initialize).toBeInstanceOf(Function);
  });

  describe("#initialize", () => {
    xit("should only warn when an error is raised", () => {});
    xit("should install GTM once when called multiple times", () => {});
    xit("should initialize `TagManager` in the global namespace", () => {});
  });
});
