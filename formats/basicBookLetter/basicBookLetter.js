/**
 * This module defines the basicBookLetter format.
 * 
 * @module BasicBookLetter
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
					<div class="book">
						${html}
					</div>
				</section>
				<footer class="webpage__footer">
					<p>Giffyglyph's Project Publisher</p>
				</footer>
			</body>
		</html>
	`;
};

const format = new Format({
	name: "basicBookLetter",
	version: "1.0.0",
	publisher: "1.x.x",
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
	override: {
		renderHtmlCollectionWrapper: renderHtmlWrapper,
		renderHtmlFragmentWrapper: renderHtmlWrapper,
	}
});

export default format;