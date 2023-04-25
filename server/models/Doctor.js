const { Schema, model } = require('mongoose');


const DoctorSchema = new Schema({
    familyName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    poste: { type: Number, required: true },
    region: { type: String, required: true },
    fax: { type: Number,  required: true },
    phone: { type: Number, required: true },
    Langage: {type:String ,require:false},
    Specialities:{ type:String , require:true},
    year_of_ex:{type:Number,require:true},
    Image_dim: { type: String, required: true },
  });

const Doctor = model('Doctor', DoctorSchema);


module.exports = Doctor;