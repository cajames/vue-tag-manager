declare const global: any;
import * as injector from "../dom-injector";

describe("dom-injector", () => {
	const originalDocument = document;
	beforeEach(() => {
		jest.resetAllMocks();
	});

	describe("#getScriptTagWithSrc", () => {
		it("should return a script tag with src set", () => {
			const script = injector.getScriptTagWithSrc("//someurl.com");
			expect(script.src).toBe("//someurl.com");
		});
		it("should return a script tag with async true if async defined", () => {
			const script = injector.getScriptTagWithSrc("//test.com", true);
			expect(script.async).toBe(true);
		});
		it("should throw an error if no src", () => {
			expect(() =>
				(injector as any).getScriptTagWithSrc()
			).toThrowError();
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
			expect(() =>
				(injector as any).getScriptTagWithContent()
			).toThrowError();
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
        const originalHead = document.head
        console.log('YOOOO', document.head)

        beforeEach(() => {
            scriptTag = document.createElement('script')
        })

		it("should throw an error if no script tag provided", () => {
            expect(() => (injector as any).injectScriptTagIntoHead()).toThrowError()
		});

		it("should insert the script tag at the very top of the head", () => {
            injector.injectScriptTagIntoHead
            expect()
		});

		it("should throw an error if no document provided", () => {
			const origdoc = global.document;
			delete global.document;
			expect(() =>
				injector.injectScriptTagIntoHead(scriptTag)
			).toThrowError();
			global.document = origdoc;
		});
	});
});
