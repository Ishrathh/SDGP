import React, { useState } from 'react';
import '../css/LoginPage.css';
import axios from 'axios';
//import { login } from '../actions/user';


function LoginPage() {

  const loginUser = async () => {
    const credentials = formData;

    //Saving user to the database
    await axios.post("http://localhost:8000/user/login", credentials)
      .then((response) => {
           
        //Saving user data to local storage
        //localStorage.setItem("userName", response.data.userName);
        //localStorage.setItem("userLevel", response.data.userLevel);
      })
      .catch((error) => {
        //alert(error.response.data.message);
        console.log(error);
      });
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    loginUser();
    //return login( formData);
  }

  const [formData, setFormData] = useState({ });
  const handleChange = (id, value) => {
    setFormData({
      ...formData, 
      [id]: value
    })
  }
  
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="email" id="email" onChange={(e) => handleChange(e.target.id, e.target.value)} required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" id="password" onChange={(e) => handleChange(e.target.id, e.target.value)} required />
            <label>Password</label>
          </div>
          <div className="line"></div>
          <a href="/signup">Don't have an account? Sign up</a>
          <br />
          <input type="submit" value="Sign In" class="login-btn" /><br />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
