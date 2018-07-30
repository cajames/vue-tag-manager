
/**
 * Creates an empty script tag
 */
const createScriptTag = () => {
	// const scriptTag = document.createElement("script");
	// return scriptTag;
};

/**
 * Returns a script tag with a src url
 * @param src src url of the script
 * @param isAsync should script load async
 */
export const getScriptTagWithSrc = (src: string, isAsync: boolean = false): HTMLScriptElement => {
	// const scriptTag = createScriptTag()
	// scriptTag.src = src
	// scriptTag.async = isAsync
	// return scriptTag
	throw 'not implemented'
};

/**
 * Returns a script tag with provided script injected
 * @param script script content to be injected into a script tag
 */
export const getScriptTagWithScript = (script: string): HTMLScriptElement => {
	// const scriptTag = createScriptTag()
	// scriptTag.innerHTML = script
	// return scriptTag
	throw 'not implemented'
};

/**
 * Injects the provided script tag into the head
 * @param scriptTag script tag to inject into head
 */
export const injectScriptTagIntoHead = (scriptTag: HTMLScriptElement): void => {

}
