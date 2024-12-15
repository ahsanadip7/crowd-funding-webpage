import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';
import { motion } from 'framer-motion'; // Import framer-motion

const AllCampaign = () => {

    const campaigns = useLoaderData();

    return (
        <div>
            {/* Banner Section */}
            <motion.div 
                className="relative bg-gradient-to-r from-indigo-500 to-purple-700 h-64" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Explore Inspiring Campaigns</h1>
                    <p className="mt-2 text-lg md:text-xl">
                        Discover campaigns that spark change and support meaningful causes.
                    </p>
                </div>
            </motion.div>

            {/* Campaign Grid Section */}
            <motion.div 
                className='grid md:grid-cols-2 gap-4 w-8/12 mx-auto mt-10'
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.2 }}>
                {
                    campaigns.map(campaign => (
                        <motion.div
                            key={campaign._id}
                            initial={{ opacity: 0, y: 50 }} // Start off-screen
                            animate={{ opacity: 1, y: 0 }}  // Fade in and slide up
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <CampaignCard campaign={campaign} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default AllCampaign;
