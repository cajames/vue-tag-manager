/** @jest-environment node */
declare const global: any;
import * as injector from "../dom-injector";

const createMockDocument = () => {
  const head = {
    innerHTML: "",
    lastChild: null,
    appendChild(node) {
      this.lastChild = node;
      return node;
    }
  };

  return {
    head,
    createElement(tagName: string) {
      if (tagName === "script") {
        return {
          async: false,
          innerHTML: "",
          _src: "",
          set src(value: string) {
            this._src = new URL(value, "http://localhost/").href;
          },
          get src() {
            return this._src;
          }
        };
      }

      return {};
    }
  };
};

describe("dom-injector", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    global.document = createMockDocument();
    global.window = {
      get document() {
        return global.document;
      }
    };
  });

  afterEach(() => {
    delete global.document;
    delete global.window;
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
      expect(() => (injector as any).getScriptTagWithSrc()).toThrow();
    });
    it("should throw an error if no document or window", () => {
      const origdoc = global.document;
      delete global.document;
      expect(() =>
        injector.getScriptTagWithSrc("//something.com")
      ).toThrow();
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
      expect(() => (injector as any).getScriptTagWithContent()).toThrow();
    });

    it("should throw an error if no document", () => {
      const origdoc = global.document;
      delete global.document;
      expect(() =>
        injector.getScriptTagWithContent("some script thing")
      ).toThrow();
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
      expect(() => (injector as any).injectScriptTagIntoHead()).toThrow();
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
      expect(() => injector.injectScriptTagIntoHead(scriptTag)).toThrow();
      global.document = origdoc;
    });
  });
});
