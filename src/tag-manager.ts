export interface TagManagerOptions {
  /** GTM ID */
  gtmId: string;

  /** Query parameters to be added to the script URL, such as
   * `gtm_preview` any `gtm_id` for environment switching. Defaults to
   * empty object.
   */
  queryParams?: object;

  /**
   * Global Data Layer variable name. Defaults to `dataLayer`
   */
  dataLayerName?: string;

  /** Items that the dataLayer get's initilised with. Defaults to null. */
  dataLayer?: object;

  /** Url for pulling the GTM script. Defaults to general GTM url. */
  scriptUrl?: string;
}

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
      ...this.options.queryParams
    };

    const queryString = Object.keys(queryParams)
      .filter(
        key => queryParams[key] !== null && queryParams[key] !== undefined
      )
      .map(
        key =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
      )
      .join("&");

    return `${url}?${queryString}`;
  }

  /**
   * Returns the script to initialize the data layer
   */
  getDataLayerScriptContent(): string {
    const dataLayerName = this.options.dataLayerName;
    const initialValues = this.options.dataLayer;
    const scriptArray = [];

    // Initialize data layer
    scriptArray.push(
      `window['${dataLayerName}'] = window['${dataLayerName}'] || [];`
    );

    if (initialValues) {
      scriptArray.push(
        `window['${dataLayerName}'].push(${JSON.stringify(initialValues)});`
      );
    }

    scriptArray.push(
      `window['${dataLayerName}'].push({ event: 'gtm.js', 'gtm.start': new Date().getTime() });`
    );

    return scriptArray.join("\n");
  }

  /**
   * Push an event to the data layer
   * @param event event object
   */
  push(event: object): void {
    if (!(event instanceof Object) || event instanceof Array)
      throw "Pushed event is not an object.";

    const dataLayer = this.options.dataLayerName;
    window[dataLayer].push(event);
  }
}

export default TagManager;
