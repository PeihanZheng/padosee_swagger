// import swagger docs
const swaggerJSDoc = require('swagger-jsdoc');

// define the api
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'PadoSEE API Documentation',
            version: '1.0.0',
            description: 'This is the documentation for the PadoSEE API',
        },
        servers: [
            {
                url: 'http://localhost:5500',
                description: 'Local server'
            }
        ],
    },
    apis: [`${__dirname}/routes/*.js`],
}

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// export swaggerSpec
module.exports = swaggerSpec;