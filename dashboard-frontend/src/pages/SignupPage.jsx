import React, { useState} from 'react';
import '../css/SignupPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
function SignupPage() {

  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({});

  const handleChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    if ( formData.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    } else if ( formData.password !== formData.repassword) { 
      alert('Passwords do not match');
      return;
    } else {
      handleRegister();
      navigate('/');
    }
  }

  const handleRegister = async () => {
    const userDetails = formData;

    //Saving new user to the database
    await axios.post("http://localhost:8000/user/register", userDetails) 
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
            alert('Error occured when registering user');
        })
  }

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" required id='name' onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="email" name="email" required id='email'  onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required id='password' onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="confirm-password" id='repassword' required onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
