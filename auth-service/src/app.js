import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

const app = express();

app.use(bodyParser.json());

app.use(router);

app.get('/', (_, res) => {
  res.send('Auth Service');
});

export default app
