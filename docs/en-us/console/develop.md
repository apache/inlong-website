## Before use
Should check the `nodejs >= 14.0` has been install.

## Develop
Inside the newly created project, you can run some built-in commands:

if not install the `node_modules`, you should run `npm install` or `yarn install` at first.

Runs the app in development mode with `npm run dev` or `yarn dev`.

If server run success, Browser will Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Notice

The start of the web server depends on the back-end server api interface.

You should start the backend server first, and then set variable `target` in `/inlong-website/src/setupProxy.js` as api service address.

## Test

Run `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://create-react-app.dev/docs/running-tests/) for more information.

## Build and deployment

Run `npm run build` or `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.
