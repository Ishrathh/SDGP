import React, { useState } from 'react';
import '../css/LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ });

  const loginUser = async () => {
    const credentials = formData;

    //Saving user to the database
    await axios.post("http://localhost:8000/user/login", credentials)
      .then((response) => {
           console.log(response.data);

        //Saving user data to local storage
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("addictionLevel", response.data.addictionLevel);
        localStorage.setItem("email", response.data.email);
      })
      .catch((error) => {
        alert("Invalid email or password");
        console.log(error);
      });
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    loginUser();
    navigate('/dashboard');
  }

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
          <input type="submit" value="Sign In" className="login-btn" /><br />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
