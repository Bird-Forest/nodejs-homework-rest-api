const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helper/HttpError");

const isValidRutch = (req, data, next) => {
  // const { id } = req.params;
  if (!isValidObjectId(data)) {
    next(HttpError(400, "missing field favorite"));
  }
  next();
};

module.exports = isValidRutch;

// const isValidId = (req, data, next) => {
//   const { id } = req.params;
//   if (!isValidObjectId(id)) {
//     next(HttpError(400, `${id} is not valid id`));
//   }
//   next();
// };
