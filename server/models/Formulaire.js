const { Schema, model } = require('mongoose');


const FormSchema = new Schema({
  email:{type:String , required: true},
  description:{type:String , required: true},
  gender:{type:String , required:true},
  anatomicalSile: { type:String, required: true },
  receipt: { type:String},
  Name_medcien:{type:String,required: true},
  age: {type:Number, required:true},
  // mypdf:{type:String,required:true}
});

const Formulaire = model('Formulaire', FormSchema);
module.exports = Formulaire;