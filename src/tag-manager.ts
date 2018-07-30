import { TagManagerOptions } from "./types";

/**
 * Global Tag Manager instance
 */
class TagManager {
	options: TagManagerOptions = {
		gtmId: undefined,
		queryParams: {},
		dataLayerName: "dataLayer",
		dataLayer: undefined,
		scriptUrl: "//www.googletagmanager.com/gtm.js"
	};

	constructor(options: TagManagerOptions) {
		this.options = { ...this.options, ...options };

		if (!this.options.gtmId) {
			throw "No GTM id provided";
		}
	}

	/**
	 * Returns the URL and query params to get the tag manager script
	 */
	getScriptUrl(): string {
		const id = this.options.gtmId;
		const url = this.options.scriptUrl;
		const queryParams = {
			id,
			l: this.options.dataLayerName,
			...this.options.queryParams,
		};

		const queryString = Object.keys(queryParams)
			.filter(
				key =>
					queryParams[key] !== null && queryParams[key] !== undefined
			)
			.map(
				key =>
					`${encodeURIComponent(key)}=${encodeURIComponent(
						queryParams[key]
					)}`
			)
			.join("&");

		return `${url}?${queryString}`;
	}

	/**
	 * Returns the script to initialize the data layer
	 */
	getDataLayerScriptContent(): string {
		throw "not implemented";
	}

	/**
	 * Push an event to the data layer
	 * @param event event object
	 */
	push(event: object): void {
		throw "not implemented";
	}
}

export default TagManager;
