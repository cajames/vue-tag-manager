// https://developers.google.com/tag-manager/quickstart

import { TagManagerConfig } from './types'

const Snippets = {
	tags: function({
		gtmId,
		events,
		dataLayer,
		dataLayerName,
		preview,
		auth
	}: TagManagerConfig) {
		const gtm_auth = `&gtm_auth=${auth}`;
		const gtm_preview = `&gtm_preview=${preview}`;

		if (!gtmId) throw "GTM Id is required";

		const iframe = `
      <iframe src="//www.googletagmanager.com/ns.html?id=${gtmId}${gtm_auth}${gtm_preview}&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`;

		const script = `
      (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${JSON.stringify(
			events
		).slice(1, -1)}});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl+'${gtm_auth}${gtm_preview}&gtm_cookies_win=x';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','${dataLayerName}','${gtmId}');`;

		const dataLayerVar = this.dataLayer(dataLayer, dataLayerName);

		return {
			iframe,
			script,
			dataLayerVar
		};
	},
	dataLayer: function(dataLayer, dataLayerName) {
		return `
      window.${dataLayerName} = window.${dataLayerName} || [];
      window.${dataLayerName}.push(${JSON.stringify(dataLayer)})`;
	}
};

export default Snippets;
