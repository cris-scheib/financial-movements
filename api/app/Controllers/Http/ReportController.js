"use strict";

class ReportController {
  async movements({ request, response, auth }) {
    return response.status(200).json("ok");
  }

  async history({ request, response, auth }) {
    return response.status(200).json("ok");
  }
  async balance({ request, response, auth }) {
    return response.status(200).json("ok");
  }
  async cashFlow({ request, response, auth }) {
    return response.status(200).json("ok");
  }
  async users({ request, response, auth }) {
    return response.status(200).json("ok");
  }
}

module.exports = ReportController;
