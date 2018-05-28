For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

----------------------

For each day there is a separate branch (day1, day2, day3...)

* For each of the branches, you'll find a `src/README.md` file - here all of the materials will be listed.
* In file `src/task.md` you'll have the short description on task for that day.
* Under `src/docs/` you will be able to find explanations/reminders on how something is written (i.e. arrow functions in ES6).
* Under `src/` all of the actual code will be contained, organized by folders and files other than ones listed above.
* Don't edit or delete `index.js` and `registerServiceWorker.js` files by any mean (for this tutorial)
* Materials provided (materials and code) shouldn't be edited


After reading the material, you should proceed with the task for that day. Your solution for the task should be pushed to separate branch (created from that day branch), named `day_{index}/{username}` (i.e. `day_1/mkolosek`, username is preferred, but nickname is also acceptable)


Before starting with tutorial, make sure you have Node and npm installed:

* To install Node v6 on Ubuntu 16.04 - https://gist.github.com/kolosek/b166b4ba2ddcc293d06bfc9f4cdd1689
* For installing Node on Mac OS and OS X, use Homebrew
* To install on Windows, use official download - https://nodejs.org/en/download/


**For handling node and npm versions, I recommend using n (https://www.npmjs.com/package/n) on Linux and OS X;**


Before running the app, you need to install node packages: Use command `npm install` (or `yarn install`, if you prefer yarn and have appropriate Node version) in terminal, under the project root (where `package.json` is located)


To run the app, you need to open terminal, be in the root of the project and type `npm start`.
