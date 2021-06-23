const express = require('express');
const { port } = require('./config');
const app = express();
const apiRouter = require('./routes/api');

// routes
app.use('/', apiRouter);

app.listen(port, function () {
  console.log(`server is listening on... http://localhost:${port}`);
});
