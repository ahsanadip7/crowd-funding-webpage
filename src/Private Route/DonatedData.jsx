import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DonatedData = () => {
    const donatedData = useLoaderData();
    console.log(donatedData);
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

            <div className="max-w-5xl mx-auto my-10 px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">My donations : {donatedData.length}</h1>

                {donatedData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {donatedData.map((donation, index) => (
                            <div
                                key={index}
                                className="card bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg overflow-hidden border border-gray-200"
                            >
                                {/* donation Thumbnail */}
                                <img
                                    src={donation.thumbnail}
                                    alt={donation.title}
                                    className="w-full h-40 object-cover"
                                />

                                {/* donation Details */}
                                <div className="p-4">
                                    <h2 className="text-xl font-bold text-lime-600 mb-2">
                                        {donation.title}
                                    </h2>
                                    <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                                        {donation.description}
                                    </p>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <p>
                                            <span className="font-semibold">Type:</span>{" "}
                                            {donation.type}
                                        </p>
                                        <p>
                                            <span className="font-semibold">Min Donation:</span>{" "}
                                            ${donation.minDonation}
                                        </p>
                                        <p>
                                            <span className="font-semibold">Deadline:</span>{" "}
                                            {donation.deadline}
                                        </p>
                                    </div>
                                    <div className='flex gap-5'>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-600 text-lg">You have no donations yet.</p>
                        <button className="btn btn-primary mt-4">Create New donation</button>
                    </div>
                )}
            </div>


        </div>
    );
};

export default DonatedData;