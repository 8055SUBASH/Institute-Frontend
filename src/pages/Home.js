import React, { useState, useEffect } from 'react';

import axios from 'axios';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import CourseTrend from '../components/trend-courses-component';
import { Link } from 'react-router-dom';



const Home = () => {

    // -------------------------------------USE-EFFECT-----------------------------------------------------------------------------------
    useEffect(() => {
        loadTrend();
    }, []);
    // -------------------------------------STORAGE--------------------------------------------------------------------------------------

    const [trendRecord, updateTrendRecord] = useState([]);

    // -----------------------------------GET-COURSES------------------------------------------------------------------------------------

    const loadTrend = () => {

        const url = "https://slak-institute-backend.onrender.com/api/list/trend";

        axios.get(url)
            .then((response) => {
                updateTrendRecord(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    // ------------------------------------Mapping----------------------------------------------------------------------------------------


    const detailsTrend = trendRecord.map((value, index) => {
        return (

            <CourseTrend key={index} info={value}></CourseTrend>

        )
    })

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    });


    return (
        <div>

            <HeaderComponent></HeaderComponent>

            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Slak Technologies</h1>
                    <h2>Hands On Training Institute</h2>
                    <Link to="/contact">
                        <button className="btn-get-started btn btn-outline-primary"  ><strong>Contact Us  </strong> <i class="fa-solid fa-circle-arrow-right" style={{ color: "#ffffff", fontSize: "15px" }}></i></button>
                    </Link>
                </div>
            </section>
            {/* // <!-- End Hero --> */}

            <main id="main">


                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                                <img src={require("../img/about.jpg")} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>Slak has been established with the objective of offering superior IT training and consulting services.</h3>
                                <p className="fst-italic">
                                    Slak provides an integrated IT training and consulting services, catering to all the human resource and training requirements of a corporate since 2014. Slak focuses on providing-
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Comprehensive Talent management solutions to the customers.</li>
                                    <li><i className="bi bi-check-circle"></i>Our talent management pool has always been striving forward to bring the corporate and professionals together to a single point. </li>
                                </ul>
                                <p>
                                    We have always been victorious in what we do, because we know that having the right people in your business is crucial.
                                </p>

                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Section --> */}

                {/* <!-- ======= Counts Section ======= --> */}
                <section id="counts" className="counts section-bg">
                    <div className="container">

                        <div className="numbers-box counters ">

                            <div >
                                <div className="numbers-alignment">
                                    <span className="purecounter" class="num" data-val="15">00</span><span>+</span>
                                </div>
                                    <p>Years of Experience</p>
                            </div>
                            <div >
                                <div className="numbers-alignment">
                                    <span className="purecounter" class="num" data-val="10">00</span><span>k+</span>
                                </div>
                                    <p>Students Enrolled</p>
                            </div>
                            <div >
                                <div className="numbers-alignment">
                                    <span className="purecounter" class="num" data-val="5">0</span><span>k+</span>
                                </div>
                                    <p>Students Placed</p>
                            </div>
                            <div >
                                <div className="numbers-alignment">
                                    <span className="purecounter" class="num" data-val="150">000</span><span>+</span>
                                </div>
                                    <p>Real Time Projects</p>
                            </div>
                        </div>

                    </div>
                </section><br></br><br></br><br></br>
                {/* <!-- End Counts Section --> */}

                {/* <!-- ======= Course Includes Section ======= --> */}
                <section id="features" className="features">
                    <h1><center>Our Syllabus Includes</center></h1><br></br>
                    <div className="container" >

                        <div className="row" >
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <i className="fa-brands fa-java" style={{ color: "#ff3d3d" }}></i>
                                    <h3>Java Programming</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="fa-brands fa-js" style={{ color: "#FFD43B" }}></i>
                                    <h3>Javascript</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="fa-brands fa-python" style={{ color: "#74C0FC" }}></i>
                                    <h3>Python Programming</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="fa-brands fa-react" style={{ color: "#B197FC" }}></i>
                                    <h3>React JS</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-brands fa-angular" style={{ color: "#a22ce2" }}></i>
                                    <h3>Angular JS</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-solid fa-microscope" style={{ color: "#da1b1b" }}></i>
                                    <h3>Software Testing</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-solid fa-cloud" style={{ color: "#2ba9e9" }}></i>
                                    <h3>Cloud Technology</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-solid fa-magnifying-glass-chart" style={{ color: "#cf20c1" }}></i>
                                    <h3>Data Analyst</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-solid fa-flask" style={{ color: "#9d4a06" }}></i>
                                    <h3>Data Science</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-solid fa-infinity" style={{ color: "#ff4d00" }}></i>
                                    <h3>Devops</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-solid fa-database" style={{ color: "#59e010" }}></i>
                                    <h3>SQL Database</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="fa-brands fa-windows" style={{ color: "#f5ed0f" }}></i>
                                    <h3>Microsoft Azure</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- Course Includes Section --> */}

                {/* <!-- ======= Popular Courses Section ======= --> */}
                <section id="popular-courses" className="courses">
                    <div className="container" >

                        <div className="section-title">
                            <h2>Courses</h2>
                            <p>Popular Courses</p>
                        </div>

                        <div className="row">

                            {detailsTrend}
                            {/* <!-- End Course Item--> */}

                        </div>

                    </div>
                </section>
                {/* <!-- End Popular Courses Section --> */}


            </main>
            {/* <!-- End #main --> */}

            <FooterComponent></FooterComponent>

        </div>
    );
};

export default Home;