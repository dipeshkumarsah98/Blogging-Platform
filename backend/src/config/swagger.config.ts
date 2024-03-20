import swaggerJsdoc from 'swagger-jsdoc';

const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blogging Platform API with Swagger',
      version: '1.0.0',
      description: 'Blogging platfrom',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/swagger-ui/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
