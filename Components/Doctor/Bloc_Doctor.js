import React from "react";
import Slider from "react-slick";

import "./Bloc_Doctor.css";

import ava01 from "../../Asset/dr_slim_kassar-min.webp";
import ava02 from "../../Asset/SOFIAN.webp";
import ava03 from "../../Asset/dr-mazen.webp";
import ava04 from "../../Asset/aaaa.jpg";

const Testimonial = () => {

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
    

    return (

<div id="medecin"  style={{marginTop:"-60px"}}>
        <Slider {...settings} >


            <div className="testimonial py-4 px-3">
           

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Dr Salim Kassar</h6>
                        <p className="section__description">Le Dr. Slim KASSAR is widely regarded as the pioneer of modern hair transplant technology, introducing the FUE technique to the public. He is internationally recognized for his work and has trained the top hair transplant doctors from around the world. Dr. Slim KASSAR studied medicine and surgery in France.
                            </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3"> Dr Sofian Ayedi </h6>
                        <p className="section__description">Dr. Sofien AYADI is a specialist in digestive surgery since 200000000007
Also he is an associate professor in visceral surgery since 2013,a former intern in bariatric surgery in Brussels in 2008 (ULB university).Completed multiple intensive courses in bariatric surgery at IRCAD (Strasbourg)
A former intern at Gustave Roussy Institute, Villejuif Paris (digestive oncologic surgery), he is registered with the Medical Association under the number 14537.
                            </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">


                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Dr Mazen Kallel </h6>
                        <p className="section__description">Dr. Mazen Kallel is a well-known specialist in gynecology, obstetrics, and infertility treatment, renowned for his dedication and professionalism. With over 13 years of experience, he has a holistic approach to treating both female and male infertility, encompassing therapeutic, clinical, and biological solutions.
                            </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">AMINI-ADLE Mona</h6>
                        <p className="section__description">Specialties: Skin cancers, Dermatological surgery, Neurofibromatosis type 1, Dermatoscopy.
                         Phone number: +216 78 78 59 96.
                           
                            </p>
                    </div>
                </div>
            </div>
        </Slider> </div>
    );
  
};

export default Testimonial;