export interface PluginConfig {
  gtmId: string;
  queryParams?: object;
  dataLayer?: object;
  dataLayerName?: string;
  events?: object;
  preview?: string;
  auth?: string;
}

export interface TagManagerOptions {
  gtmId: string;
  queryParams?: any;
  dataLayerName?: string;
  dataLayer?: object;
  scriptUrl?: string;
}
