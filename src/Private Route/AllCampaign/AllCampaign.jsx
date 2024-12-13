import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';

const AllCampaign = () => {

    const campaigns = useLoaderData()

    return (
        <div>

            <div className="relative bg-gradient-to-r from-indigo-500 to-purple-700 h-64">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Explore Inspiring Campaigns</h1>
                    <p className="mt-2 text-lg md:text-xl">
                        Discover campaigns that spark change and support meaningful causes.
                    </p>
                </div>
            </div>
            
            <div className='grid md:grid-cols-2 gap-4 w-8/12 mx-auto mt-10'>
                {
                    campaigns.map(campaign => <CampaignCard
                        key={campaign._id}
                        campaign={campaign}
                    ></CampaignCard>)
                }

            </div>
        </div>
    );
};

export default AllCampaign;