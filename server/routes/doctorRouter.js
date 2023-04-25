const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor.js');
const ResetPassword = require('../models/ressetPassword');


// Doctoc.js




// Doctor sign up
const signup = async (req, res) => {
  const { familyName , name, email, password,poste,region, fax, phone,Langage,Specialities, year_of_ex, Image_dim } = req.body;
  const image = req.body.Image_dim
  console.log(image)
 
  try {
    // Check if patient email already exists
    const existDoctor = await Doctor.findOne({ email });
    if (existDoctor) {
      return res.status(400).json({ message: 'This email is already registered.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new Doctor
    const newDoctorr = new Doctor({
      familyName,
      name,
      email,
      password:hashedPassword,
      poste,
      region,
      fax,
      phone,
      Langage,
      Specialities,
       year_of_ex, 
        Image_dim 

    });

    await newDoctorr.save();

    // Create and sign JWT token
    

    // Return success message and token
    res.status(201).json({ message: 'Doctor created successfully.', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Doctor sign in
const login = async (req, res) => {
  try {
    const { email, password } = req.body; // récupération des données de doctor utilisé depuis la requête

    // Vérification si l'utilisateur existe dans la base de données
    const dooctor = await Doctor.findOne({ email });
    if (!dooctor) {
      return res.status(404).json({ message: "invalid email, " });
    }

    // Comparaison du mot de passe fourni par l'utilisateur avec le mot de passe enregistré
    const isPasswordMatch = await bcrypt.compare(password, dooctor.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }
    // Create and sign JWT token
    const token = jwt.sign({ id: dooctor._id }, process.env.JWT_SECRET);
    const dooctorSession = { email: dooctor.email } ;// creating user session to keep user loggedin also on refresh
    req.session.dooctor = dooctorSession ;// attach user session to session object from express-session

    // Retourner les données de l'utilisateur en réponse
    res.status(200).json( {message: 'doctor signed in successfully.', token , doctor:dooctor });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const doctoremails =  async (req, res) => {
  try {
    const doctors = await Doctor.find().select("email"); // fetch all doctors and select only the email field
    const emails = doctors.map(doctor => doctor.email); // extract emails from the doctors array
    res.send({ emails });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
}
 


const sendMail = async (req, res) => {
  try {
    const { email } = req.body;
    const doc = await newDoctorr.findOne({ email: email });
    if (!doc) {
      return res.status(404).json({
        message: "Your search returned no results. Please try again with other information",
      });
    }
    const token = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);

    const resetData = new ResetPassword({
      doc: doc._id,
      token: token,
    });

    await resetData.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Cancer_check_up.pcd@gmail.com",
        pass: "darineyoser",
      },
    });

    const mailOptions = {
      from: "Cancer_check_up.pcd@gmail.com",
      to: email,
      subject: "Cancer : Reset Password",
      text: `Reset your Cancer password \n you can change your password from this link :  http://localhost:3000/newpassword/${token}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Email was sended with success, check your email to reset your password",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const resetPassword = async (req, res) => {
  const { token } = req.body;
  try {
    const resetToken = await ResetPassword.findOne({ token }).exec();
    if (!resetToken) {
      return res.status(400).json({ error: 'Invalid token' });
    }
    const doctor = await Doctor.findById(resetToken.doc).exec();
    if (!doctor) {
      return res.status(400).json({ error: 'User not found' });
    }
    await resetToken.delete();
    return res.json(doctor);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};
const Upload = (req, res) => {
  // Retrieve file data from request object
  const file = req.file;

  // Save file data to MongoDB database using Mongoose
  const Diploma = mongoose.model('Diploma', { name: String, data: Buffer });
  const diploma = new Diploma({ name: file.originalname, data: fs.readFileSync(file.path) });
  diploma.save((err, diploma) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send('File uploaded successfully');
  });
}


module.exports = { 
    signup, 
    login,
    sendMail,
  resetPassword, 
    doctoremails
  }




