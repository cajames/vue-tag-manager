declare const global: any;
import * as injector from "../dom-injector";

describe("dom-injector", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("#getScriptTagWithSrc", () => {
    it("should return a script tag with src set", () => {
      const script = injector.getScriptTagWithSrc("//someurl.com");
      expect(script.src).toBe("http://someurl.com/");
    });
    it("should return a script tag with async true if async defined", () => {
      const script = injector.getScriptTagWithSrc("//test.com", true);
      expect(script.async).toBe(true);
    });
    it("should throw an error if no src", () => {
      expect(() => (injector as any).getScriptTagWithSrc()).toThrowError();
    });
    it("should throw an error if no document or window", () => {
      const origdoc = global.document;
      delete global.document;
      expect(() =>
        injector.getScriptTagWithSrc("//something.com")
      ).toThrowError();
      global.document = origdoc;
    });
  });

  describe("#getScriptTagWithContent", () => {
    it("should return a script tag with the provided script", () => {
      const content = "some content";
      const script = injector.getScriptTagWithContent(content);
      expect(script.innerHTML).toBe(content);
    });

    it("should throw an error if no script provided", () => {
      expect(() => (injector as any).getScriptTagWithContent()).toThrowError();
    });

    it("should throw an error if no document", () => {
      const origdoc = global.document;
      delete global.document;
      expect(() =>
        injector.getScriptTagWithContent("some script thing")
      ).toThrowError();
      global.document = origdoc;
    });
  });

  describe("#injectScriptTagIntoHead", () => {
    let scriptTag;

    beforeEach(() => {
      scriptTag = document.createElement("script");
    });
    afterEach(() => {
      document.head.innerHTML = "";
    });

    it("should throw an error if no script tag provided", () => {
      expect(() => (injector as any).injectScriptTagIntoHead()).toThrowError();
    });

    it("should insert the script tag into the document head", () => {
      const metatag = document.createElement("meta");
      metatag.lang = "en";
      document.head.appendChild(metatag);
      injector.injectScriptTagIntoHead(scriptTag);
      expect(document.head.lastChild).toBe(scriptTag);
    });

    it("should throw an error if no document provided", () => {
      const origdoc = global.document;
      delete global.document;
      expect(() => injector.injectScriptTagIntoHead(scriptTag)).toThrowError();
      global.document = origdoc;
    });
  });
});
