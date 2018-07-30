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

		const dataLayerName = this.options.dataLayerName
		const initialValues = this.options.dataLayer
		const scriptArray = [];

		// Initialize data layer
		scriptArray.push(`window['${dataLayerName}'] = window['${dataLayerName}'] || [];`)

		if (initialValues) {
			scriptArray.push(`window['${dataLayerName}'].push(${JSON.stringify(initialValues)});`)
		}

		scriptArray.push(`window['${dataLayerName}'].push({ event: 'gtm.js', 'gtm.start': new Date().getTime() });`)

		return scriptArray.join('\n')
	}

	/**
	 * Push an event to the data layer
	 * @param event event object
	 */
	push(event: object): void {
		const dataLayer = this.options.dataLayerName
		window[dataLayer].push(event)
	}
}

export default TagManager;
