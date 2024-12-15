import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const DonatedData = () => {
    const { user } = useContext(AuthContext)
    const donation = useLoaderData()
    const userDonation = donation.filter(campaign => campaign.email === user?.email);
    console.log(userDonation);
    return (
        <div>

            {/* Banner Section */}
            <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=My+Donations+Banner')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl font-bold">Your Contributions Matter</h1>
                    <p className="text-lg mt-2">Explore the campaigns you’ve generously supported!</p>
                </div>
            </div>

            {/* Campaigns Section */}
        <div className="max-w-5xl mx-auto my-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Donation : {userDonation.length}</h1>
    
            {userDonation.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {userDonation.map((campaign, index) => (
                        <div
                            key={index}
                            className="card bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg overflow-hidden border border-gray-200"
                        >
                            {/* Campaign Thumbnail */}
                            <img
                                src={campaign.thumbnail}
                                alt={campaign.title}
                                className="w-full h-40 object-cover"
                            />
    
                            {/* Campaign Details */}
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-lime-600 mb-2">
                                    {campaign.title}
                                </h2>
                                <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                                    {campaign.description}
                                </p>
                                <div className="text-sm text-gray-600 mb-2">
                                    <p>
                                        <span className="font-semibold">Type:</span>{" "}
                                        {campaign.type}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Min Donation:</span>{" "}
                                        ${campaign.minDonation}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Deadline:</span>{" "}
                                        {campaign.deadline}
                                    </p>
                                </div>
                                <div className='flex gap-5'>
                                <Link to={`/update/${campaign._id}`}>
                                <button className="btn btn-outline btn-sm text-lime-600 border-lime-600 hover:bg-lime-600 hover:text-white mt-3">
                                    Update
                                </button>
                                </Link>

                                <button 
                                 onClick={()=> handleDelete(campaign._id)}
                                className="btn btn-outline btn-sm text-red-600 border-red-600 hover:bg-red-600 hover:text-white mt-3">
                                    Delete
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-600 text-lg">You have no donation yet.</p>
                    <Link to='/addCampaign'>
                    <button className="btn btn-primary mt-4">Create New Donation</button>
                    </Link>
                </div>
            )}
        </div>

        </div>
    );
};

export default DonatedData;