import { TagManagerConfig } from "./types";
import Snippets from "./Snippets";

const TagManager = {
	dataScript: function(dataLayer) {
		const script = document.createElement("script");
		script.innerHTML = dataLayer;
		return script;
	},
	gtm: function(args) {
		const snippets = Snippets.tags(args);

		const noScript = () => {
			const noscript = document.createElement("noscript");
			noscript.innerHTML = snippets.iframe;
			return noscript;
		};

		const script = () => {
			const script = document.createElement("script");
			script.innerHTML = snippets.script;
			return script;
		};

		const dataScript = this.dataScript(snippets.dataLayerVar);

		return {
			noScript,
			script,
			dataScript
		};
	},
	initialize: function({
		gtmId,
		events = {},
		dataLayer,
		dataLayerName = "dataLayer",
		auth = "",
		preview = ""
	}: TagManagerConfig) {
		const gtm = this.gtm({
			gtmId,
			events: events,
			dataLayer: dataLayer || undefined,
			dataLayerName: dataLayerName,
			auth,
			preview
		});
		if (dataLayer) document.head.appendChild(gtm.dataScript);
		document.head.appendChild(gtm.script());
		document.body.appendChild(gtm.noScript());
	},
	dataLayer: function({ dataLayer, dataLayerName = "dataLayer" }) {
		const snippets = Snippets.dataLayer(dataLayer, dataLayerName);
		const dataScript = this.dataScript(snippets);
		document.head.appendChild(dataScript);
	}
};

export default TagManager;
