import React from "react";
import Logo from '../../Asset/iner.png'
import Logo1 from '../../Asset/loog 2.png'
import Logo2 from '../../Asset/SATIS.png'
import Logo3 from '../../Asset/LOOG3.png'
export default function Explication() {
    
    
          
    return (
        <div className='exp' id="title1" style={{textAlign:"left"}}>
            <h4> Description for our Solution</h4>
            <p>
                The "Our Solution" page contains two main things. Firstly, a user needs to add the patient detail under the "Fill Patient Detail" section for which the inference is performed.
                Then a user needs to upload the skin lesion image. The validation is performed on the client-side using JQuery, and it will not allow the end-user to submit the detail until all the information is valid.
                The validation is performed on the client-side to reduce the server load.
                Voici l'interface d'incription :
            </p>
            <img src={Logo} alt="login" width="400" height="200"  /> 
            <p>
            The validated information is sent to the server on the "Upload" button click where the network is ready to the server. The optimised network analyses the image, returning the inference to the client 
            <img src={Logo1} alt="login" width="400" height="200" /> </p>
        <p>
            The optimised network analyses the image, returning the inference to the client.
            The inference is automatically populated in the interactive bar graph. 
            The bar graph is easy to read, and it infers the chances of having skin cancer and its type.
            The information that the end-user has inserted into the "Fill Patient Detail" section is automatically populated in the inference section for users' convenience .
            <img src={Logo2} alt="login" width="400" height="200" /> 
         </p>
         <p>
         Also, we have provided the functionality to generate the report that can be stored locally for later use  just by click on the "Generate PDF" button. 
         The PDF report includes the end-user information with the network prediction.
         Moreover, we have also thought about patient privacy, and for the same reason, none of the patient demographic and skin lesion images are stored on the server.
         The server received the patient skin lesion image and performed the inference without storing it on the server.
         <img src={Logo3} alt="login" width="400" height="200" /> 
         </p>
         <p>

         </p>

        </div>
    );
}
