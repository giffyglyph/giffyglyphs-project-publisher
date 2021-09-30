\contentBegin { "class": "page--formats" }

# Formats

## What is a Format?

A _format_ is a reusable build-once/apply-many "skin" that defines the basic shape, functionality, and appearance of your markdown. Formats can extend—or override—core parts of the Publisher engine, granting you full control over how your content is processed.

There are four basic types of format: books, posts, webpages, and websites.

### <i class="fas fa-fw fa-book"></i> Book

Your markdown is divided into "pages" of the same size and shape—use _content blocks_ and _column breaks_ to lay out your content across these pages. Book formats are a good choice when you want to create PDFs.

### <i class="fas fa-fw fa-image"></i> Post

Your markdown is divided into "posts" of varying size—use _content blocks_ to lay out your content across these posts. Post formats are a good choice when you want to create images.

### <i class="fas fa-fw fa-file"></i> Webpage

Your markdown is combined into a single webpage. Webpage formats are a good choice when you want to upload some _simple_ content to the web.

### <i class="fas fa-fw fa-columns"></i> Website

Your markdown is rendered across several pages with shared navigation. Website formats are a good choice when you want to upload _extensive_ content to the web.

\panelBegin { "title": "Folder Structure" }

Formats are stored in Publisher's "src/formats" folder. A format may contain these folders:

---

* **Fonts:** Distributable font files.
* **Images:** Distributable image files.
* **Modules:** Non-distributed javascript that helps to define how the format runs programs.
* **Scripts:** Distributable javascript files.
* **Stylesheets:** SASS stylesheets that are compiled into distributable CSS.
* **Vendors:** Distributable third-party libraries.

\panelEnd

\columnbreak

## Adding a Format

To add an existing format to your Publisher:

1. **Copy** the format into your "src/formats" folder.
2. **Update** your publisher.js config file to reference the new format's .js file.
3. **Confirm** that your format loads correctly by running the _Check_ program.

\exampleBegin

Viridian has downloaded a format that he wants to use for his _webpage_ project. He adds the format to his src/formats folder, updates his publisher.js config, and runs _Check_ to confirm that every works.

\exampleEnd

## Creating a Format

To create your own Publisher format, follow these three starting steps:

### Choose a Type & Name { "index": 1 }

Once you have decided the type of format you are making (book, post, webpage, or website?), you must then choose a name. To help share your format easily with others, use the following naming convention:

* **Creator Initials:** Pick 3 lowercase letters to serve as your initials.
* **Format Type:** The type of your format (book, post, webpage, or website).
* **Format Codename:** A codename that represents the theme or purpose of your format.

\exampleBegin

Valiant wants to name his D&D campaign primer book format—he chooses valBookPrimer.

Clanda also chooses a name for her TTRPG post format, opting for clnPostWildstorm.

\exampleEnd

### Create a Folder & Config { "index": 2 }

Next, you must create a new folder and configuration file for your format. This is done in the following location:

<pre class="text-center">
src/formats/&lt;formatName&gt;/&lt;formatName&gt;.js
</pre>

\contentEnd

\contentBegin { "class": "page--formats" }

Once you've created your config file, it's time to start configuring your format! To help you set things up, the _Format Config_ table below lists every major parameter accepted by the config file.

#### Export

If you want your format to be able to export a particular type of artifact (e.g. PDF, PNG, JPG, ZIP), you must add it to the _export_ section of your config.

You can also specify any additional options for each export type here—page size, resolution, quality, etc.

#### Override

When you want to override a part of the core Publisher engine, create an override function. All possible overrides—including their required parameters and return types—are listed in the table below.

\columnbreak

#### Markdown

When you want to change how markdown is rendered in your format (content blocks, examples, tables, etc.), create a markdown renderer.

#### JSON

JSON renderers allow you to write JSON into your markdown and transform it into content blocks. This can be a _very_ powerful automation tool, especially when working with data-heavy content.

### Add it to Publisher { "index": 3 }

Finally, add your format to the **publisher.js** config file. Run the _Check_ program to ensure that everything is working as expected—if the set up is correct, you can start adding your format to your projects!

\layoutBegin { "class": "wide fixed-bottom" }

\tableBegin { "title": "Format Config" }

|Parameter|Type|Description|
|---|---|---|
|version|string|The current version of your format.|
|author|string|Who made this?|
|description|string|What does this format do?|
|publisher|string|What version of Publisher is required?|
|export.pdf|object|Configuration options for PDFs.|
|export.png|object|Configuration options for PNGs.|
|export.jpg|object|Configuration options for JPGs.|
|export.zip|object|Configuration options for ZIPs.|
|processHtml|function(dom)|Must return a dom element.|
|override.buildHtml|function(jobs)|Must return a Promise.|
|override.buildHtmlFragments|function(job, language)|Must return a Promise.|
|override.buildHtmlCollections|function(job, language)|Must return a Promise.|
|override.buildScripts|function(jobs)|Must return a Promise.|
|override.buildStylesheets|function(jobs)|Must return a Promise.|
|override.buildImages|function(jobs)|Must return a Promise.|
|override.buildFonts|function(jobs)|Must return a Promise.|
|override.buildVendors|function(jobs)|Must return a Promise.|
|override.exportPdf|function(job, file, options)|Must return a Promise.|
|override.exportPngs|function(job, file, options)|Must return a Promise.|
|override.exportJpgs|function(job, file, options)|Must return a Promise.|
|override.exportZip|function(job)|Must return a Promise.|
|override.renderHtmlFragmentWrapper|function(job, filename, html)|Must return a string.|
|override.renderHtmlCollectionWrapper|function(job, filename, html)|Must return a string.|
|override.saveHtmlFragment|function(job, language, stream)|—|
|override.saveHtmlCollection|function(job, language, stream)|—|
|override.validateCollectionJson|function(json)|Must return an object.|
|override.renderCollectionJson|function(job, json)|Must return a string.|
|markdown.table|function(job, filename, token, tags)|Must return a string.|
|markdown.colbreak|function(job, filename, token, tags)|Must return a string.|
|markdown.layout|function(job, filename, token, tags)|Must return a string.|
|markdown.page|function(job, filename, token, tags)|Must return a string.|
|markdown.example|function(job, filename, token, tags)|Must return a string.|
|markdown.panel|function(job, filename, token, tags)|Must return a string.|
|markdown.heading|function(level, title, tags)|Must return a string.|
|json|object|Define any json processors.|

\tableEnd

\layoutEnd

\contentEnd
