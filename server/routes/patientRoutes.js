const express = require('express');
const session = require('express-session')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient.js');
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
};
// user.js
// import express-session in your code

// use session variable here



// Patient sign up
const signup = async (req, res) => {
  const { familyName , name, email, password,birthdayDay,region, sex, phone } = req.body;
  
  try {
    // Check if patient email already exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'This email is already registered.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new patient
    const newPatient = new Patient({
      familyName,
      name,
      email,
     password:hashedPassword,
     birthdayDay,
     region,
     sex,
     phone,
    });

    await newPatient.save();

    // Create and sign JWT token
   

    // Return success message and token
    res.status(201).json({ message: 'Patient created successfully.'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Patient sign in
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find patient by email
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Validate password
    const passwordValid = await bcrypt.compare(password, patient.password);
    if (!passwordValid) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
    
    // Create and sign JWT token
    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET );
    // ------- NEW CODE HERE
    const patientSession = { email: patient.email } // creating user session to keep user loggedin also on refresh
    req.session.patient = patientSession // attach user session to session object from express-session
    // Return success message and token
    return res.status(200).json({ message : "logged in successfully" ,
      token , patient: patient 
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // Assuming you've verified the user's credentials and created a user object

};
const isAuth =  async (req, res) => {
  if (req.session.patient) {
    return res.json(req.session.patient)
  } else {
    return res.status(401).json('unauthorize')
  }
}
const get = async(req ,res)=>{
  try {
    await Patient.find({})
    .then(result=>{
      res.send(result)
    })
  }
  catch (err) {
    console.log(err)
  }
};
const post =async (req,res)=>{
  
  try{
  let new_patient = new Patient ({
    familyName: req.body.familyName,
    name: req.body.name,
    email: req.body.email,
    password:req.body.password,
    birthdayDay: req.body.birthdayDay,
    region: req.body.region,
    gender: req.body.gender,
    phone: req.body.phone
  });
  await new_patient.save()
  res.send('save effectue avec succé')
}
catch(err){
  console.log(err)
}
};


module.exports = { 
  signup, 
  signin,
  isAuth,
  get,
  post,
}
