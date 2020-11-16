import express from 'express';

import authRouter from './routes/auth';

const app = express();
app.use(express.json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send("it's working :)");
});

app.all('*', () => {
  throw new Error('Not Found!');
  // throw new NotFoundError();
});

// app.use(errorHandler);

export default app;
