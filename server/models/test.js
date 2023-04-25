const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({ 
    msg: String, 
    num: Number,
})  
const Test = mongoose.model("test", testSchema); 
module.exports = Test; 

