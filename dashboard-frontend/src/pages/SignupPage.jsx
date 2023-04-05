import React, {useRef} from 'react';
import '../css/SignupPage.css';


const handleSubmit = (e)=> {
  //e.preventDefault();
  //const email= emailRef.current.value
  //const password = passwordRef.current.value
  //const name = nameRef.current.value
  //const confirmPassword = confirmPassword.current.value
  //if (password !== confirmPassword) 
  //return dispatch({
  //  type:'UPDATE_ALERT', 
  //  payload: {
  //    open:true, 
   //     severity:'error', 
//message:'Passwords do not match',
   //   },
   // });
  //  register({name, email, password}, dispatch);
  }
  
  function SignupPage() {
  //const nameRef = useRef();
  //const emailRef = useRef();
  //const passwordRef = useRef();
  //const confirmPasswordRef = useRef();
  return (
    <div className="container">
      <div className="signup-box">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" required />
            <label>Name</label>
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
