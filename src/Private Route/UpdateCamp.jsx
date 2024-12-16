import React, { useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider';

const UpdateCamp = () => {
    const {user} = useContext(AuthContext)
    const userDetails = {
        email: `${user?.email}`,
        name: `${user?.displayName}`,
    };s
    const campaign = useLoaderData();
    const {_id,deadline,type, description,minDonation,thumbnail,title} =campaign
    console.log(campaign,_id);

    const navigate = useNavigate()

    const handleEdit = e => {
        e.preventDefault()
    
       const form = e.target;
        const deadline = form.deadline.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const email = form.email.value;
        const name = form.name.value;
        const updatedCampaign = {deadline,type, description,minDonation,thumbnail,title,email,name}
        console.log(updatedCampaign);
    
        fetch(`https://assignment-10-server-site-ten.vercel.app/campaign/${_id}`, {
            method: 'PUT',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(updatedCampaign)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  navigate('/myCampaign')
            }
        })

        
    }


    return (
       <div>
         <div className="bg-gray-300 py-12">
            <div className="max-w-3xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaPlusCircle className="text-lime-600" />
                    Update Your Campaign
                </h2>
                <form onSubmit={handleEdit} className="space-y-4">
                    {/* Thumbnail */}
                    <div>
                        <label className="block font-medium mb-2">Image/Thumbnail URL</label>
                        <input
                            type="url"
                            name="thumbnail"
                            defaultValue={thumbnail}
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
                            defaultValue={title}
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
                            defaultValue={type}
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
                            defaultValue={description}
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
                            defaultValue={minDonation}
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
                            defaultValue={deadline}
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
                        Update
                    </button>
                </form>
            </div>
            </div>
       </div>
    );
};

export default UpdateCamp;