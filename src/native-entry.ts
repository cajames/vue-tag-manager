import TagManager, { TagManagerOptions } from "./tag-manager";
import {
  getScriptTagWithContent,
  getScriptTagWithSrc,
  injectScriptTagIntoHead
} from "./dom-injector";
import { warn } from "./utils";

let vgtmInstalled = false;

const initialize = (options: TagManagerOptions) => {
  if (vgtmInstalled) return;

  try {

    const tagManager = new TagManager(options);
    injectScriptTagIntoHead(
      getScriptTagWithContent(tagManager.getDataLayerScriptContent())
    );
    injectScriptTagIntoHead(
      getScriptTagWithSrc(tagManager.getScriptUrl(), true)
    );

    (window as any).TagManager = tagManager

    vgtmInstalled = true

  } catch (error) {
    warn(error)
  }

};

export { initialize };
