import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import auth from '../../Firebase/firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';
import SocialLogIn from './SocialLogIn';
import { Helmet } from 'react-helmet-async';

const SingIn = () => {
      const { singInUser } = useContext(AuthContext); 
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef=useRef()

//   handle log In 
const handleLogIn=e=>{
       e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

     singInUser(email,password)
       .then(result=>{
        console.log(result)
        toast.success('Successfully logIn!')
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });

       })
       .catch(error=>{
        console.log(error)
       })
}

// forgot password 
 const handleForgetPassword=()=>{
    console.log(emailRef.current.value)
    const email=emailRef.current.value
    sendPasswordResetEmail(auth, email)
    .then(() => {
     alert("A password reset email has been sent to you email")
    })
    .catch((error) => {
     setError(error.message)
     
    });

  }

    return (
       <div className='flex justify-center w-11/12 mx-auto '>
       <Helmet>
          <title>SingIn|Brimmart  </title>
        </Helmet>

            <div className="hero ">
 
    <div className="card bg-base-100 w-11/12 mx-auto shrink-0 shadow-2xl my-5">
      <form onSubmit={handleLogIn} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" 
          className="input" 
          placeholder="Email"
          name='email'
          ref={emailRef}
          required />
          <label className="label">Password</label>
          <input type="password"
           className="input" 
           placeholder="Password" 
           name='password'
           required/>
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='py-2 text-accent text-xl'>Don't you have any account? <span className='text-center text-secondary'><Link to='/register'  >Register</Link></span> </p>
          <div className='text-center'>
            <SocialLogIn></SocialLogIn>
           
          
          </div>
          {error && <p className="text-error text-sm mt-2">{error}</p>}

        </fieldset>
      </form>
    </div>
  </div>
</div>
            
      
    );
};

export default SingIn;