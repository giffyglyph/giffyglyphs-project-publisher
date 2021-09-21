/**
 * This module defines the BasicWebpage format.
 * 
 * @module BasicWebpage
 * @author Giffyglyph
 */

import { Format } from 'giffyglyphs-markdown-maker';

const renderHtmlWrapper = function(job, filename, html) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<link rel="stylesheet" href="../stylesheets/format.css">
				<link rel="stylesheet" href="../stylesheets/project.css">
			</head>
			<body class="webpage">
				<header class="webpage__header">
				</header>
				<section class="webpage__content">
					${html}
				</section>
				<footer class="webpage__footer">
					<p>Giffyglyph's Project Publisher</p>
				</footer>
			</body>
		</html>
	`;
};

const format = new Format({
	name: "basicWebpage",
	version: "1.0.0",
	publisher: "1.x.x",
	export: {
		pdf: {
			format: "letter",
			printBackground: true
		},
		png: {
			selector: "body",
			deviceScaleFactor: 2
		},
		jpg: {
			selector: "body",
			deviceScaleFactor: 2
		},
		zip: {}
	},
	override: {
		renderHtmlCollectionWrapper: renderHtmlWrapper,
		renderHtmlFragmentWrapper: renderHtmlWrapper
	},
	renderer: {
		page: function(job, filename, token, innerHtml) {
			return innerHtml;
		}
	}
});

export default format;