
import * as native from "../native-entry";

describe("NativeEntry", () => {

  it("should provide an initialize function", () => {
    expect(native.initialize).toBeDefined();
    expect(native.initialize).toBeInstanceOf(Function);
  });

  describe("#initialize", () => {

    afterEach(() => {
      delete (global as any).TagManager
    })

    it("should only warn when an error is raised", () => {
      expect(() => native.initialize({ gtmId: null })).not.toThrowError()
    });

    it("should initialize `TagManager` in the global namespace by default", () => {
      native.initialize({ gtmId: '1234' })
      expect((global as any).TagManager).toBeDefined()
    });

    it("should initialize the TagManager in the global namespace when variable defined", () => {});

    it("should install GTM once when called multiple times", () => {

      native.initialize({ gtmId: "123" })

      console.log((global as any).TagManager)
      expect((global as any).TagManager).toBeDefined()
      delete (global as any).TagManager

      native.initialize({ gtmId: "1234" })
      expect((global as any).TagManager).not.toBeDefined()
    });

  });
});
