declare const global: any
import TagManager from "../tag-manager";

describe("TagManager", () => {
	it("should throw an error if no GTM ID is provided", () => {
		expect(() => new TagManager({ gtmId: undefined })).toThrowError();
	});

	describe("#getStriptUrl", () => {
		it("should add the gtmId into the query params as `id`", () => {
			const gtm = new TagManager({ gtmId: "GTM-123123123" });
			const url = gtm.getScriptUrl();
			expect(url).toContain("id=GTM-123123123");
		});

		it("should add all query params to the url", () => {
			const gtm = new TagManager({
				gtmId: "GTM-123",
				queryParams: {
					option1: "something",
					option2: "another"
				}
			});
			const url = gtm.getScriptUrl();
			expect(url).toContain("option1=something");
			expect(url).toContain("option2=another");
		});

		it("should url encode all the query params", () => {
			const gtm = new TagManager({
				gtmId: "GTM-123",
				queryParams: {
					"hell o": "something",
					option2: "ano ther"
				}
			});

			const url = gtm.getScriptUrl();
			expect(url).toContain("hell%20o=something");
			expect(url).toContain("option2=ano%20ther");
		});

		it("should default to data Layer name `dataLayer`", () => {
			const gtm = new TagManager({
				gtmId: "GTM-123"
			});
			const url = gtm.getScriptUrl();
			expect(url).toContain("l=dataLayer");
		});

		it("should add the datalayer name as query `l`", () => {
			const gtm = new TagManager({
				gtmId: "GTM-123",
				dataLayerName: "anotherLayer"
			});
			const url = gtm.getScriptUrl();
			expect(url).toContain("l=anotherLayer");
		});
	});

	describe("#getDataScriptContent", () => {
		afterEach(() => {
			delete global.dataLayer;
			delete global.anotherLayer;
		});

		it("should initialise data layer with name `dataLayer` by default", () => {
			const gtm = new TagManager({ gtmId: "GTM-123" });
			const script = gtm.getDataLayerScriptContent();
			eval(script);
			expect(global.dataLayer).toBeDefined;
			expect(global.dataLayer).toBeInstanceOf(Array);
		});

		it("should keep original values if dataLayer is predefined", () => {
			const gtm = new TagManager({ gtmId: "GTM-123" });
			const script = gtm.getDataLayerScriptContent();

			const expectedValue = { something: "value" };
			global.dataLayer = [expectedValue];
			eval(script);
			expect(global.dataLayer.length).toBeGreaterThan(1);
			expect(global.dataLayer[0]).toMatchObject(expectedValue);
		});

		it("should default the data layer with `gtm.js` event and `gtm.start`", () => {
			const nowTime = new Date().getTime();
			const gtm = new TagManager({ gtmId: "GTM-123" });
			const script = gtm.getDataLayerScriptContent();

			const expectedValue = {
				event: "gtm.js",
				"gtm.start": nowTime
			};
			eval(script);
			expect(global.dataLayer.length).toBe(1);
			expect(global.dataLayer[0]).toHaveProperty(
				"event",
				"gtm.js"
			);
			expect(global.dataLayer[0]).toHaveProperty(["gtm.start"]);
			expect(global.dataLayer[0]["gtm.start"]).toBeCloseTo(
				nowTime
			);
		});

		it("should use dataLayerName property for the data layer if provided", () => {
			const gtm = new TagManager({
				gtmId: "GTM-123",
				dataLayerName: "anotherLayer"
			});
			const script = gtm.getDataLayerScriptContent();
			eval(script);
			expect(global.dataLayer).not.toBeDefined();
			expect(global.anotherLayer).toBeDefined();
			expect(global.anotherLayer.length).toBe(1);
		});

		it("should add more data variables provided to the data layer", () => {
			const expected = { someValue: "something", another: "else" };
			const gtm = new TagManager({
				gtmId: "GTM-123",
				dataLayer: expected
			});
			const script = gtm.getDataLayerScriptContent();
			eval(script);
			expect(global.dataLayer.length).toBe(2);
			expect(global.dataLayer[0]).toMatchObject(expected);
		});
	});

	describe("#push", () => {

		afterEach(() => {
			delete global.dataLayer;
			delete global.anotherLayer;
		});

		it("should push events into the dataLayer", () => {
			const gtm = new TagManager({
				gtmId: "GTM-123"
			});
			const script = gtm.getDataLayerScriptContent()
			eval(script)

			const someEvent = {
				event: 'something',
				'value': 'another'
			}

			gtm.push(someEvent)

			expect(global.dataLayer).toBeInstanceOf(Array)
			expect(global.dataLayer.length).toBe(2)
			expect(global.dataLayer[1]).toMatchObject(someEvent)
		});
		it("should push events into correct dataLayer property if named differently", () => {
			const gtm = new TagManager({
				gtmId: "GTM-123",
				dataLayerName: 'anotherLayer'
			});
			const script = gtm.getDataLayerScriptContent()
			eval(script)

			const someEvent = {
				event: 'something',
				'value': 'another'
			}

			gtm.push(someEvent)

			expect(global.dataLayer).not.toBeDefined()
			expect(global.anotherLayer).toBeInstanceOf(Array)
			expect(global.anotherLayer.length).toBe(2)
			expect(global.anotherLayer[1]).toMatchObject(someEvent)
		});
	});
});
