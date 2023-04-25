import React,{useRef} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Contact.css";

function App() {
  const contactRef = useRef(null);
  const handleClick = () => {
    if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: "smooth" });}
  };
  return (
   
    
    <div className="containerrrrr" id="contact">
      <div>
      <Link to={"/Signin"}>
          <button style={{
            marginRight:"50px" 
          }}>Sign in </button>
      </Link>
      </div>
      <div>
      <Link to={"/Signup"}>
      <button className="button1" onClick={handleClick}>Sign up </button>
        </Link>
        </div>
     </div>
     
  );
 
}
export default App;
