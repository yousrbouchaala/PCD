const jwt = require('jsonwebtoken');
const Patient = require('./models/Patient')

const auth = async (req, res, next) => {
  try {
    //const token = req.header('Authorization').replace('Bearer ', '');
    const token = req.header('header');
    if (!token) {
      throw new Error('No token provided');
    }
    //const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    const patient = await Patient.findOne({ _id: decoded._id, 'tokens.token': token });

    /*if (!patient) {
        throw new Error();
    }*/

    res.token = token;
    res.patient = patient;
    next();
  } catch (error) {
      console.log(error)
    res.status(401).send({ error: 'Authentication failed' });
  }
};

module.exports = auth;
