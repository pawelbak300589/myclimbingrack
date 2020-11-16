// import mongoose from 'mongoose';

import app from './app';

const start = async () => {
  if (!process.env.DB_URI) {
    throw new Error('DB_URI must be defined!');
  }

  // try {
  //   await mongoose.connect(process.env.MONGO_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   });
  //   console.log('Connected to MongoDB');
  // } catch (err) {
  //   console.log(err);
  // }

  app.listen(3080, () => {
    console.log('Listening on port 3080');
  });
};

start();
