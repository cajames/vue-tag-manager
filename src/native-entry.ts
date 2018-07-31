import TagManager from './tag-manager'
import {TagManagerOptions} from './types'
import {
	getScriptTagWithContent,
	getScriptTagWithSrc,
	injectScriptTagIntoHead
} from "./dom-injector";
import { warn } from "./utils";

let vgtmInstalled = false

const initialize = (options: TagManagerOptions) => {

    if (vgtmInstalled) return;

    // new TagManager - Initialize it.
    const tagManager = new TagManager(options)

}

export {
    initialize
}