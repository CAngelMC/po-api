const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApiKeySchema = new Schema({
  token: String,
  scopes: [],
});

module.exports = mongoose.model('api-key', ApiKeySchema);
