/**
 * This module defines the SampleProject project.
 * 
 * @module SampleProject
 * @author Giffyglyph <giffyglyph@gmail.com>
 * @copyright Giffyglyph 2021
 * @license GPL-3.0-or-later
 */

import { Project } from 'giffyglyphs-markdown-maker';

const project = new Project({
	version: "1.0.0",
	formats: [
		{
			name: "gppBookWizard",
			version: "1.x.x",
			languages: [ "en" ]
		}
	]
});

export default project;