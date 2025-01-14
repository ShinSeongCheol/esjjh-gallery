var express = require('express');
var router = express.Router();
const db = require('../database/postgresql');

/* GET home page. */
router.get('/bb', async function(req, res, next) {
  const result = await db.query('SELECT NOW()');
  console.log(result)
  res.send(`Database connected. Current time: ${result.rows[0].now}`);
});

module.exports = router;
