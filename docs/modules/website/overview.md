---
title: Overview
sidebar_position: 1
---

This is a website console for us to use the [Apache InLong](https://github.com/apache/incubator-inlong).

## Guide For Developer
You should check that `nodejs >= 12.0` is installed.

In the project, you can run some built-in commands:

If `node_modules` is not installed, you should first run `npm install` or `yarn install`.

Use `npm run dev` or `yarn dev` to run the application in development mode.

If the server runs successfully, the browser will open [http://localhost:8080](http://localhost:8080) to view in the browser.

If you edit, the page will reload.
You will also see any lint errors in the console.

The start of the web server depends on the back-end server `manger api` interface.

You should start the backend server first, and then set the variable `target` in `/inlong-website/src/setupProxy.js` to the address of the api service.

### Test

Run `npm test` or `yarn test`

Start the test runner in interactive observation mode.
For more information, see the section on [Running Tests](https://create-react-app.dev/docs/running-tests/).

### Build

First, make sure that the project has run `npm install` or `yarn install` to install `node_modules`.

Run `npm run build` or `yarn build`.

Build the application for production into the build folder.
Better page performance can be obtained in the constructed production mode.

After the build, the code is compressed, and the file name includes the hash value.
Your application is ready to be deployed!

For details, see the section on [deployment](https://create-react-app.dev/docs/deployment/).

