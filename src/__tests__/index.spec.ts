jest.mock("../utils");
jest.mock("../dom-injector")

import VueTagManager from "../index";
import { warn } from "../utils";
import { injectScriptTagIntoHead } from "../dom-injector";

describe("VuePlugin", () => {
	it("should have a default export as Vue plugin", () => {
		expect(VueTagManager.install).toBeDefined();
		expect(typeof VueTagManager.install).toBe("function");
	});

	it("should only error in console, not throw an error, even if raised.", () => {
        expect(() => VueTagManager.install({})).not.toThrowError();
        expect(warn).toHaveBeenCalled()
    });

	it("should not be installed more than once", () => {
        VueTagManager.install({ gtmId: 'something' })
        VueTagManager.install({ gtmId: 'something' })
        expect(injectScriptTagIntoHead).toHaveBeenCalledTimes(1)
	});
});
