import React, { useContext, useState } from 'react';
// import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { auth } from '../__firebase.init';
import { AuthContext } from '../AuthProvider';


const SignUp = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext)
    const [errMassage, setErrMassage] = useState('')
    const navigate = useNavigate();

    const handleSubmitBtn = (event) => {
        event.preventDefault();
        const email = (event.target.email.value)
        const password = (event.target.password.value);
        const name = (event.target.name.value);
        const photo = (event.target.photo.value);
        

        setErrMassage('');

        if(password.length < 6){
             setErrMassage('password should be more than 6 character')
             return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if(!passwordRegex.test(password)){
            setErrMassage('password must have at least one uppercase,one lowercase,one number and one special character')
            return;
        }

        createUser(email,password,name,photo)
        .then(result=>{
          
            
        toast.success('successfully create account')
            event.target.reset()
            navigate('/')

            const profile = {
                displayName: name,
                photoURL: photo
            }
            updateProfile(auth.currentUser,profile)
            .then(()=>{
                console.log('user profile');
            })
            .catch(error => console.log('user error'))
        })

        
        .catch(error=>{
            console.log("ERROR", error.massage);
        })
    } 

    const handleGoogleSign = ()=>{
        signInWithGoogle()
        .then(result=>{
            navigate('/')
        })
        .catch(error=> console.log(error.massage))
    }

    return (
        <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-indigo-100 min-h-screen flex flex-col items-center py-16">
        {/* Banner Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-700">Create an Account</h1>
          <p className="py-6 text-lg text-gray-700">
            Join us to make a positive impact! Fill in the details below to get started with your account.
          </p>
          <p className=" text-lg text-gray-700"> Already have an account? go to <span className="text-indigo-600"><Link to='/login'>Log in.</Link></span></p>
        </div>
      
        {/* Registration Form Section */}
        <div className="card bg-white w-full max-w-sm shadow-2xl rounded-xl mx-auto p-8">
          <form onSubmit={handleSubmitBtn} className="space-y-6 relative">
            
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
                required
              />
            </div>
      
            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
                required
              />
            </div>
      
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
                required
              />
            </div>
      
            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
                required
              />
              <label className="label text-sm text-indigo-600 cursor-pointer hover:underline">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
      
            {/* Error Message */}
            <div className="text-sm text-red-600">
              {errMassage}
            </div>
      
            {/* Register Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full rounded-lg py-3 text-white font-semibold transition duration-300 hover:bg-indigo-600 focus:outline-none">
                Register
              </button>
            </div>
          </form>
      
          {/* Google Sign-In Button */}
          <div>
            <button onClick={handleGoogleSign} className="btn btn-ghost w-full mt-3 bg-slate-50 rounded-2xl mb-4 py-3 flex items-center justify-center text-indigo-600 border border-indigo-300">
              <FaGoogle className="mr-3" /> Sign up with Google
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default SignUp;