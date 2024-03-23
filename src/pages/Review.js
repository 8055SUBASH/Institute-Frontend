import React, { useState, useEffect } from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import axios from 'axios';

const Review = () => {

    useEffect(() => {
        showReview();
    }, []);

    const [allReviews, updateAllReviews] = useState([])

    const [reviewStore, updateReviewStore] = useState({
        Name: "",
        Email: "",
        Course: "",
        Message: ""
    })

    const [errorForm, updateErrorForm] = useState({
        Name: false,
        Email: false,
        Course: false,
        Message: false
    })

    const inputReviewValue = (event) => {
        updateReviewStore({ ...reviewStore, [event.target.id]: event.target.value });
    }

    const reviewUpdate = () => {

        updateErrorForm({
            ...errorForm,
            Name: reviewStore.Name === "" ? true : false,
            Email: reviewStore.Email === "" ? true : false,
            Course: reviewStore.Course === "" ? true : false,
            Message: reviewStore.Message === "" ? true : false
        });

        if (
            reviewStore.Name === "" ||
            reviewStore.Email === "" ||
            reviewStore.Course === "" ||
            reviewStore.Message === ""
        ) {
            // Do not submit the form if any field is empty
            return;
        }

        const url = "https://slak-institute-backend.onrender.com/api/create/review";
        axios.post(url, reviewStore)
            .then((response) => {
                console.log(response);
                alert("Review Updated");
                showReview();
            }
            )
            .catch((error) => {
                console.error(error);
            }
            )
    }


    const showReview = () => {
        const url = "https://slak-institute-backend.onrender.com/api/read/review";
        axios.get(url)
            .then((response) => {
                updateAllReviews(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const reviewList = allReviews.map((value, index) => (
        <div key={index} className='box-alignment-1'>

            <div className='icon-alignment'>
                <br></br><img width={120}  src={require("../img/Logo-icon.png")}></img>
            </div>
            <div className='content-width'>
                <br></br>
                <center><h4><strong>Name:  </strong>{value.Name}</h4><hr></hr>
                    <div className='span-alignment'>
                        <span class="d-block font-weight-bold name"><strong>Course Name and Badge No:  </strong> {value.Course}</span>
                        <span class="date text-black-50"><strong>Email ID:  </strong>{value.Email}</span>
                    </div>
                    <p class="comment-text">{value.Message}</p></center>
            </div>

        </div>
    ));

    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Review</h2>
                        <p>Voices of Satisfaction: What Our Users Are Saying. </p>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}


                {/* <!-- ======= Review  ======= --> */}
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row">
                            <div className="row mt-5">

                                <div className="col-lg-8 mt-5 mt-lg-0 container-fluid">
                                    <div className="php-email-form">
                                        <div className="php-email-form">
                                            <div className="row">
                                                <div className="form-group mt-3">
                                                    <label>Enter  Name  :</label>
                                                    <input type="text" className="form-control" id="Name" placeholder="Name" required onChange={inputReviewValue}></input>
                                                    {errorForm.Name && <span className='error-class'>Required*</span>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group mt-3">
                                                    <label>Enter E-mail Id  :</label>
                                                    <input type="text" className="form-control" id="Email" placeholder=" E-mail Id" required onChange={inputReviewValue}></input>
                                                    {errorForm.Email && <span className='error-class'>Required*</span>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group mt-3">
                                                    <label>Enter Course Name with Badge No :</label>
                                                    <input type="text" className="form-control" id="Course" placeholder=" Courses Name" required onChange={inputReviewValue}></input>
                                                    {errorForm.Course && <span className='error-class'>Required*</span>}
                                                </div>
                                            </div>
                                            <div className="form-group mt-3">
                                                <label>Enter Message  :</label>
                                                <textarea className="form-control" id="Message" rows="5" placeholder="Message" required onChange={inputReviewValue}></textarea>
                                                {errorForm.Message && <span className='error-class'>Required*</span>}
                                            </div>
                                            <div className="text-center"><button type="submit" onClick={() => reviewUpdate()}>Send</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- Review --> */}


            </main>
            {/* <!-- End #main --> */}<br></br>
            <center><h1>Our Students Reviews</h1></center>
            <div className='review-box'>


                {reviewList}


            </div>


            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Review;