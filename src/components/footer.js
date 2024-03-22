import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div>
            <div id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3 className='heading-color'>Address</h3>
                                <p>
                                    126, Race View Tower,<br></br>
                                    Manikam lane,<br></br> 
                                    Guindy Institutional Area,<br></br>
                                    SIDCO Industrial Estate,<br></br>
                                    Guindy, Tamil Nadu<br></br><br></br>
                                    <strong>Phone:</strong> 9500434122 | 9500434122<br></br>
                                    <strong>Email:</strong> tagvcentry@gmail.com | tag@vcentry.com<br></br>
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h3 className="heading-color">Useful Links</h3><br></br>
                                <ul>
                                    <li><NavLink to="/" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Home</NavLink></li>
                                    <li><NavLink to="/courses" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Course</NavLink></li>
                                    <li><NavLink to="/skill" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Skill Enhancement</NavLink></li>
                                    <li><NavLink to="/service" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Service</NavLink></li>
                                    <li><NavLink to="/review" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Review</NavLink></li>
                                    <li><NavLink to="/concontact" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Contact Us</NavLink></li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h3 className='heading-color'>Our Services</h3><br></br>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> Full Stack Development</li>
                                    <li><i className="bx bx-chevron-right"></i> Software Testing</li>
                                    <li><i className="bx bx-chevron-right"></i> Cloud</li>
                                    <li><i className="bx bx-chevron-right"></i> Devops</li>
                                    <li><i className="bx bx-chevron-right"></i> Data Analyst</li>
                                    <li><i className="bx bx-chevron-right"></i> Data Science</li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <img src={require("../img/Logo-icon.png")} width={300}></img>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            <h5>&copy;  2020  <strong><span>Copyright: </span></strong>Slak Technologies</h5>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>




            </div >
        </div >
    );
};

export default FooterComponent;