const express = require('express');
const { port } = require('../config');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

require('./db/mongoose');

app.use(bodyParser.json());

app.use('/api/', apiRouter);

app.listen(port, function () {
  console.log(`server is listening on... http://localhost:${port}`);
});
