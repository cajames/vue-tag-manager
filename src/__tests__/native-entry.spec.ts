
import * as native from "../native-entry";

describe("NativeEntry", () => {

  it("should provide an initialize function", () => {
    expect(native.initialize).toBeDefined();
    expect(native.initialize).toBeInstanceOf(Function);
  });

  describe("#initialize", () => {

    afterEach(() => {
      delete (global as any).TagManager
      delete (global as any).vgtmInstalled
    })

    it("should only warn when an error is raised", () => {
      expect(() => native.initialize({ gtmId: null })).not.toThrowError()
    });

    it("should return an instanciated TagManager when called", () => {
      const tagManager = native.initialize({ gtmId: '1234' })
      expect(tagManager).toBeTruthy()
    });

    it("should install GTM once when called multiple times", () => {

      const tagManager1 = native.initialize({ gtmId: "123" })
      expect(tagManager1).toBeTruthy()

      const tagManager2 = native.initialize({ gtmId: "123" })
      expect(tagManager2).toBeFalsy()

    });

  });
});
