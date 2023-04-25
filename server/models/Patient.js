const { Schema, model } = require('mongoose');


const PatientSchema = new Schema({
  familyName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthdayDay: { type: Date, required: true },
  region: { type: String, required: true },
  sex: { type: String, required: true },
  phone: { type: Number, required: true },
});

const Patient = model('Patient', PatientSchema);

module.exports = Patient;

