import React from 'react';
import '../css/LoginPage.css';

const handleSubmit = (e)=> {
  e.preventDefault();
  const email= emailRef.currunt.value
  const password = passwordRef.currunt.value
  //send login request if its not registerd and send
  const name = nameRef.currunt.value
  const confirmPassword = confirmPassword.currunt.value
  if (password !== confirmPassword)return dispatch({type:'UPDATE_ALERT', payload: {open:true, severity:'error', message:'Password do not match',
},
});
//send register request
}

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
          <a href="/signup">Don't have an account? Sign up</a>
          <br />
          <input type="submit" value="Sign In" class="login-btn" /><br />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
