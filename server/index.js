const express = require("express");
const winston = require("winston");

const app = express();

require("./startup/cors")(app);
require("./startup/config")();
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/prod")(app);

const PORT = 3001;
// const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  winston.info(`server is listening on port ${PORT}`)
);