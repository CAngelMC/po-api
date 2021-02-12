const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProveedorSchema = new Schema({
  razonSocial: String,
  rfc: String,
  codigo: String,
  direccion: String,
  telefono: String,
  correo: String,
  correos: [],
  contacto: String,
});

module.exports = mongoose.model("Proveedor", ProveedorSchema);
