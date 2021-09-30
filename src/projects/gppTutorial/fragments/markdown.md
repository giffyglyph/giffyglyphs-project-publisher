\contentBegin { "class": "page--markdown" }

# Markdown

## Writing Markdown

Publisher documents are written in markdown—a simple and easy-to-use markup language. To learn how to use markdown, visit the [Markdown Guide](https://www.markdownguide.org/).

* **Basic Syntax:** [markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/).
* **Cheat Sheet:** [markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/).

## Publisher Extensions

Publisher includes a number of extensions to the markdown language to help you group, tag, and layout your content more easily. Use these to enrich your document with format-specific elements.

**Extending Extensions:** These markdown extensions can be easily styled with stylesheets or _entirely_ overidden by formats for extra customisation.

### <i class="fas fa-fw fa-heading"></i> Headings

You can add HTML attributes easily to your headings—use these to add custom classes, ids, or data attributes.

<pre>
 # Heading 1 { "id": "x", "class": "y" }
 ## Heading 2 { "data-toc-ignore": true }
</pre>

### <i class="fas fa-fw fa-file-alt"></i> Content Block

Publisher formats (such as "book" and "post") require you to divide your content into sections—i.e. _pages_ and _posts_. Use _content blocks_ to do this.

<pre>
 \contentBegin { "id": "x", "class": "y" }
 Write your content here.
 \contentEnd
</pre>


### <i class="fas fa-fw fa-comment-alt"></i> Panel

Use a _panel_ when you want to add some highlighted aside text to your document.

**Title:** Specify a "title" to automatically insert a heading into the panel.

<pre>
 /panelBegin { "title": "A title" }
 Write your panel body here.
 /panelEnd
</pre>

\columnbreak

\panelBegin { "title": "HTML Attributes" }

HTML attributes (id, class, data attributes, etc.) are an important means of customising your content.

You can add attributes easily to these extensions with a simple, JSON-compatible string.

\panelEnd

### <i class="fas fa-fw fa-columns"></i> Column Break

Column breaks allow you to push all subsequent content into a new column.

<pre>
 \columnbreak
</pre>

### <i class="fas fa-fw fa-table"></i> Table Block

Use a _table block_ when you need to insert a table.

**Title:** Specify a "title" to automatically insert a heading into the table.

<pre>
 /tableBegin { "title": "A title" }
 |column1|column2|
 |-------|-------|
 |data A1|data B2|
 /tableEnd
</pre>

### <i class="far fa-fw fa-comment-alt"></i> Example

Use an _example block_ when you want to add some secondary text to your document—such as an example, tutorial, or clarification.

<pre>
 /exampleBegin { "id": "x", "class": "y" }
 This is an example of an example block.
 /exampleEnd
</pre>

### <i class="fas fa-fw fa-image"></i> Figure

Use a _figure block_ when you want to insert an image.

**Caption:** Specify a "caption" to automatically insert a figcaption into the figure.

<pre>
 /figureBegin { "caption": "A caption" }
 [image url]
 /figureEnd
</pre>

\contentEnd
