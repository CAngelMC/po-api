const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  autoriza: Boolean,
  recibe: Boolean,
  notificacionCrearPo: Boolean,
  administra: Boolean,
  firma: String,
  puesto: String,
});

module.exports = mongoose.model('User', UserSchema);
