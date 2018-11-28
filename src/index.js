import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import next from 'next';
import server from './server';

dotenv.config();

const { PORT, NODE_ENV, DB_HOST } = process.env;

global.form = {
  code: 0,
  payload: null,
  error: null,
};

mongoose.connect(
  DB_HOST,
  (error) => {
    if (error) {
      console.log(error);

      process.exit(1);
    }

    console.log('Connect mongoDB successful');
  },
);

const dev = NODE_ENV !== 'production';

const app = next({ dev, dir: './src/app' });

const handler = app.getRequestHandler();

(async () => {
  await app.prepare();

  server.get('/', (req, res) => app.render(req, res, '/', { name: 'Khoa' }));

  if (dev) {
    server.use(morgan('dev'));
  }

  server.use(handler);

  return server.listen(PORT, (error) => {
    if (error) process.exit(1);

    console.log(`Server is running on port ${PORT}`);
  });
})();
