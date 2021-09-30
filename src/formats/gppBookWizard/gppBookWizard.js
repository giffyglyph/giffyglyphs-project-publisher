/**
 * This module defines the gppBookWizard format.
 * 
 * @module gppBookWizard
 * @author Giffyglyph <giffyglyph@gmail.com>
 * @copyright Giffyglyph 2021
 * @license GPL-3.0-or-later
 */

import { Format } from 'giffyglyphs-markdown-maker';
import * as formatjs from './modules/format.js';

const format = new Format({
	version: "1.0.0",
	type: "book",
	author: "Giffyglyph <giffyglyph@gmail.com>",
	description: "The default book format for Giffyglyph's Project Publisher.",
	markdownMaker: "2.x.x",
	export: {
		pdf: {
			format: "letter",
			printBackground: true
		},
		png: {
			selector: ".page",
			deviceScaleFactor: 2
		},
		jpg: {
			selector: ".page",
			deviceScaleFactor: 2
		},
		zip: {}
	},
	processHtml: formatjs.processHtml,
	override: {
		renderHtmlCollectionWrapper: formatjs.renderHtmlWrapper,
		renderHtmlFragmentWrapper: formatjs.renderHtmlWrapper,
	},
	markdown: {
		content: formatjs.renderMarkdownContent
	},
	json: {
		toc: formatjs.renderJsonToc
	}
});

export default format;