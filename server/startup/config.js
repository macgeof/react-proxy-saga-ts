const config = require("config");
module.exports = function() {
  if (config.get("requiresAuth") && !config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined");
  }
  if (config.get("requiresAuth") && !config.get("convertApiPrivateKey")) {
    throw new Error("FATAL ERROR: convertApiPrivateKey is not defined");
  }
};
