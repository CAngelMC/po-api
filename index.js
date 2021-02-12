/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const app = express();
const mongoose = require("mongoose");

const { config } = require('./config/index');
const providersApi = require('./routes/providers');

// body parser
app.use(express.json());

mongoose
  .connect("mongodb://localhost/po-system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((_db) => console.log("DB connected"))
  .catch((err) => console.log(err));

providersApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
