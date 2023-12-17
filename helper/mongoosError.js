const mongoosError = (error, data, next) => {
  error.status = 400;
  console.log(error.message);
  next();
};

module.exports = mongoosError;
