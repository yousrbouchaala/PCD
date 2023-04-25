import "./interfacepa.css"
import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import "./Bloc_Doctor.css";
import ava01 from "../../Asset/slimo.jpg";
import ava02 from "../../Asset/SOFIAN.webp";
import ava03 from "../../Asset/dr-mazen.webp";
import ava04 from "../../Asset/aaaa.jpg";
import {Navbar ,NavLink , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import {FaPortrait} from "react-icons/fa";
import {BsPersonFillCheck} from "react-icons/bs";
import{BsFillBellFill} from "react-icons/bs";
import {FaUserMd} from "react-icons/fa";
import {AiOutlineFolderOpen} from "react-icons/ai";
import {BiHomeSmile} from "react-icons/bi";
import {VscAccount} from "react-icons/vsc";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
function Interface() {
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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
   
 
  const Alldoctors = [
    {
      name: "Dr Sana ENNOURI EP SELLAMI",
      specialty: "Specialist in Medical Oncolog",
      image: "https://imagecdn.med.ovh/unsafe/130x130/filters:format():quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/217198_dr-sana-ennouri-ep-sellami_1664125876_1543_1612.jpg",
      description: "Diploma in Clinical Oncology (Gustave Roussy Institute),Interuniversity Diploma in Oncology,Gynecological and Breast Oncology Diploma (University of Paris)Diploma in ORL Oncology,diploma in Tumors of the Locomotor System,ESMO Examination Certificates,Address Route El Ain km 2, Medical Pole Building (opposite El Alya Clinic), 3000, Sfax, Tunisia.,Tel: +216 74 455 125 ,Mobile: +216 25 453 10 ,Email: sanaennouri@live.fr"
    },
    {
      name: "Dr.Sofien AYADI",
      specialty: "Digestive surgery since 2007.",
      image: " https://www.drsofienayadi.com/wp-content/uploads/2022/03/dr-ayadi-sofiene-chirurgie-obesite-tunisie.jpg",
      description: "He has completed intensive training courses in bariatric surgery at IRCAD (Strasbourg) and was a former intern in bariatric surgery at ULB University in Brussels in 2008. He was also a former intern at Gustave Roussy Institute, Villejuif Paris, in digestive oncological surgery. With a registration number of 14537 in the order of physicians, he is recognized for his expertise in the field of digestive and visceral surgery."},
    {
      name: "Dr Hatem Bouzaiene",
      specialty: "Professor in Cancer Surgery, Salah Azaiez Institute, Faculty of Medicine of Tunis..",
      image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2020/11/hatembouzien.jpg?fit=850%2C491&ssl=1",
      description: "Dr. John Doe is a renowned cardiologist with over 20 years of experience in the field. He has published numerous papers on heart disease and has been recognized for his contributions to the field. He is known for his patient-centered approach and his ability to explain complex medical concepts in a way that is easy for patients to understand.",
    },
   
  ];


   
    
    return(
        
<>
<div className="ff">
<Navbar expend="lg">
  <Container style={{padding:"16px"}}>
  <Navbar.Brand   style={{fontSize:35, color:'hsla(30, 59%, 45%, 0.902)', marginTop:"-5px" } } href="#home"    >
    <VscAccount style={{marginRight:"20px" , marginTop:"-5px" }} />
     {PatientName}</Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="ml-auto" >
      <NavLink className="active" href="#homee" style={{marginTop:"-10px" , marginLeft:"10px"}}> <BiHomeSmile /> Home</NavLink>
      <Nav.Link className="in" href="#maladie" style={{marginTop:"-10px" ,marginLeft:"10px"}}> <FaPortrait/> Check for Cancer</Nav.Link>
      <Nav.Link  className="hw" href="#medecin" style={{marginTop:"-10px", marginLeft:"15px"}}><FaUserMd/> Our doctors</Nav.Link>
      <Nav.Link  className="med" href="#choose" style={{marginTop:"-10px" , marginLeft:"15px"}}> <BsPersonFillCheck/>Choose a doctor </Nav.Link>
              
                                <Button onClick={handleLogoutClick}  style={{ marginRight: "-70px",  marginLeft: "90px" }}><BsFillBellFill />  &nbsp;  &nbsp; Log Out</Button>
      </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
<div className="AA">
                    <div className="center" style={{ marginTop: "-5px", }} >
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                <h1 className="title" > WELCOME ! </h1>
                <h2 className="sub-title"  style={{ fontSize:"25px"}} >
                <p style={{color:"black" ,fontSize:"28px" ,marginTop:"15px"}}>Your skin is your lifelong coat. Take care of it, examine it regularly, treat it well and it will protect you forever.</p>
      
      
                </h2>
                </div>
                </div>
                <div id="photo"> 
<section id="maladie" >
<Col md={6} >
          <Card >
            <Card.Header  style={{backgroundColor:"#d3a573"}}>
              <h5 >Check for Cancer</h5>
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
                              <Button type="submit" variant="button" style={{backgroundColor:"#d3a573"}} >Get Result &nbsp;</Button>
                              
                              <Button variant="secondary" className="ml-2" style={{marginLeft:"10px"}} onClick={handleReset}>Reset</Button>
              </Form>
            </Card.Body>
            {image && (
              <Card.Footer>
              <Button type="submit" variant="button" style={{backgroundColor:"#d3a573"}}>Generate PDF</Button>
              </Card.Footer>
)}
      </Card>
        </Col>
        </section>
        {/* <div id="medecin">
      <h1>Our Doctors</h1>
      <Row>
        {doctors.map((doctor) => (
          <Col  md={4}>
            <div className="card">
              <img src={doctor.image} className="card-img-top" alt={doctor.name} style={{width:"50%"}} />
             
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.specialty}</p>
                <p className="card-text">{doctor.description}</p>
              </div>
            </div>
            </Col>
            
        ))}
      </Row>
    </div> */}
    <Row>
        <section id="choose">
        <Col md={6}>
          <Card  >
            <Card.Header style={{backgroundColor:"#d3a573"}}>
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
                <Button type="submit" variant="button" style={{backgroundColor:"#d3a573"}} onClick={() => handleAlert('Successfully sent!', 'success')}  > Send  </Button>
             
               


              </Form>
            </Card.Body>
          </Card>
                            </Col>
                            <br></br>
                            
    
                        </section>
                          <div >
      {message && (
        <div className={`alert alert-${type} alert-dismissible`} role="alert" style={{ maxWidth: '750px' , marginLeft: '365px'}} >
          <div>{message}</div>
          <button type="button" className="btn-close" onClick={handleAlertClose}></button>
        </div>
      )}
      
    </div>
                </Row>
                 
                    </div>
</div>

</>
    )
}
export default Interface ;


