const express = require('express');
const app = express();

const { config } = require('./config/index');
const providersApi = require('./routes/providers');

providersApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
