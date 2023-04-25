const { Schema, model } = require('mongoose');
const Doctor = require('./Doctor');

const ResetPassword = new Schema( {
  Id: {
    type: Number,
    primaryKey: true,
    autoIncrement: true,
  },
  token: {
    type: String,
    allowNull: false,
  },
});
const RessetPassword = model('ResetPassword', ResetPassword);

module.exports = RessetPassword;
