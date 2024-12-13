import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const {_id, thumbnail, type, title, description, minDonation, deadline } = campaign;
    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={thumbnail} alt="Campaign Thumbnail" className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm text-gray-600 mb-1"><strong>Type:</strong> {type}</p>
                <p className="text-sm text-gray-600 mb-3"><strong>Details</strong>{description}</p>
                <p className="text-sm font-semibold"><strong>Minimum Donation:</strong> ${minDonation}</p>
                <p className="text-sm font-semibold mb-4"><strong>Deadline:</strong> {deadline}</p>
                <Link
                    to={`/details/${_id}`}
                    className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors duration-300"
                >
                    <p>See More</p>
                </Link>
            </div>
        </div>
    );
};

export default CampaignCard;