import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import { useContext } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';

function Signin() {
    const [userType, setUserType] = useState('null');
    const [email, setEmail] = useState(''); 
     const [password, setPassword] = useState(''); 
      const navigate = useNavigate();  
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  }

  // supposons que le bouton SignIn soit un élément de formulaire
// avec deux champs: email et password

const handleSignIn = async (e) => {
  e.preventDefault();
  
 // déterminer si l'utilisateur est un patient ou un médecin
    
 let isPatient;

if (userType === "patient") {
  isPatient = true;
} else {
  isPatient = false;
}
 console.log(isPatient)

  // envoyer la requête de connexion appropriée en fonction du choix de l'utilisateur
  let response;
  if (isPatient) {
    fetch('http://localhost:5000/patient/signin', {
  method: 'POST',
  body: JSON.stringify({  email, password 
    
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  const token = data.token;
  localStorage.setItem('token', token);
  
   navigate('/Paccount')
})
      .catch(error => console.error(error));
   
  } 
 else {
   fetch('http://localhost:5000/doctor/signin', {
  method: 'POST',
  body: JSON.stringify({  email, password 
    
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  const token = data.token;
  localStorage.setItem('Doctor token', token);
   localStorage.setItem('doctor' , email);
  
   navigate('/Interface')
})
      .catch(error => console.error(error));
   
  }

  // traiter la réponse
  
 
};

return( 
    
   <div class="form-wrapper1">
  <h1>Sign In</h1>
    <form>
      <div id="test">
  <input type="radio" id="patiente" name="gender"  value="patient"
      
      onChange={handleUserTypeChange}></input>
  <label for="patiente">Patient &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  </label>

  <input type="radio" id="doctor" name="gender"  value="doctor"
      
      onChange={handleUserTypeChange}></input>
        <label for="doctor">Doctor</label>
        <br></br>
        <br></br>
</div>
    <div class="form-item">
      <label for="email"></label>
      <input type="email" name="email" required="required" placeholder="Email Address"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
    </div>
    <div class="form-item">
      <label for="password"></label>
      <input type="password" name="password" required="required" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
    </div>
    <div class="button-panel1">
      <input type="submit" class="button" title="Sign In" value="Sign In" onClick={handleSignIn}></input>
    </div>
  </form>
  <div class="form-footer">
    <p><a href="#">Create an account</a></p>
    <p><a href="#">Forgot password?</a></p>
  </div>
</div>
    
    );

    
}
export default Signin ;
