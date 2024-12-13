import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider';

const NavBar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate('/login')
            })
            .catch(error => {
                console.log(error.massage);
            })
    }

    const links = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/campaigns'><li>All Campaigns</li></NavLink>
        {
            user && <>
            <NavLink to='/addCampaign'><li>Add New Campaign</li></NavLink>
            <NavLink to='/myCampaign'><li>My Campaign</li></NavLink>
            <NavLink to='/dashboard'><li>My Donations</li></NavLink>
            </>
        }

        <NavLink to='/how-to-help'><li>“How to Help”</li></NavLink>

    </>

    return (
        <div className="navbar bg-gradient-to-r from-lime-500 via-green-400 to-lime-500 text-white p-5 shadow-lg">
            <div className="navbar-start">
                {/* Dropdown for mobile */}
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden text-white"
                        aria-label="Toggle Navigation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu text-black font-semibold px-4 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <a className="btn btn-ghost text-2xl font-bold">
                   IndiGo
                </a>
            </div>

            {/* Navigation Links for Desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-semibold text-lg">
                    {links}
                </ul>
            </div>

            {/* User Section */}
            <div className="navbar-end mr-5">
                {user ? (
                    <div className="flex items-center gap-4">
                        {/* User Profile Picture with Tooltip */}
                        <div className="relative group">
                            <img
                                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                                src={user.photoURL || "https://via.placeholder.com/40"}
                                alt={`${user.displayName || "User"}'s Profile`}
                            />
                            {/* Tooltip */}
                            <div className="absolute  left-1/2 transform -translate-x-1/2  hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg p-3">
                                {user.displayName || "User"}

                                <button
                                    onClick={handleSignOut}
                                    className="btn btn-sm ml-3 mt-2 bg-white text-lime-600 hover:bg-gray-100"
                                    aria-label="Sign Out"
                                >
                                    <FaSignOutAlt />
                                    
                                </button>
                            </div>
                        </div>
                        {/* Sign Out Button */}

                    </div>
                ) : (
                    <div>
                        {/* Login and Sign Up Links */}
                        <NavLink
                            to="/login"
                            className="font-bold hover:underline"
                            aria-label="Login"
                        >
                            Login
                        </NavLink>
                        /
                        <NavLink
                            to="/signUp"
                            className="font-bold hover:underline"
                            aria-label="Sign Up"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                )}
            </div>

        </div>

    );
};

export default NavBar;