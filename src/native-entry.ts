import TagManager, { TagManagerOptions } from "./tag-manager";
import {
  getScriptTagWithContent,
  getScriptTagWithSrc,
  injectScriptTagIntoHead
} from "./dom-injector";
import { warn } from "./utils";

export interface NativeOptions extends TagManagerOptions {
  /**
   * Variable name of Tag Manager injected into the DOM.
   * Defaults to `TagManager`
   */
  TagManagerVariableName?: string;
}

let vgtmInstalled = false;

const initialize = (options: NativeOptions) => {

  if (vgtmInstalled) return;

  try {
    console.log("REACHED 1!", vgtmInstalled);
    const tagManager = new TagManager(options);
    console.log("REACHED 2!", vgtmInstalled, tagManager);
    injectScriptTagIntoHead(
      getScriptTagWithContent(tagManager.getDataLayerScriptContent())
    );
    console.log("REACHED 2!", vgtmInstalled);
    injectScriptTagIntoHead(
      getScriptTagWithSrc(tagManager.getScriptUrl(), true)
    );
    console.log("REACHED 3!", vgtmInstalled);

    const variableName = options.TagManagerVariableName || "TagManager";
    (window as any)[variableName] = tagManager;

    vgtmInstalled = true;
    console.log("REACHED x!", vgtmInstalled);
  } catch (error) {
    warn(error);
  }
};

export { initialize };
