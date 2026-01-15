
const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");

const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });

    return res.status(StatusCodes.CREATED).json(SuccessResponse(flight));
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse(error));
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    console.log("SuccessResponse TYPE:", typeof SuccessResponse);
    console.log("SuccessResponse SOURCE:", SuccessResponse.toString());

    return res.status(StatusCodes.OK).json(SuccessResponse(flights));
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse(error));
  }
}
// POST : /flights/:id
//req-body {}
async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params.id);
      console.log("FLIGHT VALUE:", flight);
    console.log("TYPE:", typeof flight);
    // SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(SuccessResponse(flight));
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function updateSeats(req,res) {
  try{
    const response = await FlightService.updateSeats({
      flightId: req.params.id,
      seats: req.body.seats,
      dec: req.body.dec
    });
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse(response));
  } catch(error) {
    console.error("UPDATE SEATS ERROR:", error);

    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse(error));
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats
};
