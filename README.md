## Setup instructions:

To install the app, go to the app folder and run:
`npm install`

To start the app in development mode:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build the app for production:

`npm run build`

The built bundle and index.html will be in `build` folder.

To test:

`npm test`

Currently there is only one unit test.

## Things to notice:
1. The application has a desktop view and mobile view. The mobile view breakpoint is 480px;
2. There is 1 second delay when loading programs so that the loading screen can be seen.
3. Error message can be see by navigating to a path which is not "/", or "/movies" or "/series".

## Q&A:
### How did you decide on the technical and architectural choices used as part of your solution?
1. Hooks are used instead of life cycle methods because they are neat and work with functional components.
2. CSS modules and Sass are used because they make css files more readable and easy to maintain.
3. Components are designed to be as re-usable as possible to make them easy to maintain.

### Are there any improvements you could make to your submission?
1. UX could be improved.

### What would you do differently if you were allocated more time?
1. Create a tablet view.
2. Create a hamburger menu for login and trial in mobile view.
3. Add more unit tests.
