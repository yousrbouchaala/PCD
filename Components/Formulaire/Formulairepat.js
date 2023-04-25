import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Formulairepat.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
function InscriptionPatient() {
    const [familyName, setNo] = useState('');
    const [name, setPrenomm] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
  const [phone, setphone] = useState('');
  const [birthdayDay, setBithdayday] = useState(''); 
  const [region, setRegion] = useState(''); 
  const [sex, setUserGenderChange] = useState('');

     const handleUserGenderChange = (e) => {
    setUserGenderChange(e.target.value);
  }
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

   
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('familyName', familyName);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('birthdayDay',birthdayDay );
    formData.append('region', region);
    formData.append('sex', sex);
    formData.append('phone', phone);


    try {
      const response = await axios.post('http://localhost:5000/patient/signup', {
    familyName,
  name,
  email,
  password,
  birthdayDay,
  region,
  sex,
  phone,
      });
        console.log(response);
      if (response.data) {
        toast.success('Account created successfully!');
        
      
      // Redirect to dashboard or login page
    }
  } catch (error) {
    console.log(error.response.data);
  }
  

 
}; 
    return(
        
        <div class="form-wrapper" >
<h1 > 
Patient Registration
</h1>
<form onSubmit={handleSubmit} encType='multipart/form-data'>
        <br></br>
        <div class="form-item">
        <label>
        <input type="text" value={familyName} onChange={(e) => setNo(e.target.value)} placeholder="Your Family Name" />
                    </label>
                    </div>
       
        <div class="form-item">
       
       <input type="text" value={name} onChange={(e) => setPrenomm(e.target.value)} placeholder=" Your name" />
     </div>
     <div class="form-item">
      <label for="email"></label>
      <input type="email" name="email" required="required" placeholder="Email Address"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
   
                  </div>


                  <div class="form-item">
      <label for="password"></label>
      <input type="password" name="password" required="required" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
    </div>

        <div className='form-item'>
        <label for="birthday"></label>
        <div>
            <input type="date" value={ birthdayDay} name="birthday" placeholder="Birthday day" onChange={(e) => setBithdayday(e.target.value)}/>
        </div>
        </div>
        <div class="form-item"> 
                   <h6> Your Region  :</h6>
   
                      
                      <select name="region" id="region" onChange={handleRegionChange}>
   <option value="0" selected disabled>Region</option>
  <option value="Tunis">Tunis</option>
  <option value="Ariana">Ariana</option>
  <option value="Ben Arous">Ben Arous</option>
  <option value="Manouba">Manouba</option>
  <option value="Nabeul">Nabeul</option>
  <option value="Zaghouan">Zaghouan</option>
  <option value="Bizerte">Bizerte</option>
  <option value="Beja">Beja</option>
  <option value="Jendouba">Jendouba</option>
  <option value="Kef">Kef</option>
  <option value="Siliana">Siliana</option>
  <option value="Kairouan">Kairouan</option>
  <option value="Kasserine">Kasserine</option>
  <option value="Sidi Bouzid">Sidi Bouzid</option>
  <option value="Sousse">Sousse</option>
  <option value="Monastir">Monastir</option>
  <option value="Mahdia">Mahdia</option>
  <option value="Sfax">Sfax</option>
  <option value="Gafsa">Gafsa</option>
  <option value="Tozeur">Tozeur</option>
  <option value="Kebili">Kebili</option>
  <option value="Gabes">Gabes</option>
  <option value="Medenine">Medenine</option>
  <option value="Tataouine">Tataouine</option>
</select>    
          </div>
          <br></br>
<div >
  <input type="radio" id="Woman" name="sex"  value="Woman"
      
      onClick={handleUserGenderChange}></input>
  <label for="Woman">Women &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  </label>

  <input type="radio" id="Man" name="sex"  value="Man"
      
      onClick={handleUserGenderChange}></input>
            <label for="Man">Men</label>
            
          </div>
          <br></br>
<div class="form-item">
        <label>
        <input type="number" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone Number" />
                    </label>
          </div>
          <br></br>
          
        <Link to={"/contact"}>
        <div class="button-panel" style={{marginTop:"-10px"}}>
      <input type="submit" class="button" title="Sign Up" value="  Sign-Up " onClick={handleSubmit} ></input>
                    </div>
          </Link>

          <br>
                  </br>
        </form>


</div>




    )

}
export default InscriptionPatient;