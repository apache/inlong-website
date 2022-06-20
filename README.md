# InLong Official Website

This project keeps all sources used for building up InLong official website which's served at 
https://inlong.apache.org/

## Prerequisite

InLong website is powered by [Docusaurus](https://docusaurus.io/).
If your version of Docusaurus is less than `2.0.0`,please upgrade to `2.0.0`.
Please also make sure your node version is 14.x, versions higher than 14.x is not supported by Docusaurus yet.

## Build instruction 

1. Run `npm i` in the root directory to install the dependencies.
2. Run `npm start` in the root directory to start a local server, you will see the website in 'http://127.0.0.1:3000'.
3. Run `npm run build` to build source code.

If you have higher version of node installed, you may consider `nvm` to allow different versions of `node` coexisting on your machine.

1. Follow the [instructions](http://nvm.sh) to install nvm
2. Run `nvm install v14.13.0` to install node v14
3. Run `nvm use v14.13.0` to switch the working environment to node v14

Then you are all set to run and build the website. Follow the build instruction above for the details.

## How to send a PR

Make sure you have submit issue for tracking PR: [https://github.com/apache/inlong/issues](https://github.com/apache/inlong/issues)

1. Do not use `git add .` to commit all the changes.
2. Just push your changed files, such as:
    * `*.md`
	* blog.js or docs.js or site.js
3. Send a PR to **master** branch.


## Guide for adding new document

### Add a new article for docs

1. Add new .md file under `docs` or `i18n`.
2. Run dev server locally to verify the article can be displayed correctly.
3. Send the pull request contains the *.md and development.js only.


### Add a new version for documents

1. Modify the document in `docs`, then run `npm run docusaurus docs:version replace_by_target_version` locally to copy a document.
2. Add a label to DOC's item in `docusaurus.config.js` file.
3. Modify the last table version in `/src/pages/version/index.js`.