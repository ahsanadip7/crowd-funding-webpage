import React, { useContext } from 'react';
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';



const AddCampaign = () => {

    const { user } = useContext(AuthContext)
    console.log(user);
    const userDetails = {
        email: `${user?.email}`,
        name: `${user?.displayName}`,
    };

    const [formData, setFormData] = useState({
        thumbnail: "",
        title: "",
        type: "personal issue",
        description: "",
        minDonation: "",
        deadline: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const type = form.type.value;
        const email = form.email.value;
        const name = form.name.value;
        const addCampaign = { thumbnail, type, title, description, minDonation, deadline, email, name }
        console.log(addCampaign);

        fetch('http://localhost:5000/campaign', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addCampaign)
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
            {/* Banner Section */}
            <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=Add+New+Campaign')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Launch Your Campaign</h1>
                    <p className="mt-2 text-lg md:text-xl">
                        Share your vision and inspire others to contribute to your journey.
                    </p>
                </div>
            </div>

            <div className="bg-gray-300 py-12">
            <div className="max-w-3xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaPlusCircle className="text-lime-600" />
                    Add New Campaign
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Thumbnail */}
                    <div>
                        <label className="block font-medium mb-2">Image/Thumbnail URL</label>
                        <input
                            type="url"
                            name="thumbnail"
                            value={formData.thumbnail}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Campaign Title */}
                    <div>
                        <label className="block font-medium mb-2">Campaign Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter campaign title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Campaign Type */}
                    <div>
                        <label className="block font-medium mb-2">Campaign Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="personal issue">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative ideas">Creative Ideas</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter campaign description"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            required
                        />
                    </div>

                    {/* Minimum Donation Amount */}
                    <div>
                        <label className="block font-medium mb-2">Minimum Donation Amount</label>
                        <input
                            type="number"
                            name="minDonation"
                            value={formData.minDonation}
                            onChange={handleChange}
                            placeholder="Enter minimum donation amount"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Deadline */}
                    <div>
                        <label className="block font-medium mb-2">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* User Email (Read Only) */}
                    <div>
                        <label className="block font-medium mb-2">User Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            readOnly
                            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* User Name (Read Only) */}
                    <div>
                        <label className="block font-medium mb-2">User Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            readOnly
                            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Add Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Add Campaign
                    </button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddCampaign;