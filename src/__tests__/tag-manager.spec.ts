import TagManager from "../tag-manager";

jest.mock("../shared");
import { warn } from "../utils";

fdescribe("TagManager", () => {
	it("should warn if no GTM ID is provided", () => {
		const gtm = new TagManager({ gtmId: undefined });
		expect(warn).toHaveBeenCalled();
	});

	it("should add the gtmId into the query params as `id`", () => {
		const gtm = new TagManager({ gtmId: "GTM-123123123" });
		const url = gtm.getScriptUrl();
		expect(url).toContain("id=GTM-123123123");
	});

	it("should add all query params to the url", () => {
		const gtm = new TagManager({
			gtmId: "GTM-123",
			queryParams: {
				option1: 'something',
				option2: 'another'
			}
		});
		const url = gtm.getScriptUrl()
		expect(url).toContain('&option1=something')
		expect(url).toContain('&option2=another')
	});

	it("should urlEncode all the query params", () => {
		throw 'failed'
	});

	it('should default to data Layer name `dataLayer`', () => {
		const gtm = new TagManager({
			gtmId: "GTM-123"
		});
		const url = gtm.getScriptUrl()
		expect(url).toContain('l=dataLayer')
	})

	it("should add the datalayer name as query `l`", () => {
		const gtm = new TagManager({
			gtmId: "GTM-123",
			dataLayerName: 'anotherLayer'
		});
		const url = gtm.getScriptUrl()
		expect(url).toContain('l=anotherLayer')
	});
});
