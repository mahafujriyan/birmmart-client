import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import SocialLogIn from './SocialLogIn';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';


const Register = () => {
 const{ createUser,user,setUser,updateUser}=useContext(AuthContext)
    const navigate=useNavigate()
    
    const[error,setError]=useState("")
    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 8;
        return hasUppercase && hasLowercase && isLongEnough;
      };

      const handleSingUp=e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

         if (!validatePassword(password)) {
          setError("Password must be at least 8 characters and include both uppercase and lowercase letters.");
          return;
        } else {
          setError("");
        }

       
        createUser(email, password)
          .then(result => {
            const user = result.user;
            return updateUser({ displayName: name, photoURL: photoUrl })
              .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoUrl });
                toast.success('Successfully Registered!')
                navigate('/');
              });
          })
          .catch(err => {
            setError(err.message);
          });

      }


    return (
        <div className=' w-11/12 mx-auto flex justify-center'>
           <Helmet>
        <title>Register|Brimmart  </title>
      </Helmet>
            <form onSubmit={handleSingUp}>
                <h1 className="text-4xl font-bold">Register Your Now</h1>
    <fieldset className="fieldset  ">
        {/* name */}
        <label className="label">Name</label>
        <input type="text" 
        className="input" 
        placeholder="Your name"
        required
        name='name' />
       
        {/* Photo url */}
        <label className="label">Photo URl</label>
        <input type="text"
         className="input"
          placeholder="Photo URl"
          name='photoUrl'
          required />
        {/* email */}
      <label className="label">Email</label>
      <input type="email"
       className="input"
        placeholder="Email"
        name='email'
        required />
      {/* password */}
      <label className="label">Password</label>
      <input type="password"
       className="input"
        placeholder="Password" 
        name='password'
        required />
        
          {error && <p className="text-error text-xs">{error}</p>}

      <button className="btn btn-neutral mt-4 p-2">Register</button>
      <p className='py-2 text-accent text-xl'>Already  have an account? <span className='text-center text-red-700'><Link to='/singIn'  >Login</Link></span> </p>

      <SocialLogIn></SocialLogIn>
    </fieldset>
    
            </form>
        </div>
    );
};

export default Register;