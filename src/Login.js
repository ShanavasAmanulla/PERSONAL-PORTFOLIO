import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,

}
  from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom/dist';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  let navigate = useNavigate();
  const [emailData, SetemailData] = useState([]);
  const [passData, SetpassData] = useState([]);

  function passChange(e) { SetpassData(e.target.value); }
  function emailChange(e) { SetemailData(e.target.value); }

  function RouteToHome() {
    alert('Submitted');
    navigate('/home');
  }

  function CheckLogin() {
    axios.get('https://localhost:44307/User/CheckLogin', {
      params: {
        emailAddress: emailData,
        password: passData
      }
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data.userId > 0) {
          RouteToHome();
        } else {
          alert('Please check the email and password');
        }
      })
      .catch(function (error) {
        alert(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput onChange={emailChange} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
      <MDBInput onChange={passChange} wrapperClass='mb-4' label='Password' id='form2' type='password' />
      <div className='d-flex flex-row justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service'/>
      </div>
      <button className="btn btn-primary" onClick={CheckLogin} >Login</button>
      <div className="text-center">
        <p> <a href="#!">Register</a></p>
      </div>

    </MDBContainer>
  );
}


export default Login;