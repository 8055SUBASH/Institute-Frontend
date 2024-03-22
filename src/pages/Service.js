import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Services</h2>
                        <p>Empowering Success: Our Comprehensive Range of Services at Slak Technology. </p>
                    </div>
                </div><br></br><br></br>
                {/* <!-- End Breadcrumbs --> */}

                <div className='card-alignment'>
                    <div className="service-card"><img src={require("../img/experts.jpg")}></img>
                        <div className="info">
                            <h1>IT experts as Trainers</h1>
                            <p>Industry-seasoned IT experts, serving as our trainers, deliver unparalleled knowledge transfer and skill development for an exceptional learning experience.</p>

                        </div>
                    </div><br></br>
                    <div className="service-card"><img src={require("../img/lab-support.jpg")}></img>
                        <div className="info">
                            <h1>24 Hours Lab Support</h1>
                            <p>Benefit from round-the-clock lab support ensuring uninterrupted access and assistance for all your technical needs.</p>

                        </div>
                    </div><br></br>
                    <div className="service-card"><img src={require("../img/flexible-timings.jpg")}></img>
                        <div className="info">
                            <h1>Flexible Timings</h1>
                            <p>Experience the convenience of flexible timings tailored to accommodate your schedule with us.</p>

                        </div>
                    </div>
                    <div className="service-card"><img src={require("../img/preparation.jpg")}></img>
                        <div className="info">
                            <h1>Interview Preparation</h1>
                            <p>Empower your career journey with our interview preparation services, designed to enhance your confidence, skills, and readiness for success in professional interviews.</p>

                        </div>
                    </div>
                    <div className="service-card"><img src={require("../img/affordable.jpg")}></img>
                        <div className="info">
                            <h1>Affordable Fees</h1>
                            <p>Experience quality education without breaking the bank with our affordable fees.</p>
                        </div>
                    </div>
                    <div className="service-card"><img src={require("../img/assistance.jpg")}></img>
                        <div className="info">
                            <h1>Placement Assistance</h1>
                            <p>Facilitating your career journey with dedicated placement assistance for optimal professional opportunities.</p>

                        </div>
                    </div>
                </div>

                {/* <!-- ======= Why Us Section ======= --> */}
                <section id="why-us" className="why-us">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose Slak Technologies?</h3>
                                    <p>
                                        Choose Slak Technology for skill enhancement, where we merge theory with real-world application, guided by seasoned industry professionals. Our approach ensures you learn best practices and gain practical insights, fostering a dynamic and enriching learning experience tailored to the demands of the industry. Elevate your skills with us, gaining the confidence and expertise to thrive in the competitive professional landscape.
                                    </p>
                                    <div className="text-center">
                                        <Link to="/skill"><button className="more-btn btn bt-outline-light">Learn More <i className="bx bx-chevron-right"></i></button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch" >
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="fa-solid fa-id-card-clip"></i>
                                                <h4>Internship Offer</h4>
                                                <p>
                                                    Choose us for unparalleled opportunities to kickstart your career through our dynamic internships, offering hands-on experience and mentorship to fuel your professional growth.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="fa-solid fa-certificate"></i>
                                                <h4>Cerificates</h4>
                                                <p>
                                                    Choose us because we not only offer expert guidance but also provide industry-recognized certificates, validating your skills and boosting your professional credentials</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="fa-solid fa-diagram-project"></i>
                                                <h4>Live Project</h4>
                                                <p>
                                                    Choose us because we offer a unique learning experience by allowing students to work on live projects, gaining hands-on expertise and valuable insights that go beyond traditional classroom teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End .content--> */}
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Why Us Section --> */}
            </main>
            {/* <!-- End #main --> */}


            <FooterComponent></FooterComponent>

        </div>
    );
};

export default Service;