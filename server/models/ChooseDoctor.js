const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    FullName: { 
        type: String, 
        required : true 
    }, 
     phone: {
    type: Number,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
 
  pdf: {
    type: Buffer,
    required: true
  }
});

module.exports = mongoose.model('ChooseDoctor', formSchema);
