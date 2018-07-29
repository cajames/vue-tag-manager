import { warn } from "../shared";
import { TagManagerOptions } from "../../src/types";

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
		}
	}

	/**
	 * Returns the URL and query params to get the tag manager script
	 */
	getScriptUrl(): string {
		return '';
	}

	/**
	 * Returns the script to initialize the data layer
	 */
	getDataLayerScriptContent(): string {
		return '';
	}

	/**
	 * Push an event to the data layer 
	 * @param event event object
	 */
	push(event: object): void {

	}
}

export default TagManager;
