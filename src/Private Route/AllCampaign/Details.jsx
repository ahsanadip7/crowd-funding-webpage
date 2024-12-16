import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import Swal from 'sweetalert2';

const Details = () => {
    const campaign = useLoaderData()
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const displayName = user?.displayName
    const { deadline, type, description, minDonation, thumbnail, title } = campaign;

    const handleDonate = (e) => {

        e.preventDefault();
        const addDonation = { thumbnail, type, title, description, minDonation, deadline, email, displayName }
        console.log(addDonation);

        fetch('https://assignment-10-server-site-ten.vercel.app/donatedCollection', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addDonation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };

    return (

        <div>
            <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${thumbnail})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl font-bold">{title}</h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
                {/* Campaign Thumbnail */}
                <div className="mb-6">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-60 object-cover rounded-lg"
                    />
                </div>

                {/* Campaign Title */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

                {/* Campaign Type */}
                <p className="text-sm font-semibold text-gray-600 mb-2">
                    <span className="text-gray-800 font-bold">Type: </span>
                    {type}
                </p>

                {/* Campaign Description */}
                <p className="text-gray-700 mb-4">
                    {description}
                </p>

                {/* Minimum Donation */}
                <p className="text-lg font-semibold text-gray-800 mb-2">
                    Minimum Donation: <span className="text-lime-600">${minDonation}</span>
                </p>

                {/* Deadline */}
                <p className="text-lg font-semibold text-gray-800">
                    Deadline: <span className="text-red-500">{new Date(deadline).toLocaleDateString()}</span>
                </p>

                {/* Action Button */}
                <div className="mt-6">
                    <button
                    onClick={handleDonate} className="btn btn-primary w-full">
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;