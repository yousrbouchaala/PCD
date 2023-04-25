import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav , Button  } from 'react-bootstrap';
import LO from '../../Asset/ess.png';
import "./interface.css";

import { Link } from "react-router-dom";
import { BiCalendar } from "react-icons/bi";
import {BsWechat} from "react-icons/bs";
import{BsFillBellFill} from "react-icons/bs";
import {BsFillPeopleFill} from "react-icons/bs";
import {AiOutlineFolderOpen} from "react-icons/ai";
import {BiHomeSmile} from "react-icons/bi";
import {AiOutlineDollarCircle} from "react-icons/ai";
function Interface() {
  const [DoctorName , SetDoctorName] = useState('')
  const [DoctorFamilyName, SetDoctorFamilyName] = useState('');
  const navigate = useNavigate();
    useEffect(() => {
  const fetchDoctor = async () => {
    let token = localStorage.getItem('Doctor token');

    if (token) {
      fetch('http://localhost:5000/authDoctor-endpoint', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('Response status:', response.status);
          console.log('Response headers:', response.headers);
          return response.json();
        })
        .then(data => {
          console.log('Data:', data);
          SetDoctorName(data.name);
          SetDoctorFamilyName(data.familyName);
        })
        .catch(error => console.error(error));
    } else {
      navigate('/signin');
    }
  };
  fetchDoctor();
}, []);

  const handleLogoutClick = () => {
      localStorage.removeItem('Doctor token');
      navigate('/');  
  };
    
    return(
        
<>

<Navbar expand="lg" style={{ justifyContent: "space-between" }}>
  <Container style={{ fontFamily: "var(--bs-body-font-family)", padding: "15px" }}>
    <Navbar.Brand style={{ fontSize: 40, color: "hsla(30, 59%, 45%, 0.902)", display: "inline-flex", alignItems: "center" }} href="#home">
      <img src={LO} alt="Logo" style={{ marginRight: "10px" }} />
      <span>{DoctorName} {DoctorFamilyName}</span>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" style={{ alignItems: "center" }} >
        <NavLink className="active" href="#homee"><BiHomeSmile /> Home</NavLink>
        <Nav.Link as={Link} to="/agenda" className="in" href="#agenda"><BiCalendar /> Agenda</Nav.Link>
        <Nav.Link as={Link} to="/liste-patients" className="hw" href="#pa"><BsFillPeopleFill /> Patients</Nav.Link>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Nav.Link as={Link} to="/msg" className="med" href="#msg"><BsWechat /> Messages </Nav.Link>
          <Nav.Link as={Link} to="/tar" className="comp" href="#comp" style={{ marginLeft: "70px" }}><AiOutlineDollarCircle /> Accounting </Nav.Link>
        </div>

        <Button onClick={handleLogoutClick} style={{ marginRight: "-60px", marginLeft: "10px", padding: "8px 16px" }}><BsFillBellFill /> &nbsp; &nbsp; Log Out</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div className='mede'>

              <div className="center" style={{marginTop:"-5px", }} >
                
                <h2 className="sub-title"  style={{ fontSize:"25px"}} >
              <p style={{ color: "black", fontSize: "28px", marginTop: "95px" }}>Welcome Dr {DoctorName} {DoctorFamilyName} </p>
              <br></br>
      <span style={{fontSize: "18px", fontWeight: "bold", color:"black" }}>We are honored to have you as part of our team, and we have great confidence in your expertise and dedication to fighting skin cancer. Your work is critical to the health and well-being of our patients, and we are committed to supporting you in any way we can. Together, we can make a real difference in the fight against this disease.</span>
      
                </h2>
                </div>
                
</div>
<div style={{ display:"flex"}} id='agenda'>
  <Link to={"/agenda"}>
<button className="button1" style={{marginLeft:"100px" , marginTop:"50px" , marginBlockEnd:"70px"}}> <BiCalendar style={{width:"40px" ,height:"40px", marginTop:"-10px"}} /> Agenda </button>
</Link>
<Link to={"/dossier"}>
<button className="button1" style={{marginLeft:"650px" , marginTop:"50px" , marginBlockEnd:"70px" }}><AiOutlineFolderOpen style={{width:"40px" ,height:"40px", marginTop:"-10px"}}/> Open a file</button>
</Link>
</div>


</>
 

 
  
  
 
    )
}
export default Interface ;


