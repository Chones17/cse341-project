// Require swagger-autogen dependency
const swaggerAutogen = require('swagger-autogen')();

// Create swagger document
const doc = {
    info: {
        title: 'My Scripture Journal API',
        description: 'API for keeping a Scripture Journal'
    },
    // host: 'localhost:3000',
    host: 'cse341-project-production.onrender.com',
    // schemes: ['http'],
    schemes: ['https'],
    securityDefinitions: {
        github_oauth: {
        type: 'oauth2',
        // authorizationUrl: 'http://localhost:3000/auth/github',
        authorizationUrl: 'https://cse341-project-production.onrender.com/auth/github',
        flow: 'accessCode',
        scopes: {
            'read:user': 'Read the user'
        }
        }
    },
    security: {
        github_oauth: [
        'read:user'
        ]
    },
    tags: [
        {
        name: 'Authentication',
        description: 'These are authentication routes'
        },
        {
        name: 'Journal',
        description: 'A collection of notes'
        },
        {
        name: 'Note',
        description: 'These are notes or thoughts about the scripture'
        },
        {
        name: 'Topic',
        description: 'These topics can be used to help differentiate different study topics'
        },
        {
        name: 'User',
        description: 'Keeps Track of the user and their credentials'
        }
    ]
};

// Create output file and set endpoint file
const outputFile = './swagger.json';
const endpointsFiles = ['./route/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);