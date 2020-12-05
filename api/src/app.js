const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');

const authRouter = require('./routes/auth.js');
const userRouter = require('./routes/user.js');
const gearRouter = require('./routes/gear.js');
const setRouter = require('./routes/set.js');
const listRouter = require('./routes/list.js');

const { errorHandler } = require('./middlewares/index.js');
const { NotFoundError } = require('./errors/index.js');

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

module.exports = app;
