import TagManager from "./TagManager";

jest.mock("../shared");
import { warn } from "../shared";

describe("TagManager", () => {
	it("should warn if no GTM ID is provided", () => {
		const gtm = new TagManager({ gtmId: undefined });
		expect(warn).toHaveBeenCalled();
	});

	it('')

});
