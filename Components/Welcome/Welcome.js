import React from "react";
import './Welcome.css'
import { Link } from "react-router-dom";
const welcome =()=>{
    return(
      
        <div >
           
            <section style={{marginTop:"0px"}} id="home" >
            <div className="CC" >
              <div className="center" style={{marginTop:"-10px", }} >
                <h1 className="title" > WELCOME </h1>
                <h2 className="sub-title"  style={{ fontSize:"23px"}} >
                 Welcome to our skin cancer check-up website! Our goal is to provide you with the information and resources you need to stay informed and proactive about your skin health. 
                 Whether you're looking for advice on self-examination, or want to schedule an appointment with a dermatologist, we're here to help.
                 Thank you for visiting and taking the first step towards healthier, happier skin.    
                </h2>
                <Link to={"/contact"}>
                <button className="BUTTT" style={{ fontSize:"20px"}}>CHECK YOUR SKIN  !</button>
                </Link>
             </div>
            </div>
          </section>
        </div>
    )
}
export default welcome;