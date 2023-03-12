import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom/dist';
import axios from 'axios';

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

  function LoginUser() {
    //localStorage.setItem('userName', 'Guest');
    axios.get('https://localhost:44307/User/CheckLogin', {
      params: {
        emailAddress: emailData,
        password: passData
      }
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data.userId > 0) {
          localStorage.setItem('userName', response.data.firstName);
          RouteToHome();
        } else {
          localStorage.setItem('userName', 'Guest');
          alert('Please check the email and password');
        }
      })
      .catch(function (error) {
        localStorage.setItem('userName', 'Guest');
        alert(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput onChange={passChange} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
      <MDBInput onChange={emailChange} wrapperClass='mb-4' label='Password' id='form2' type='password' />

      <MDBBtn onClick={LoginUser} className="mb-4">Sign in</MDBBtn>



      <div className="text-center">
        <p> <a href="#!">Register</a></p>
        <p></p>



        </div>

    </MDBContainer>
  );
}


export default Login;