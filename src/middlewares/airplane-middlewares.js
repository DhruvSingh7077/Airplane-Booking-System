const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Some error occurred while creating the airplane";
    ErrorResponse.error = new APPError(
      ["Model Number is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}
module.exports = {
  validateCreateRequest,
};
