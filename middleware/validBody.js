const { HttpError } = require("../helper");

const validBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error.message);
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validBody;
