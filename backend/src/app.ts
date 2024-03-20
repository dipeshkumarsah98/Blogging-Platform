require('express-async-errors');

import apiRouter from 'routes';
import bodyParser from 'body-parser';
import corsHandler from 'middlewares/cors';
import express, { Express } from 'express';
import errorHandler from 'middlewares/errorHandler';
import env from 'config/env.config';
import logger from 'utils/logger.utils';
import notFoundHandler from 'middlewares/notFound';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from 'config/swagger.config';

const PORT = env.PORT;
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsHandler);
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // adding docs api

app.use('/api/v1/', apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
  logger.info(`API docs is running on http://localhost:${PORT}/api-docs`);
});
