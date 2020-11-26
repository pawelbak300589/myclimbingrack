import express from 'express';
import logger from 'morgan';

import authRouter from './routes/auth';
import userRouter from './routes/user';

import { errorHandler } from './middlewares';
import { NotFoundError } from './errors';

const app = express();
app.use(express.json());
app.use(logger('dev'))

app.get('/api', (req, res) => {
  res.send('api');
});

app.use('/api/auth', authRouter);
app.use(userRouter);
// app.use('/gear', gearRouter); // TODO
// app.use('/set', setRouter); // TODO
// app.use('/list', listRouter); // TODO

app.get('/', (req, res) => {
  res.send("it's working :)");
});

app.all('*', () => {
  throw new NotFoundError();
});

// global error handler
app.use(errorHandler);

export default app;
