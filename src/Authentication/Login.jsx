import React, { useContext, useRef, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaGoogle, FaEyeSlash } from 'react-icons/fa';
import { auth } from '../__firebase.init';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const handleLogInBtn = (event) => {
        event.preventDefault();
        const email = (event.target.email.value)
        const password = (event.target.password.value);
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                navigate('/')

                event.target.reset()

            })
            .catch(error => console.log(error.massage) )
    }

    const handleForgetBtn = () => {

        const email = emailRef.current.value;
        if (!email) {
            errorMassage = 'please enter a valid email'
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('password reset email is sent to your email address')
                })
        }
    }

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(result => {
                navigate('/')
            })
            .catch(error => console.log(error.massage))
    }

    return (
        <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-indigo-100 min-h-screen flex flex-col items-center py-16">
            {/* Banner Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-indigo-700">Welcome Back!</h1>
                <p className="py-6 text-lg text-gray-700">
                    Log in to your account to access your personalized dashboard, manage your profile, and stay updated with the latest campaigns.
                </p>
                <p className="text-sm pb-10 text-gray-600">
                    Don’t have an account yet?{" "}
                    <span className="text-indigo-600">
                        <Link to="/signUp">Sign up now</Link>
                    </span>{" "}
                    to join our community and make a difference! Or back to <span className="text-indigo-600">
                    <Link to="/">Home</Link>
                </span>{" "}
                </p> 
            </div>

            {/* Login Form Section */}
            <div className="card bg-white w-full max-w-sm shadow-2xl rounded-xl mx-auto p-8">
                <form onSubmit={handleLogInBtn} className="space-y-6 relative">

                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
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
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
                            required
                        />

                        <label onClick={handleForgetBtn} className="label text-sm text-indigo-600 cursor-pointer hover:underline">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Login Button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full rounded-lg py-3 text-white font-semibold transition duration-300 hover:bg-indigo-600 focus:outline-none">
                            Login
                        </button>
                    </div>
                </form>

                {/* Google Sign-In Button */}
                <div>
                    <button onClick={handleGoogleSign} className="btn btn-ghost w-full mt-3 bg-slate-50 rounded-2xl mb-4 py-3 flex items-center justify-center text-indigo-600 border border-indigo-300">
                        <FaGoogle className="mr-3" /> Sign in with Google
                    </button>
                </div>

                {/* Password Visibility Toggle */}
                <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-xs absolute right-10 bottom-[225px] text-indigo-600"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>

    );
};

export default Login;