import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../Private Route/AllCampaign/CampaignCard';

const HomePage = () => {

    const campaigns = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="h-48 flex flex-col items-center justify-center text-center border-b border-gray-300">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Ongoing Campaigns</h1>
                <p className="mt-2 text-lg md:text-xl text-gray-600">
                    Explore and support campaigns making a difference!
                </p>
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

export default HomePage;