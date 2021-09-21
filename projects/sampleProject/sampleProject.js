/**
 * This module defines the SampleProject project.
 * 
 * @module SampleProject
 * @author Giffyglyph
 */

import { Project } from 'giffyglyphs-markdown-maker';

const project = new Project({
	name: "sampleProject",
	version: "1.0.0",
	formats: [
		{
			name: "basicBookLetter",
			version: "1.0.0",
			languages: [ "en", "fr" ]
		},
		{
			name: "basicWebpage",
			version: "1.0.0",
			languages: [ "en" ]
		}
	]
});

export default project;