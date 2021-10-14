var mongoose = require('mongoose');
Schema = mongoose.Schema;

var ColaboradoresSchema = new Schema({ 
  name: { type: String},
  birth: { type: Date},
  rfc: { type: String},
  start: { type: Date},
  state: { type: String},
  area: {
     type: String,
     enum: ["RH", "TI", "Admin", "Design", "Account"],
  },
  summary: { type: String },
});

module.exports = mongoose.model("Colaboradores", ColaboradoresSchema);