import React, {useState, useEffect} from 'react';

import axios from 'axios';



import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import CourseComponent from '../components/course-component';







const Courses = () => {


    // -------------------------------------USE-EFFECT-----------------------------------------------------------------------------------
    useEffect(() =>{
        loadDetails();
    }, []);
    // -------------------------------------STORAGE--------------------------------------------------------------------------------------
   
    const [detailRecord, updateDetailRecord] = useState ([]);

    // -----------------------------------GET-COURSES------------------------------------------------------------------------------------

    const loadDetails = () => {

        const url ="http://localhost:5000/api/list/courses";

        axios.get(url)
        .then((response) => {
            updateDetailRecord(response.data);
            
        })
        .catch((error) => {
            console.log(error); 
        })

    }

    // ------------------------------------Mapping----------------------------------------------------------------------------------------


    const detailsList = detailRecord.map((value, index) => {
        return(

            <CourseComponent key={index} info={value}></CourseComponent>
            
        )
      })

    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main" data-aos="fade-in" className="aos-init aos-animate">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Courses</h2>
                        <p>
                            Explore Cutting-edge Courses at Slak Technology. Elevate your skills with our diverse range of tech courses. Unlock opportunities for growth and innovation. Join Slak Technology for a transformative learning experience.</p>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --></main> */}


                {/* <!-- ======= Courses Section ======= --> */}
                <section id="courses" className="courses">
                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                           
                           {detailsList}
                           
                        </div>

                    </div>
                </section>
                {/* <!-- End Courses Section --> */}

            </main>
            {/* <!-- End #main --> */}



            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Courses;