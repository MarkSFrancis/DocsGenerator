# DocsGenerator
A custom DocFX template with a light theme, and a focus on readability

# Screenshots
![App](Screenshots/1.png)

# How To

## Configuration

The sample project's build is configured by a dependency on `docfx.console`, and a reference to the `Templates/Clean` folder.  
To change this to run your own builds, add `docfx.console` to your solution, and edit the `templates` section in `docfx.json` to use the `Templates/Clean` (you'll need to edit the relative path according to where the `Templates/Clean` folder is to your docfx.json file)

## Build the Sample

1. Clone or fork the repository

1. Open `DocsGenerator/SampleProject.sln` in Visual Studio
1. Build the solution
1. A new folder in `DocsGenerator` called `SampleProject.Site` will be generated
1. Open that folder with a server that can serve static files (such as http-server), and you will be able to browse generated documentation site

# TODO

* Add a menu for mobile - there's no way to view the TOC from mobile
* Add dark theme
