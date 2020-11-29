import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import authRouter from './routes/auth';
import userRouter from './routes/user';
import gearRouter from './routes/gear';
import setRouter from './routes/set';
import listRouter from './routes/list';

import { errorHandler } from './middlewares';
import { NotFoundError } from './errors';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));

// allow cors requests from any origin and with credentials
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

app.get('/api', (req, res) => {
  res.send('api');
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/gears', gearRouter);
app.use('/api/sets', setRouter);
app.use('/api/lists', listRouter);

app.get('/', (req, res) => {
  res.send("it's working :)");
});

app.all('*', () => {
  throw new NotFoundError();
});

// global error handler
app.use(errorHandler);

export default app;
