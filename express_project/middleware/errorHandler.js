const { constants } = require("../constants");
const mongoose = require("mongoose");
const errorHandler = (err, req, res, next) => {
  console.log("statusCode", err);
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_FAILED:
      res.json({
        title: "validation failed",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.INTERNAL_SERVER_ERROR:
      res.json({
        title: "Internal server error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      res.send("No issues all good!");
  }
};

module.exports = errorHandler;
