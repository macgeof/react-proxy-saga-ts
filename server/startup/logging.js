require("express-async-errors");
const winston = require("winston");

module.exports = function() {
  winston.configure({transports: [new winston.transports.File({ filename: 'logfile.log' }) ]});
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "unCaughtExceptions.log" })
  );
  process.on("unhandledRejection", ex => {
    throw ex;
  });
};
