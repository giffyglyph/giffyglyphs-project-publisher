/**
 * Main entry point to the application. This module start running MarkdownMaker.
 * 
 * @module Publisher
 * @author Giffyglyph <giffyglyph@gmail.com>
 * @copyright Giffyglyph 2021
 * @license GPL-3.0-or-later
 */

import { run, Maker } from 'giffyglyphs-markdown-maker';

/**
 * Main process. Parse input from the client and (if valid) run a program.
 */
export default(function() {
	run(new Maker({
		title: "Giffyglyph's Project Publisher",
		output: {
			build: "build",
			export: "export"
		},
		formats: [
			"src/formats/gppBookWizard/gppBookWizard.js"
		],
		projects: [
			"src/projects/gppTutorial/gppTutorial.js",
		]
	}));
})();