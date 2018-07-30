import { warn } from "./utils";
import { TagManagerOptions } from "./types";

/**
 * Global Tag Manager instance
 */
class TagManager {

	options: TagManagerOptions = {
		gtmId: undefined,
		queryParams: {},
		dataLayerName: "dataLayer",
		dataLayer: undefined
	};

	constructor(options: TagManagerOptions) {
		this.options = { ...this.options, ...options };

		if (!this.options.gtmId) {
			warn("No GTM id provided");
			return
		}
	}

	/**
	 * Returns the URL and query params to get the tag manager script
	 */
	getScriptUrl(): string {







		throw 'not implemented'
	}

	/**
	 * Returns the script to initialize the data layer
	 */
	getDataLayerScriptContent(): string {
		throw 'not implemented'
	}

	/**
	 * Push an event to the data layer 
	 * @param event event object
	 */
	push(event: object): void {
		throw 'not implemented'
	}
}

export default TagManager;
