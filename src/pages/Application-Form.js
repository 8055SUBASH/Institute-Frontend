import React, { useEffect, useState } from 'react';
import FooterComponent from '../components/footer';
import axios from 'axios';
import AdminHeader from '../components/admin-header';

const ApplicationForm = () => {

    
    const [formStore, updateFormStore] = useState([])

    useEffect(() => {
        showForm();
    }, []);

    const showForm = () => {
        const url = "http://localhost:5000/api/read/contact";

        axios.get(url)
            .then((response) => {
                updateFormStore(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const deleteInfo = (id) => {
        const url = "http://localhost:5000/api/delete/contact/" + id;
        axios.delete(url)
            .then((request, response) => {
                console.log(response);
                alert(" Information is deleted");
                showForm();
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const applicationMap = formStore.map((value, index) => {
        return (
            <tr key={index}>

                <td>{value.id}</td>
                <td>{value.username}</td>
                <td>{value.useremail}</td>
                <td>{value.usercourse}</td>
                <td>{value.userphoneno}</td>
                <td>{value.usermessage}</td>
                <td><button onClick={() => deleteInfo(value.id)} className='btn btn-outline-success'>Delete</button></td>

            </tr>
        )
    })

    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className='form-list container-fluid'>
                <table className="table table-hover table-success">
                    <thead >
                        <tr>
                            <th>SI. NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Phone Number</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {applicationMap}

                    </tbody>
                </table>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    );
};

export default ApplicationForm;