const express = require('express');
const { port } = require('../config');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
// db
require('./db/mongoose');

// parser
// Content-type: application/json
app.use(bodyParser.json());

// routes
app.use('/api/', apiRouter);

app.listen(port, function () {
  console.log(`server is listening on... http://localhost:${port}`);
});
