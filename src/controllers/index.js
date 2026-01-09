// module.exports = {
//   AirplaneController: require("./airplane-controller"),
// };
// src/controllers/index.js
const AirplaneController = require("./airplane-controller");
const InfoController = require("./info-controller");
module.exports = {
  AirplaneController,
  InfoController,
};
