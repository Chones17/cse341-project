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
- Deployed to the Web
    - [x] Node.js app deployed to Render
    - [x] Connected to MongoDB
    - [x] Render CONFIG VARS
    - [x] Mongoose models created
- OAuth
    - [x] Login, logout, and GitHub authentication routes
    - [ ] Passport, Passport-GitHub2, Express-cookies,
            Connect-mongodb-session dependencies
    - [ ] Install mongoose-findorcreate
    - [ ] Authentication configuration
    - [ ] Authentication middleware
- HTTP Request
    - [x] GET, POST, PUT, and DELETE routes
    - [x] Controllers setup
- Testing
    - [ ] One test file for each controller file
    - [ ] One test file for app.js
    - [ ] One test file for each route file
- Database
    - [x] Database has 4 collections
    - [x] One collection has 7 fields
- API Documentation
    - [x] Swagger.json file
    - [x] Organized by collection
    - [x] API route setup
    - [ ] Documentation can test each endpoint
- Data Validation
    - [ ] Install dependency Express-validator
    - [ ] Data validation for each GET, POST, PUT, and DELETE route
    - [ ] Each route returns 400 or 500 error based on validation
- Error Handling
    - [ ] Error handling for each GET, POST, PUT, and DELETE route
    - [ ] Each route returns 400 or 500 error based on handling
- REST
    - [ ] Rest file updated to test each endpoint

## Dependencies
- Cors
- Dotenv
- Express
- Mongoose
- Nodemon
- swagger-ui-express
- swagger-autogen

## Authors
- Travis Stirling
- Zachary Thompson 
- Kelley Robertson
- Miguel Marin Javier

