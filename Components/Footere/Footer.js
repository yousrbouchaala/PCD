import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { HashLink } from "react-router-hash-link";
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsFillEnvelopeAtFill} from "react-icons/bs";
import {BsGlobe} from "react-icons/bs"
import {BsGeo} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer({ space }) {
  return (
    <>
   
      
        
 
      
      <footer className="footer-section"  id="medecinn">
        <div
          className={`footer-top background-img-1 ${
            space ? "pt-150" : "pt-60"
          }`}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <div className="footer-nav-wrap text-white" >
                  <h1 className="col" style={{marginTop:"-70px"}}> Cancer check up </h1>
                  <p className="footer" style={{marginTop:"-30px"}}>
                   Pour obtenir nos dernières recommandations, abonnez-vous 
                  </p>
                  <br></br>
                  
                  <form >
                      <input
                       
                       type='email'
                       placeholder='YOUR Email'
                       className="form-control"
                       step="0"
                       required
                       style={{width:"50%"}}
                      /> 
                    <Button type="submit" variant="button" style={{border:" white solid 1px" ,  marginTop:"10px"}}> save</Button>
                    </form>
               
                  <div className="social-list-wrap">
                    <ul className="social-list list-inline list-unstyled">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/company/justk8s/"
                          target="_blank"
                          title="JustK8s"
                        >
                          <span className="ti-linkedin footer-text"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/justk8s"
                          target="_blank"
                          title="Twitter"
                        >
                          <span className="ti-github footer-text"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white" style={{color:"hsla(30, 59%, 45%, 0.902)" , marginLeft:"-150px"}}>Sections</h5>
                      <ul className="list-unstyled">
                        
                        <li className="mb-2" >
                          <a className="footer-text" href="#home" style={{color:"BLACK" , marginLeft:"-200px"}} >
                           Home 
                          </a>
                        </li>
                        
                        <li className="mb-2">
                          <a className="footer-text" href="#work" style={{color:"BLACK" , marginLeft:"-200px"}}>
                            Info
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="footer-text" href="#medecin" style={{color:"BLACK" , marginLeft:"-180px"}}>
                          To consult a doctor
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="footer-text" href="#info" style={{color:"BLACK" , marginLeft:"-180px"}}>
                          Sensitization
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="footer-text" href="#contact" style={{color:"BLACK" , marginLeft:"-180px"}}>
                            Connexion
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-sm-6 col-md-4 col-lg-4" style={{fontSize:"19px"}}>
                    <div className="footer-nav-wrap ">
                      <h5 className="mb-3 " style={{color:"white" , marginLeft:"120px"}}>Contact</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2 d-flex align-items-center">
                          <span className="footer-text">
                            <span className="ti-location-pin " style={{marginLeft:"260px"}}></span>
                           <BsGeo/> Street of Tunis 
                            <br />
                            Sfax, Tunisia 3041
                          </span>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-mobile mr-2"></span>
                          <a className="footer-text" href="tel:+21670038285"  style={{marginLeft:"50px"}}>
                           <BsFillTelephoneFill/> +216 70 038 285
                          </a>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-email mr-2"></span>
                          <a
                            className="footer-text"
                            href="mailto:info@justk8s.com"  style={{marginLeft:"45px"}}
                          ><BsFillEnvelopeAtFill/> info@skincancer.com
                          </a>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-world mr-2"></span>
                          <a
                            className="footer-text"
                            href="http://www.justk8s.com/" style={{marginLeft:"45px"}}
                          >
                           <BsGlobe/> www.skincancer.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
          <h2 className='col1' style={{marginTop:"-5px", color:"white", marginLeft:"40px"}}>
          Get connected with
             us on social networks:
          </h2>

        <div>
          <a href='' className='me-4 text-reset'>
            <FaFacebookF style={{width:"50px" ,height:"50px", marginTop:"-20px"}} fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <BsTwitter  style={{width:"50px" ,height:"50px", marginTop:"-20px"}} fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset' >
            <BsGlobe  style={{width:"50px" ,height:"50px", marginTop:"-20px"}}fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <BsInstagram style={{width:"50px" ,height:"50px", marginTop:"-20px"}} fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <BsLinkedin  style={{width:"50px" ,height:"50px", marginTop:"-20px"}} fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <BsGithub style={{width:"50px" ,height:"50px", marginTop:"-20px"}} fab icon="github" />
          </a>
        </div>
        </section>
        </div>
      </footer>
    </>
  );
}