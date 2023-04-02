import React from 'react';
import '../css/SignupPage.css';

function SignupPage() {
  return (
    <div className="container">
      <div className="signup-box">
        <h2>Sign up</h2>
        <form>
          <div className="user-box">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="confirm-password" required />
            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
