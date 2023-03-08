const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Scripture Journal API',
    description: 'API for keeping a Scripture Journal'
  },
  host: 'https://localhost:3000/',
  schemes: ['https']
};

const outputFile = './swaggerDesign.json';
const endpointsFiles = ['./route/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

