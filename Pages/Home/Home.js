import React, {Component, Fragment,} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Welcome from '../../Components/Welcome/Welcome';
import Information from '../../Components/Information/Info';
import Footere from '../../Components/Footere/Footer';
import Bloc_Doctor from '../../Components/Doctor/Bloc_Doctor.js';
import Bar from '../../Components/Navvv/Bar';
import Howit from '../../Components/Howit/Howit';
import Formmedcien  from'../../Components/Formulaire/Formumedcien';
import Patient from '../../Components/Formulaire/Formulairepat';
import Liste from '../../Components/Liste/Liste.js';
import Msg from '../../Components/Mesangerie/Msg';
import Copm from '../../Components/Money/Money';
import Visit from '../../Components/Dossier/Dossier';
 class Home extends Component{
    render(){
      return (
        <>
    < Navbar/>   
    < Welcome/>   
    < Information/>
    < Howit/>   
    < Bar/>  
    < Bloc_Doctor/>
    < Footere/>
    
    
        </> 
      );
    }
}

export default Home;
