import React, { useState } from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

import axios from 'axios';

const Contact = () => {



    const [storeInput, updateStoreInput] = useState({
        username: "",
        useremail: "",
        userphoneno: "",
        usercourse: "",
        usermessage: "",
        
    })

    const [errorForm, updateErrorForm] = useState({
        username: false,
        useremail: false,
        userphoneno: false,
        usercourse: false,
        usermessage: false
    })

    const inputMessage = (event) => {
        updateStoreInput({ ...storeInput, [event.target.id]: event.target.value })
    }

    const submitMessage = () => {

        updateErrorForm({
            ...errorForm,
            username: storeInput.username === "" ? true : false,
            useremail: storeInput.useremail === "" ? true : false,
            userphoneno: storeInput.userphoneno === "" ? true : false,
            usercourse: storeInput.usercourse === "" ? true : false,
            usermessage: storeInput.usermessage === "" ? true : false
        });

        if (
            storeInput.username === "" ||
            storeInput.useremail === "" ||
            storeInput.userphoneno === "" ||
            storeInput.usercourse === "" ||
            storeInput.usermessage === ""
        ) {
            // Do not submit the form if any field is empty
            return;
        }

        const url = "http://localhost:5000/api/create/contact"; // Correct endpoint path
        axios.post(url, storeInput)
            .then((response) => {
                console.log(storeInput);
                console.log(response);
                alert("Course Request has been Sent");
    
            })
            .catch((error) => {
                console.error(error);
            });
    }

   

    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" >
                    <div className="container">
                        <h2>Contact Us</h2>
                        <p>Get in Touch: Connect with Slak Technology for Inquiries and Assistance.</p>
                    </div>
                </div><br></br>

                <section id="contact" className="contact">

                    <div className="container" >

                        <div className="row mt-5">

                            <div  className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>Near Guindy Railway Station, Guindy Institutional Area, SIDCO Industrial Estate, Guindy, Tamil Nadu 600032</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>tagvcentry@gmail.com | tag@vcentry.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+91  95004 34122</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">

                                <div className="php-email-form" >
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text"  className="form-control" id="username" placeholder="Your Name" required onChange={inputMessage}></input>
                                            {errorForm.username && <span className='error-class'>Required*</span>}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" id="useremail" placeholder="Your Email ID" required onChange={inputMessage}></input>
                                            {errorForm.useremail && <span className='error-class'>Required*</span>}
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="number" className="form-control" id="userphoneno" placeholder="Enter your Phone Number" required onChange={inputMessage}></input>
                                                {errorForm.userphoneno && <span className='error-class'>Required*</span>}
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="text" className="form-control" id="usercourse" placeholder="Enter the Course You want to Enroll" required onChange={inputMessage}></input>
                                                {errorForm.usercourse && <span className='error-class'>Required*</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" id="usermessage" rows="5" placeholder="Type the Message you want to Convey" required onChange={inputMessage}></textarea>
                                        {errorForm.usermessage && <span className='error-class'>Required*</span>}
                                    </div>
                                    <button type='submit' onClick={() => submitMessage()}>Send Message</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                <div >
                    <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.633113045697!2d80.19907265862041!3d13.006726602893641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267709aa40a7d%3A0xca348695fc512750!2sGuindy%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711094658116!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* <!-- End Contact Section --> */}
            </main><br></br>

            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Contact;