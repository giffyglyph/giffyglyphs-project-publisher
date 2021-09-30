/**
 * This utility is in charge of resizing dom elements to maintain line height alignments.
 * 
 * @module Resizer
 * @author Giffyglyph <giffyglyph@gmail.com>
 * @copyright Giffyglyph 2021
 * @license GPL-3.0-or-later
 */

const resizer = {

	// Force image heights to be a multiple of a specified line height.
	resizeFigures: function(lineHeight) {
		document.querySelectorAll('figure').forEach((x) => {
			let currentHeight = x.offsetHeight;
			let targetHeight = Math.round(currentHeight / lineHeight) * lineHeight;
			let images = x.querySelectorAll('img');
			if (images.length > 0) {
				let heightDiff = (targetHeight - currentHeight) / images.length;
				images.forEach((y) => {
					y.style.height = `${y.offsetHeight + heightDiff}px`;
				});
			}
		});
	}
}