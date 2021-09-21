import { run } from 'giffyglyphs-markdown-maker';

/**
 * Main process. Parse input from the client and (if valid) run a program.
 */
export default(function() {
	run({
		output: {
			build: "build",
			export: "dist"
		},
		formats: [
			"formats/basicBookLetter/basicBookLetter.js",
			"formats/basicWebpage/basicWebpage.js",
		],
		projects: [
			"projects/sampleProject/sampleProject.js",
		]
	});
})();