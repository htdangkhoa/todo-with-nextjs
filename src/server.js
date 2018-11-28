import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const server = express();

server.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
]);

server.use('/api', routes);

export default server;
