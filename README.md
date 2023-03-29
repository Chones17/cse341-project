# My Scripture Journal
This project is aimed at helping aid scripture study by giving the end user a place to store their notes and thoughts in an organized manner.

## Technologies
- NodeJS
- JavaScript
- OAuth
- MongoDB

## Installation
- [ ] Clone repository
- [ ] Install packages: `npm install`
- [ ] Setup MongoDB database:
    - Create a new database named _library_
    - Create collections:
        - _journals_
        - _notes_
        - _topics_
        - _users_
        - _sessions_
- [ ] Setup GitHub OAuth app with client ID and client secret
    - Application name: `cse341-project-localhost`
    - Homepage URL: `http://localhost:3000`
    - Authorization callback URL: `http://localhost:3000/auth/github/callback`
    - Enable Device Flow: ***blank***
- [ ] Setup local environment file: 
    ```
    # MongoDB connection URI
    MONGODB_URI = <Your MongoDB Connection URI Here>

    # GitHub client ID and Secret
    GITHUB_CLIENT_ID = <Your Client ID Here>
    GITHUB_CLIENT_SECRET = <Your Client Secret Here>

    # Session secret
    SESSION_SECRET = <Your Session Secret Here>
    ```

## Checklist
- Deployed to the Web (15%)
    - [ ] Node.js app deployed to Render (65%)
    - [ ] Render URL can be opened without any errors (78%)
    - [x] App connects to MongoDB (90%)
    - [x] Use of Render CONFIG VARS to connect to MongoDB (100%)
- OAuth (15%)
    - [x] Evidence of OAuth is in the Node.js project (65%)
    - [x] User can log in using OAuth (78%)
    - [x] User can log out using OAuth (90%)
    - [x] Each protected route requires authentication before access (100%)
- HTTP Requests (15%)
    - [x] Several HTTP Requests are in theh project and work (65%)
    - [x] At least one HTTP Request is present for each collection in the database (78%)
    - [x] At least 4 collections have a POST request (90%)
    - [x] At least 4 collections have a PUT or DELETE request (100%)
- Testing (15%)
    - [ ] At least one unit test file exists (65%)
    - [ ] At least one unit test file for each .js file in the controllers folder (78%)
    - [ ] All tests running and passing (90%)
    - [ ] Unit tests exist and pass for main server.js file and .js files in routes folder (100%)
- Database (10%)
    - [x] Database exists (65%)
    - [x] Database has a single collection (78%)
    - [x] Database has at least 4 collections (90%)
    - [x] At least one collection features documents with at least 7 fields (100%)
- API Documentation (10%)
    - [x] The swagger.json file is present (65%)
    - [x] Documentation is organized by collection (78%)
    - [x] The documentation is published to Render at "/api-docs" route (90%)
    - [x] The documentation can test each endpoint (100%)
- Data Validation (10%)
    - [x] Node project has evidence of data validation (65%)
    - [ ] Data validation is being used for each GET and POST route (78%)
    - [ ] Data validation is being used for each PUT and DELETE route (90%)
    - [ ] Each route has data validation, and returns some type of 400 or 500 error if
          data requirements aren't met (100%)
- Error Handling (10%)
    - [x] Node project has evidence of error handling (65%)
    - [ ] Error handling is being used for each GET and POST route (78%)
    - [ ] Error handling is being used for each PUT and DELETE route (90%)
    - [ ] Each route has error handling, and returns some type of 400 or 500 errors 
          get thrown (100%)

## Development
Checklist for development team to ensure compatability in local and production environment.
- [ ] Pull respository changes
- [ ] Run dependency changes: `npm install`
- [ ] Update Callback URL: `/config/auth.js`
- [ ] Update Swagger host: `swagger.js`
- [ ] Update Swagger schemes (HTTP/HTTPS): `swagger.js`
- [ ] Generate new Swagger.json file: `npm run swagger`

Note: When ready to Push to GitHub respository follow the last four steps of the process.

## Dependencies
- connect-mongodb-session
- cors
- dotenv
- express
- express-session
- mongoose
- mongoose-findorcreate
- nodemon
- passport
- passport-github2
- swagger-ui-express
- swagger-autogen
- validatorjs

## Authors
- Travis Stirling
- Zachary Thompson 
- Kelley Robertson
- Miguel Marin Javier