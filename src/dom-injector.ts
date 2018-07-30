
/**
 * Creates an empty script tag
 */
const createScriptTag = () => {
	if (!window || !window.document) throw 'No window object'

	const scriptTag = window.document.createElement("script");
	return scriptTag;
};

/**
 * Returns a script tag with a src url
 * @param src src url of the script
 * @param isAsync should script load async
 */
export const getScriptTagWithSrc = (src: string, isAsync: boolean = false): HTMLScriptElement => {

	if (!src) throw 'No src passed.'

	const scriptTag = createScriptTag()
	scriptTag.src = src
	scriptTag.async = isAsync
	return scriptTag
};

/**
 * Returns a script tag with provided script injected
 * @param script script content to be injected into a script tag
 */
export const getScriptTagWithContent = (script: string): HTMLScriptElement => {
	if (!script) throw 'No script content passed.'

	const scriptTag = createScriptTag()
	scriptTag.innerHTML = script
	return scriptTag
};

/**
 * Injects the provided script tag into the head
 * @param scriptTag script tag to inject into head
 */
export const injectScriptTagIntoHead = (scriptTag: HTMLScriptElement): void => {

	if (!scriptTag) throw 'No script tag passed.'

	

}
