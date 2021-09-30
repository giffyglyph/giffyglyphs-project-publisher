\contentBegin { "class": "page--projects" }

# Projects

## What is a Project?

A _project_ is a bundle of content you want to publish—this is where you put the raw material (markdown, images, project-specific stylesheets, etc) for your artifacts.

Projects can be assigned any number of publishing formats (i.e. "skins") to transform their appearance and behaviour—in this way, you can reuse the _same_ project files to create wildly different artifacts.

### Folder Structure

Projects are stored in "src/projects". When you add files to your project, store them in the following folders:

* **Collections:** JSON files that describe how to bind fragments together.
* **Fonts:** Distributable font files.
* **Fragments:** Markdown files that are rendered into distributable HTML.
* **Modules:** Non-distributed javascript that may be used by the project configuration.
* **Scripts:** Distributable javascript files.
* **Stylesheets:** SASS stylesheets that are compiled into distributable CSS.
* **Translations:** Translated message keys.
* **Vendors:** Distributable third-party libraries.

### Format-specific Content

By default, all of your project content is available to every format. However, you want some content to be used only by a _specific_ format—for example, using one image for a "book" format and one for a "website" format.

When you want to restrict access to some content, put it in a format subfolder ("_\<formatName\>"):

\exampleBegin { "class": "example--subfolders" }

Chansi is creating a new project (chaRecipes) that uses multiple formats. One file (file3.md) is only to be used with the "gppBookWizard" format, so she puts it into a format subfolder.

---

- <i class="fas fa-fw fa-folder-open"></i> chaRecipes/src
	- <i class="fas fa-fw fa-folder-open"></i> fragments
		- <i class="far fa-fw fa-file-alt"></i> file1.md
		- <i class="far fa-fw fa-file-alt"></i> file2.md
		- <i class="fas fa-fw fa-folder-open"></i> _gppBookWizard
			- <i class="far fa-fw fa-file-alt"></i> file1.md
			- <i class="far fa-fw fa-file-alt"></i> file3.md

\exampleEnd

\columnbreak

\panelBegin { "title": "File Priority" }

When Publisher looks for _content_ (e.g. a font, an image, a stylesheet, etc.), it searches in three areas of descending priority:

--- 

1. project/format
2. project
3. format

---

Higher priority files will always overwrite lower priority files when running _Build_ and _Export_.

\panelEnd

## Adding a Project

To add an existing project to your Publisher:

* **Copy** the project into your "src/projects" folder.
* **Update** your publisher.js config file to reference the new project's .js file.
* **Confirm** that your project loads correctly by running the _Check_ program.

Some projects may be configured to require additional formats, so make sure to install these if missing.

\exampleBegin

Viridian is working with Chansi on the "chaRecipes" project. He downloads the project files, extracts them to his src/projects folder, and updates his publisher.js config.

\exampleEnd

## Creating a Project

To create your own Publisher project, follow these three starting steps:

### Choose a Name { "index": 1 }

You first step is to choose a project name. To help share your project with others, use this naming convention:

* **Creator Initials:** Pick 3 lowercase letters to serve as your initials.
* **Project Codename:** A codename that represents the content of your project.

\contentEnd

\contentBegin { "class": "page--projects" }

\layoutBegin { "class": "wide" }

\tableBegin { "title": "Project Config" }

|Parameter|Type|Description|
|---|---|---|
|version|string|The current version of this project.|
|author|string|Who made this?|
|description|string|What is this project about?|
|processHtml|function(dom)|Must return a dom element.|
|format|object|What formats does this project require?|

\tableEnd

\layoutEnd

### Create a Folder & Config { "index": 2 }

Next, create a new folder and configuration file for your project. This is done in the following location:

<pre class="text-center">
src/project/&lt;projectName&gt;/&lt;projectName&gt;.js
</pre>

Your initial config file should resemble:

<pre>
const project = new Project({
	version: "1.0.0",
	formats: []
});
</pre>

### Add some Formats { "index": 3 }

A project needs some formats—otherwise, Publisher won't know how to build or export your content. To get started, add a format to your project by specifying:

* **Name:** What's the name of the target format? If no loaded format has this exact name, Publisher will post an error.
* **Version:** What _version_ of the target format is required? If the loaded format has a different version, Publisher will post an error.
* **Languages:** What languages do you support building and exporting in with this format?

<pre>
formats: [
	{
		name: "gppBookWizard",
		version: "1.0.0",
		languages: [ "en" ]
	}
]
</pre>

### Update Publisher { "index": 4 }

Now add your project to the **publisher.js** config file and run the _Check_ program to ensure that everything is working as expected.

If the set up is correct, your project is ready for some new content!

\columnbreak

### Add some Fragments { "index": 5 }

Fragments contain the markdown text that is the core of your project. Each fragment represents a piece of content, such as a single chapter or post—use these to divide your project into manageable chunks.

Create two new markdown fragments (.md files) in your project's "fragments" folder and add some suitable text. Run the _Build_ command with the _fragments_ option to test your content:

<pre class="text-center">
node publisher.js build -p &lt;projectName&gt; -fr
</pre>

Open your _build_ folder to verify that your fragments have been built correctly.

### Add a Collection { "index": 6 }

Collections are how you bind disparate fragments into larger, complete artifacts. A basic collection has an output filename and a list of contents:

```
{
	"filename": "collection01",
	"contents": [
		"file01",
		"file02"
	]
}
```

Create a new collection (.json file) in your project's "collections" folder and add some fragments to it. Run the _Build_ command to test your new collection:

<pre class="text-center">
node publisher.js build -p &lt;projectName&gt;
</pre>

### Enrich and Export { "index": 7 }

Now that you have your basic project up-and-running, you can start to _enrich_ it! Try experimenting with markdown blocks, or creating stylesheets to change the appearance, or adding some language translations.

Once you've finished enriching your text, try rebuilding and then exporting it!

\contentEnd