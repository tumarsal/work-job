import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'

const swaggerDocument = YAML.load('/Users/alexmankov/Documents/work-job/src/swagger.yml')
console.log(swaggerDocument);
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', indexRouter);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

export default app;
