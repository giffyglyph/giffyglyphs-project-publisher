/**
 * This module defines helper functions for the format.
 * 
 * @module Format
 * @author Giffyglyph <giffyglyph@gmail.com>
 * @copyright Giffyglyph 2021
 * @license GPL-3.0-or-later
 */

/**
 * Override the default html wrapper to create a webpage and book for pages.
 * @param {Object} jobs - A build job to perform.
 * @param {string} filename - The target filename.
 * @param {string} innerHtml - Any inner html to include.
 * @returns {string} Rendered HTML.
 */
function renderHtmlWrapper(job, filename, innerHtml) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<script src="../scripts/resizer.js"></script>
				<link rel="stylesheet" href="../vendors/fontawesome-free-6.0.0-beta2/css/all.min.css">
				<link rel="stylesheet" href="../stylesheets/format.css">
				<link rel="stylesheet" href="../stylesheets/project.css">
				<script>
					window.addEventListener("load", function() {
						resizer.resizeFigures(16);
					});
				</script>
			</head>
			<body class="webpage">
				<header class="webpage__header">
				</header>
				<section class="webpage__content">
					<div class="book">
						${innerHtml}
					</div>
				</section>
				<footer class="webpage__footer">
					<p>Giffyglyph's Project Publisher</p>
					<ul class="contact">
						<li><a href="https://ko-fi.com/giffyglyph"><i class="fas fa-fw fa-heart"></i><span>Ko-fi</span></a></li>
						<li><a href="https://patreon.com/giffyglyph"><i class="fab fa-fw fa-patreon"></i><span>Patreon</span></a></li>
						<li><a href="https://reddit.com/user/giffyglyph"><i class="fab fa-fw fa-reddit-alien"></i><span>Reddit</span></a></li>
						<li><a href="https://twitch.tv/giffyglyph"><i class="fab fa-fw fa-twitch"></i><span>Twitch</span></a></li>
						<li><a href="https://www.youtube.com/channel/UCplXj8GUnq1thw2bJQZRVxg"><i class="fab fa-fw fa-youtube"></i><span>Youtube</span></a></li>
						<li><a href="https://www.facebook.com/giffyglyph"><i class="fab fa-fw fa-facebook"></i><span>Facebook</span></a></li>
						<li><a href="https://twitter.com/giffyglyph"><i class="fab fa-fw fa-twitter"></i><span>Twitter</span></a></li>
						<li><a href="mailto:giffyglyph@gmail.com"><i class="fas fa-fw fa-envelope"></i><span>Email</span></a></li>
					</ul>
				</footer>
			</body>
		</html>
	`;
};

/**
 * Override the default content markdown block to create "pages".
 * @param {Object} jobs - A build job to perform.
 * @param {string} filename - The target filename.
 * @param {Object} token - The markdown token.
 * @param {string} innerHtml - Any inner html to include.
 * @returns {string} Rendered HTML.
 */
function renderMarkdownContent(job, filename, token, innerHtml) {
	let id = token.tags?.id ? `id="${token.tags.id}"` : '';
	let type = token.tags?.type ? token.tags.type : 'page';
	let css = token.tags?.class ? token.tags.class : '';
	let tags = token.tags["_data"] ? token.tags["_data"] : '';
	switch (type) {
		case "cover":
			return `
				<section ${id} class="${type} ${css}" ${tags}>
					${innerHtml}
				</section>
			`;
		default:
			return `
				<section ${id} class="${type} ${css}" ${tags}>
					<div class="page__body">
						${innerHtml}
					</div>
					<div class="page__footer">
						<div class="page__chapter"></div>
						<div class="page__number"></div>
					</div>
				</section>
			`;
	}
};

/**
 * Create a table of contents.
 * @param {Object} json - TOC configuration.
 * @param {Object} dom - The dom.
 * @returns {string} Rendered HTML.
 */
function renderJsonToc(json, dom) {
	let contents = [];
	dom.querySelectorAll(json.selectors).forEach((x) => {
		if (!x.dataset.tocIgnore) {
			let page = x.closest(".page");
			contents.push({
				text: x.innerHTML.replace(/<(span|i).*?>.*?<\/(span|i)>/g,"").trim(),
				href: x.id ? x.id : null,
				type: x.tagName.toLowerCase(),
				page: page.querySelector(".page__number").innerHTML
			});
		}
	});
	if (contents.length > 0) {
		return `
			<div class="toc">
				${contents.map((x, index) => `
					${json.columns && json.columns.includes(index) ? `
						<colbreak></colbreak>
					` : ''}
					<div class="toc__link link--type-${x.type}">
						<span class="link__text"><a href="#${x.href}">${x.text}</a></span><span class="link__page">${x.page}</span>
					</div>
				`).join('')}
			</div>
		`;
	} else {
		return "";
	}
}

/**
 * Apply page numbers and create a page header (if any h1 is present).
 * @param {Object} dom - The dom.
 * @returns {Object} The dom.
 */
function processHtml(dom) {
	let page = 0;
	dom.querySelectorAll(".page").forEach((x) => {
		let heading = x.querySelector(".page__body h1");
		if (heading) {
			const currentDiv = dom.createElement("div");
			currentDiv.classList.add("page__header");
			currentDiv.appendChild(heading);
  		x.insertBefore(currentDiv, x.childNodes[0]);
		}
		page = (x.dataset.number) ? Number(x.dataset.number) : page + 1;
		let element = x.querySelector(".page__number");
		if (element) {
			element.innerHTML = page;
		}		
	});
	return dom;
}

export { renderHtmlWrapper, renderMarkdownContent, renderJsonToc, processHtml }