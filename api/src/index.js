import app from './app';

const start = async () => {
  const PORT = process.env.PORT || 3080;

  // if (!process.env.DB_URI) {
    // throw new Error('DB_URI must be defined!');
  // }

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

start();
