const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer();
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
};
const Patient1 = require('./models/Patient.js'); 
const Patient = require('./routes/patientRoutes'); 
const Formulaire = require('./routes/formulaireRouter');
const Doctor = require('./routes/doctorRouter'); 
const Doctor1 = require('./models/Doctor.js')
const dbConnect = require("./db/dbConnect");
const chooseDoctor = require('./models/ChooseDoctor.js')


const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(express.urlencoded({extended: true}));
dbConnect(); 
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session) 

const MAX_AGE = 1000 * 60 * 60 * 3 // 3hrs

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: 'mySessions',
})




app.use(
  session({
    secret: 'a1s2d3f4g5h6',
    name: 'session-id', // cookies name to be put in "key" field in postman
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
      sameSite: false,
      secure: false, // to turn on just in production
    },
    resave: true,
    saveUninitialized: false,
  })
)


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (_req, res) => {
  res.json({ hello: "world" }); 
  
});




app.post("/patient/signin", Patient.signin); 
app.post("/patient/signup", Patient.signup);

app.post("/doctor/signin", Doctor.login );
app.post("/doctor/signup", Doctor.signup);

app.get("/patient", Patient.get );
app.get("/patien/form",Formulaire.get);
app.get("/doctoremails", Doctor.doctoremails); 
app.post("/ajouterpatient",Patient.post);
app.get('/sendMail', Doctor.sendMail);
app.get('/resetPassword', Doctor.resetPassword);
app.get('/auth-endpoint', async (req, res) => {
  try {
    const token = req.header('Authorization');
    const cleanToken = token.replace('Bearer ', '');

    if (!token) {
      throw new Error('No token provided');
    }
     

    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    
    const patient = await Patient1.findOne({ _id: decoded.id });

    if (!patient) {
      console.log('No patient found');
    }

    res.json(patient);

  } catch (error) {
    console.log(error);
    res.status(401).send({ error: 'Authentication failed' });
  }
});

app.get('/authDoctor-endpoint', async (req, res) => {
  try {
    const token = req.header('Authorization');
    const cleanToken = token.replace('Bearer ', '');

    if (!token) {
      throw new Error('No token provided');
    }
     

    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    
    const doctor = await Doctor1.findOne({ _id: decoded.id });

    if (!doctor) {
      console.log('No doctor found');
    }

    res.json(doctor);

  } catch (error) {
    console.log(error);
    res.status(401).send({ error: 'Authentication failed' });
  }
});


app.post('/patient/choose-doctor', upload.single('pdf'), async (req, res) => {
  const { FullName, phone, doctor } = req.body;
  const pdf = req.file.buffer;

  try {
    const form = new chooseDoctor({
      FullName,
      phone,
      doctor,
      pdf
    });

    await form.save();

    res.status(201).send(form);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get('/Listepatients/:email', (req, res) => {
  
  chooseDoctor.find({ doctor: req.params.email })
    .then(PatientDetails => {
      res.json(PatientDetails);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});






// Start server
app.listen(process.env.PORT, () => {
    console.log(" server running on port 5000 ");
}); 
