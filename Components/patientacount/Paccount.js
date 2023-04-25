import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { event } from 'jquery';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
function Paccount() {
  const [PatientName , SetPatientName] = useState('')
  const [doctor, setEmailDoctor] = useState('');
  const [isPainful, setIsPainful] = useState('');
  const [duration, setDuration] = useState('');
  const [FullName, setFullName] = useState(''); 
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [anatomicalSite, setAnatomicalSite] = useState('');
  const [result, setResult] = useState('');
  const [phone, setphone] = useState([]);
  const navigate = useNavigate();
  const [image, setimage] = useState([]);
   const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const handleAlert = (message, type) => {
    setMessage(message);
    setType(type);
  };

  const handleAlertClose = () => {
    setMessage('');
    setType('');
  };
  // submit when choosing the doctor 
 const handleFormSubmit = async (event) => {
  event.preventDefault(); // prevent default form submission behavior

   const formData = new FormData();
  // create new FormData object
   formData.append('FullName', FullName); 
  formData.append('doctor', doctor); // add doctor email to form data
  formData.append('phone', phone); // add phone number to form data
  formData.append('pdf', file); // add file to form data

  try {
    const response = await fetch('http://localhost:5000/patient/choose-doctor', {
      method: 'POST',
      body: formData, // pass the form data as the request body
    });

    if (!response.ok) {
      throw new Error('Failed to submit form'); // throw an error if the request fails
    }

    const data = await response.json(); // parse the response body as JSON
    console.log(data); // log the response data
    setphone(''); 
    setEmailDoctor(''); 
    setFile(null); 
    setFullName(''); 
  } catch (error) {
    console.error(error); // log any errors that occur
  }
};


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
   
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleDoctorChange = (event) => {
    setEmailDoctor(event.target.value)
  }

 const handleFileChange = (event) => {
    setFile(event.target.files[0]);
 };
  const handleSend = (event) => {

    
  }
  // verifier l'authetification
   
  useEffect(() => {
    const fetchPatient = async () => {
      let token = localStorage.getItem('token');
     
     
      if (token) {
        fetch('http://localhost:5000/auth-endpoint', {
  method: 'GET', 
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => response.json())
.then(data => {
 
  
  console.log(data)
  console.log(data.name)
  SetPatientName(data.name)
  console.log(PatientName)
})
.catch(error => console.error(error));
      }
      else {
        navigate('/signin'); 
      }
    };
    fetchPatient();
  }, []);
   
  // load all the doctors email in the data base
 
  
useEffect(() => {
    async function fetchDoctors() {
      const response = await fetch("http://localhost:5000/doctoremails"); // replace with your server endpoint
      const data = await response.json();
      console.log(data); 
      console.log(data.emails)
      setDoctors(data.emails);
      console.log(doctors); 
    }
    fetchDoctors();
}, []);
   useEffect(() => {
  console.log("doctors: ", doctors);
  }, [doctors]);
 

  
  const handleLogoutClick = () => {
      localStorage.removeItem('token');
      navigate('/');  
  };
 
 
  const handleReset = () => {
    setName('');
    setAge('');
    setGender('');
    setAnatomicalSite('');
    setResult('');
    setFile('');
    setphone('');
    }; 
   

  

 
  return (
    <Container className="py-4">
      <div> welcome {PatientName}</div>
     <div></div>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Choose a Doctor</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleFormSubmit}>
               
                <Form.Group>
                <Form.Label>Full Name </Form.Label>
  <Form.Control type="String" value={FullName} onChange={(e) => setFullName(e.target.value)} />
</Form.Group>
              <Form.Group>
  <Form.Label>Your phone</Form.Label>
  <Form.Control type="tel" value={phone} onChange={(e) => setphone(e.target.value)} />
</Form.Group>
  <Form.Group>
      <Form.Label>Doctor</Form.Label>
      <Form.Select value={doctor} onChange={handleDoctorChange}>
        <option>Select a Doctor</option>
        {doctors.map((docto) => (
          <option key={docto} value={docto} onChange={handleDoctorChange} >
            {docto}
          </option>
          
        ))}
      </Form.Select>
    </Form.Group>

                <Form.Group>     
                <Form.Label>Upload your PDF </Form.Label>
                 <Form.Control type="file" onChange={handleFileChange} />
                 </Form.Group>
          <br></br>
                <Button type="submit" variant="primary" onClick={() => handleAlert('Successfully sent!', 'success')} > Send  </Button>
             
               


              </Form>
            
      
            </Card.Body>
          </Card>
        </Col>

      <div>
      {message && (
        <div className={`alert alert-${type} alert-dismissible`} role="alert" style={{ maxWidth: '640px' }} >
          <div>{message}</div>
          <button type="button" className="btn-close" onClick={handleAlertClose}></button>
        </div>
      )}
      
    </div>
         
        
  
    
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Check for Cancer</h5>
            </Card.Header>
            <Card.Body>
                          <Form onSubmit={handleFormSubmit}>


                          <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder=" Your name" required value={name} onChange={handleNameChange}  />
                              </Form.Group>
                  
                                 <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder=" Your age" required value={age} onChange={handleAgeChange}  />
                              </Form.Group>
                              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select required value={gender} onChange={(e) => setGender(e.target.value)} >
                  <option value="">Choose gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
                              </Form.Group>
                <Form.Group controlId="formSite">
  <Form.Label>Anatomical site</Form.Label>
  <Form.Select required value={anatomicalSite} onChange={(e) => setAnatomicalSite(e.target.value)}>
    <option value="">Select an anatomical site</option>
    <option value="Face">Face</option>
    <option value="Neck">Neck</option>
    <option value="Shoulder">Shoulder</option>
    <option value="Chest">Chest</option>
    <option value="Back">Back</option>
    <option value="Arm">Arm</option>
    <option value="Leg">Leg</option>
    <option value="Other">Other</option>
  </Form.Select>
</Form.Group>
                             <Form.Group controlId="formPain">
  <Form.Label>Is the spot painful?</Form.Label>
  <Form.Select required value={isPainful} onChange={(e) => setIsPainful(e.target.value)}>
    <option value="">Select an option</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </Form.Select>
</Form.Group>

<Form.Group controlId="formDuration">
  <Form.Label>How long has the spot been present?</Form.Label>
  <Form.Select required value={duration} onChange={(e) => setDuration(e.target.value)}>
    <option value="">Select a duration</option>
    <option value="2 days">2 days</option>
    <option value="6 days">6 days</option>
    <option value="15 days">15 days</option>
    <option value="More than 15 days">More than 15 days</option>
  </Form.Select>
</Form.Group>

       
                             
                   <Form.Group>
                  <Form.Label>Upload a Photo</Form.Label>
                  <Form.Control type="file" name='receipt' onChange={handleFileChange} />
                </Form.Group>
                <br></br>
                              <Button type="submit" variant="primary">Get Result &nbsp;</Button>
                              <Button variant="secondary" className="ml-2" onClick={handleReset}>
                  Reset
                </Button>
              </Form>
            </Card.Body>
            {image && (
              <Card.Footer>
              <Button onClick={generatePDF}>Generate PDF</Button>
              </Card.Footer>
)}
        

          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button onClick={handleLogoutClick} variant="danger">Log Out</Button>
        </Col>
       
      </Row>
    </Container>
  );
}

export default Paccount ;   