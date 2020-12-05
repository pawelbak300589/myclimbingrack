const CustomError = require('../errors/custom-error.js');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // console.error(err.message);
  console.error(err);

  res.status(400).send({
    errors: [{ message: 'Something went wrong', error: err.message }],
  });
};

module.exports = errorHandler;