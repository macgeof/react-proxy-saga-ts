const express = require("express");
const winston = require("winston");

const router = express.Router();

router.get('/', (req, res) => {
	winston.info('server api greeting', req.query);
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});


module.exports = router;