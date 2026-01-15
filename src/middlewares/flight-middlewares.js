const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message =
      "Some error occurred while creating the flightNumber";
    ErrorResponse.error = new APPError(
      ["Flight Number is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["airplaneId is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["departureAirportId is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["arrivalAirportId is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["departureAirportId is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["arrivalTime is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["departureTime is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["price is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["totalSeats is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}
function validateUpdateSeatsRequest(req,res,next) {
 
  if (!req.body.seats) {
    ErrorResponse.message = "Some error occurred while creating the flight";
    ErrorResponse.error = new APPError(
      ["seats not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}
module.exports = {
  validateCreateRequest,
  validateUpdateSeatsRequest
};
