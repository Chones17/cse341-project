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
## Dependencies
- Cors
- Dotenv
- Express
- Mongoose
- Nodemon

## Authors
- Travis Stirling
- Zachary Thompson 
- Kelley Robertson
- Miguel Marin Javier

