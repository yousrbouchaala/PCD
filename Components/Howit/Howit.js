import React, { useState } from "react";
import "./Howit.css";
import Page from "../Page/Pageexplicatif";
import LOG1 from "../../Asset/cappp.png";
import LOG2 from "../../Asset/capture.png";
import LOG3 from "../../Asset/id.png";
import {AiFillMessage} from "react-icons/ai"
import{BsFillPatchQuestionFill} from "react-icons/bs";
import {BsFillCalendar2DayFill} from "react-icons/bs";
export default function AccordionWithImg() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleToggle1 = () => {
    setOpen1(!open1);
  };

  const handleToggle2 = () => {
    setOpen2(!open2);
  };

  const handleToggle3 = () => {
    setOpen3(!open3);
  };

  return (
    <>
      <section
        className="download-section "  id="work"
        style={{marginLeft:"-90px"}}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                id="accordion-1"
                className="accordion accordion-faq pb-100"
               
              >
               <div className="card">
                  <div
                    className="card-header py-4"
                    id="heading-1-1"
                    data-toggle="collapse"
                    role="button"
                    onClick={handleToggle1}
                    aria-expanded={open1}
                    aria-controls="collapse-1-1"
                  >
                    <h6 className="mb-0" style={{textAlign:"center" }} >
                      <span className="ti-gallery mr-3" ></span> < BsFillPatchQuestionFill style={{marginLeft:"-130px"}} /> 
                       How get to starting?
                    </h6>
                  </div>
                  <div
                    id="collapse-1-1"
                    className={`collapse ${open1 ? "show" : ""}`}
                    aria-labelledby="heading-1-1"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body" href="heading-1-1">
                      <p>
                       <Page/>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div
                    className="card-header py-4"
                    id="heading-1-2"
                    data-toggle="collapse"
                    role="button"
                    onClick={handleToggle2}
                    aria-expanded={open2}
                    aria-controls="collapse-1-2"
                  >
                    <h6 className="mb-0">
                      <span className="ti-gallery mr-3"></span>< AiFillMessage style={{marginLeft:"90px"}}/>  How chatting
                      with a doctor?
                    </h6>
                  </div>
                  <div
                    id="collapse-1-2"
                    className={`collapse ${open2 ? "show" : ""}`}
                    aria-labelledby="heading-1-2"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body" href="heading-1-2" style={{textAlign:"left",fontSize:21}}>
                      <p>
                      If the result is serious, the patient can also consult one of the doctors listed on our website. In this case, the result in the form of a PDF is automatically sent to the chosen doctor. 
                      In addition, the patient can chat with the doctor and ask all questions related to their condition, as well as the necessary analyses or diagnoses, and the doctor will respond to these questions.
                      Also,if the result is not serious, the patient also has the option to consult a doctor to receive counseling or to visit our visibility space.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header py-4"
                    id="heading-1-3"
                    data-toggle="collapse"
                    role="button"
                    onClick={handleToggle3}
                    aria-expanded={open3}
                    aria-controls="collapse-1-3"
                  >
                    <h6 className="mb-0"  >
                    
                      <span className="ti-gallery mr-3"></span>  <BsFillCalendar2DayFill style={{marginLeft:"90px"}} />    How to schedule a consultation ?
                    </h6>
                  </div>
                  <div
                    id="collapse-1-3"
                    className={`collapse ${open3 ? "show" : ""}`}
                    aria-labelledby="heading-1-3"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body" href="heading-1-3" >
                    
                      <p>
                      The patient can view the calendar posted by the doctor to schedule an appointment based on their availability and the availability of the doctor, or call the doctor directly.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
</>
);
}