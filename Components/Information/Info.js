
import React from "react";
import './Info.css';
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <>
      <section id="info"
        className="info" style={{marginTop:"-45px"}}>
        <div className="container">
            <div className="col-md-6 col-lg-5">

          <h2 className="lead" style={{marginTop:233, color:"black" }}>
           <p> Skin cancer is one of the most common forms of cancer, yet it is also one of the most preventable.By being aware of the risk factors and taking precautions, such as limiting exposure to UV radiation from the sun and tanning beds, wearing protective clothing, and regularly checking for suspicious moles, you can reduce your risk of developing skin cance.Early detection is key, so if you notice any changes in the appearance of your skin, such as a new growth or a change in an existing mole, be sure to see a doctor immediately. 
            By taking steps to protect your skin and being proactive about checking for signs of skin cancer,you can help ensure that any necessary treatments can be started as soon as possible.
            </p>  
              <Link to={"/sensabilisation"}> <button style={{ alignItems:"center" ,  marginTop: "30px"}} className="but">Learn more </button> </Link>
                
       
            </h2>
            </div>
            
           
          </div>
        
      </section>
    </>
  );
}