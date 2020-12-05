# node-starter


Technologies used in the project:
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**N**ode.js](https://nodejs.org): runtime environment

Other tools and technologies used:
* [JSON Web Token](https://jwt.io): user authentication
* [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js): password encryption

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, TypeScript compiler and Express server.

Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

## Please open an issue if
* you have any suggestion to improve this project
* you noticed any problem or error

## Running tests
Run `mongod` to run an instance of MongoDB then run `npm run testbe` to execute the backend tests via [Mocha](https://mochajs.org/).

### Author
* [Ali Can Turkmen](https://github.com/alicanturkmen)