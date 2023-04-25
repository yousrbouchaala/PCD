import React ,{useState}from "react";
import LOG from "../../Asset/loog1.png"
import Contact from '../Connexion1/Contact';
import { Link } from "react-router-dom";
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {BiHomeSmile} from "react-icons/bi";
import {BsGear} from "react-icons/bs";
import {AiOutlineBulb} from "react-icons/ai";
import {AiOutlineUsergroupDelete} from "react-icons/ai";
import{BiDonateHeart} from "react-icons/bi";
import './Nav.css';
function ColorSchemesExample() {
 

  return (
    <>

      <Navbar >
        <Container className="ml-auto" style={{ fontSize: "14px", padding: "0.25rem 0.5rem", lineHeight: "20px" }} >
        <Navbar.Brand   style={{fontSize:30,color:'hsla(30, 59%, 45%, 0.902)' , marginTop:"0px" ,  marginLeft:"-90px"} } href="#home"    >
          <img src={LOG}  />
          Cancer-check-up </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{height: '400%' }}>
          <Nav className="ml-auto" >
            <NavLink className="active" href="#home" style={{marginTop:"-5px",marginRight:"-11px", marginLeft:"14px"}} > <BiHomeSmile/> Home</NavLink>
            <NavLink className="in" href="#info" style={{marginTop:"-5px",marginRight:"-11px", marginLeft:"14px"}} > <BiDonateHeart/> Sensitization</NavLink>
            <Nav.Link className="hw" href="#work" style={{marginTop:"-5px" ,marginRight:"-11px", marginLeft:"14px"}} > <AiOutlineBulb/>How it works</Nav.Link>
            <Nav.Link className="med" href="#medecin" style={{marginTop:"-5px" ,marginRight:"5px", marginLeft:"14px"}} ><AiOutlineUsergroupDelete/> Our Doctors </Nav.Link>
            <Nav.Link className="med" href="#medecinn" style={{marginTop:"-5px" , marginLeft:"-11px",marginRight:"-6px"}} ><BsGear/> About us </Nav.Link>
            {/* <HashLink smooth to="#test">
               Link to Hash Fragment
            </HashLink> */}
        
            <Link to="/contact" className="buttons"  style={{ marginRight: "20px",  marginLeft: "20px" }}  >
            
              <button > CONNEXION   </button>
             
              
            </Link>
          </Nav>
         
        </Navbar.Collapse>
       
        </Container>
        
      

      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;

