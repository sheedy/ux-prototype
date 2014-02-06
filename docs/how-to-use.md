# UX Prototype

## How to use

*NOTE: Need to elaborate on this*

A lot of the variables are defined in `Gruntfile.js` and also in `package.json`.

Source files are in the ``src`` directory and the static/flat output is output to the ``build`` directory.

#### Working on source files

Start a server with livereload and edit your HTML (.hbs), SASS or js files from the `src` and have the changes update in the browser without refreshing.

```
grunt server
```

#### Building static output

After you have changed any of the source files, generate new files in the build directory by running the following command:

```
grunt build
```

### HTML (.hbs) pages

[Assemble docs](http://assemble.io/docs/)

Most page and directory relatred settings are in `tasks/options/assemble.js`.

