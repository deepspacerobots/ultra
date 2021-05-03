# Ultra

This is a static HTLM site built for The Dallas Mavericks and Michelob Ultra.  It uses Gulp for dev environment tasks.

## Structure

Put your source files (images, SCSS, JS) in `/src`.  Gulp will watch these files and compile them into something the browser likes better.

## Installation

Install the dev environment build tools:
`npm i`

## Gulp Tasks
`gulp watch`
This starts a browsersync session and hot-reloads the site in-browser when you edit a source file.

`gulp images`
This scales and compresses images in /src/img

`gulp build`
This re-runs all build processes for style, images, and js to prep all assets for publishing.