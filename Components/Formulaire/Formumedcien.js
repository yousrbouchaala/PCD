import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import "./Formulaire.css";
import { useNavigate } from 'react-router-dom';
function InscriptionMedecin() {
          const [familyName, setNom] = useState('');
          const [name, setPrenom] = useState('');
          const [Specialities, setSelectedSpeciality] = useState('null');
          const [year_of_ex, setNbrYears] = useState('');
          const [password, setPassword] = useState('');
          const [email, setEmail] = useState('');
          const [poste, setposte] = useState('');
          const [phone, setPhone] = useState('');
          const [region, setSelectedRegion] = useState('null');
          const [fax ,  setFax] = useState("")
          const [Image_dim, setImage] = useState("");
  const navigate = useNavigate(); 

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  }; 
  const handleFileChange = (event) => {
    const file = event.target.files[0];  
    setFileToBase(file); 
    console.log(file); 
  }
  const setFileToBase = (file) => { 
    const reader = new FileReader(); 
    reader.readAsDataURL(file);
    reader.onloadend = () => { 
      setImage(reader.result); 

    }
  }
  
 const handleSubmit = async (event) => {
   event.preventDefault();
  const formData = new FormData();
  formData.append('familyName', familyName);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('poste', poste);
  formData.append('region', region);
  formData.append('fax', fax);
  formData.append('phone', phone);
  formData.append('Image_dim', Image_dim);
  formData.append('Specialities', Specialities);


    try {
      const response = await axios.post('http://localhost:5000/doctor/signup', {
      familyName,
      name,
      email,
      password,
      poste,
      region,
      fax,
      phone,
      Specialities,
       year_of_ex, 
       Image_dim,
      });
        console.log(response);
      if (response.data) {
        toast.success('Account created successfully!');
        setTimeout(() => {
  navigate('/signin');
}, 2000);
      
      // Redirect to dashboard or login page
    }
  } catch (error) {
    console.log(error.response.data);
  }
  

 
}; 
 

   
  
  return (<div>
 
       
            <div class="form-wrapper" >
       
              <h1> Doctor Registration </h1>
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
           
                <br></br>
  <div class="form-item" >
        
       <div class="form-item">
      <label for="email"></label>
      <input type="email" name="email" required="required" placeholder="Email Address"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
   
                  </div>
      
     <div class="form-item">
      <label for="password"></label>
      <input type="password" name="password" required="required" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
    </div>
        
        
       <div class="form-item">
        <label>
        <input type="text" value={familyName} onChange={(e) => setNom(e.target.value)} placeholder="Your Family Name" />
                    </label>
                    </div>
      
      <div class="form-item">
       
        <input type="text" value={name} onChange={(e) => setPrenom(e.target.value)} placeholder=" Your name" />
      </div>
      <div class="form-item">
        <label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                    </label>
                  </div>
                  
      <div class="form-item">
       
        <input type="number" value={poste} onChange={(e) => setposte(e.target.value)} placeholder="Post Number" />
                  </div>
                  
      <div class="form-item">
        <input type="text" value={fax} onChange={(e) => setFax(e.target.value)} placeholder=" Fax Number" />
      </div>
     <div class="form-item">
                    <input type="number" id="nombre" name="nombre" value={year_of_ex} onChange={(event) => setNbrYears(event.target.value)} placeholder='Years of experiences' />
                  </div>
                  <br></br>
                  <div class="form-item">
                    <h6> Upload Your Dioploma </h6>
                    <input type="file" id="mon-image" name="mon-image" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
                    </div>
                  <div class="form-item"> 
                    <h6> Your Speciality</h6>
   <select id="speciality" value={Specialities} onChange={handleSpecialityChange}>
							<option value="0" selected disabled>Specialty</option>
      <option value="dermatologist">Dermatologist</option>
      <option value="cosmetic dermatologist">Cosmetic Dermatologist</option>
      <option value="dermatopathologist">Dermatopathologist</option>
      <option value="pediatric dermatologist">Pediatric Dermatologist</option>
      <option value="surgical dermatologist">Surgical Dermatologist</option>
      <option value="Mohs surgeon">Mohs Surgeon</option>
      <option value="immunodermatologist">Immunodermatologist</option>
      <option value="dermatologic oncologist">Dermatologic Oncologist</option>
      <option value="teledermatologist">Teledermatologist</option>
      <option value="dermatologic surgeon">Dermatologic Surgeon</option>
      <option value="dermatology nurse practitioner">Dermatology Nurse Practitioner</option>
                  </select>
                  </div>
                  <br></br>

<div class="form-item"> 
                   <h6> Region Where You Practice Your Job :</h6>
   
                      
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
                
                  <div class="button-panel">
      <input type="submit" class="button" title="Sign Up" value="Sign Up" onClick={handleSubmit}></input>
                    </div>
                   

      


                  </div>
                  <br>
                  </br>
                  

   
    
      </form>
    </div>
    </div>
            
          );
  }
  
export default InscriptionMedecin;