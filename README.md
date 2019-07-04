# React github pages with autobuild
A simple way for publishing react app on gh-pages.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
For setting up your own autobuild react app:
 - [x] create repository where you will develop
 - [x] create there a react-app
 - [x] create github repository named `<username>.github.io`
 - [x] generate github [tiken](https://github.com/settings/tokens)
 - [x] add [travic ci](https://docs.travis-ci.com/user/tutorial/])
 - [x] write script `.travis.yml`, acctually you can use [mine](https://github.com/levkovalenko/react-gh-pages/blob/master/.travis.yml) 
 - [x] [add token](https://docs.travis-ci.com/user/private-dependencies/#api-token) to travis ci
 - [x] add your `<username>.github.io` as submodule for your repo, there you will develop
 - [x] commit and push!
