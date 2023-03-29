import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="username" required />
            <label>Username or Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className="line"></div>
          <a href="#">Don't have an account? Sign up</a>
          <br />
          <input type="submit" value="Sign In" class="login-btn" /><br />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
