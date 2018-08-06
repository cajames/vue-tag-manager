import TagManager, { TagManagerOptions } from "./tag-manager";
import {
  getScriptTagWithContent,
  getScriptTagWithSrc,
  injectScriptTagIntoHead
} from "./dom-injector";
import { warn } from "./utils";


export interface PluginOptions extends TagManagerOptions {

}

let installed = false;

const install = function(Vue, options: PluginOptions = { gtmId: null }) {
  if (installed) return;
 
  try {
    // Initialize a tag manager
    const tagManager = new TagManager(options);

    // Add gtm to the prototype
    Vue.gtm = tagManager;
    Vue.prototype.$gtm = tagManager;

    // Inject the tag manager scripts into DOM
    injectScriptTagIntoHead(
      getScriptTagWithContent(tagManager.getDataLayerScriptContent())
    );
    injectScriptTagIntoHead(
      getScriptTagWithSrc(tagManager.getScriptUrl(), true)
    );

    installed = true;

  } catch (e) {
    warn(e);
  }
};

export default {
  install
};
