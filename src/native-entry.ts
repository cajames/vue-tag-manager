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

(window as any).vgtmInstalled = false;

const initialize = (options: NativeOptions) => {

  if ((window as any).vgtmInstalled) return;

  try {
    const tagManager = new TagManager(options);
    injectScriptTagIntoHead(
      getScriptTagWithContent(tagManager.getDataLayerScriptContent())
    );
    injectScriptTagIntoHead(
      getScriptTagWithSrc(tagManager.getScriptUrl(), true)
    );

    const variableName = options.TagManagerVariableName || "TagManager";
    (window as any)[variableName] = tagManager;

    (window as any).vgtmInstalled = true;
  } catch (error) {
    warn(error);
  }
};

export { initialize };
