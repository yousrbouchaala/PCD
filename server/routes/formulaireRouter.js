const express = require('express');
const session = require('express-session')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Formulaire = require('../models/Formulaire.js');
const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;

const app = express();

const get = async(req ,res)=>{
    const form = await Formulaire.findById({email:req.params.email});
    if(form) {
        res.send(form)
    } else {
        res.status(404).send({message: 'formulaire Not Found'});
    }
  };
  const post= async (req, res) => {
    const {email, anatomicalSile , Name_medcien , description,gender,age,mypdf}= req.body;
    const {file} = req;
    const formulaire = new Formulaire({
      email,
      anatomicalSile,
      receipt: (file && file.path),
      Name_medcien,
      description,
      gender,
      age
      // mypdf

    });
  
    try {
      const newFormulaire = await formulaire.save();
      res.status(201).json(newFormulaire);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  async function getFormulaire(req, res, next) {
    let formulaire;
    try {
      formulaire = await Formulaire.findById(req.params.id_patient1);
      if (formulaire == null) {
        return res.status(404).json({ message: 'Formulaire non trouvé' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.formulaire = formulaire;
    next();
  }
  app.patch("/:idd", getFormulaire, async (req, res) => {
    if (req.body.anatomicalSile != null) {
      res.formulaire.anatomicalSile = req.body.anatomicalSile;
    }
    if (req.body.myFile != null) {
      res.formulaire.myFile = req.body.myFile;
    }
    if (req.body.Name_medcien != null) {
      res.formulaire.Name_medcien = req.body.Name_medcien;
    }
    if (req.body.description != null) {
      res.formulaire.description = req.body.description;
    }
    if (req.body.gender != null) {
      res.formulaire.gender = req.body.gender;
    }
  
    try {
      const updatedFormulaire = await res.formulaire.save();
      res.json(updatedFormulaire);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  app.delete('/:id', getFormulaire, async (req, res) => {
    try {
      await res.formulaire.remove();
      res.json({ message: 'Formulaire supprimé' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = { 
    get,
    post,
    
  }