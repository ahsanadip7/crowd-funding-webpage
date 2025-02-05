import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import CampaignCard from '../Private Route/AllCampaign/CampaignCard';

const HomePage = () => {
    const campaigns = useLoaderData();

    return (
        <div>
            <Banner></Banner>

           

            <div className="h-48 flex flex-col items-center justify-center text-center border-b border-gray-300">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Ongoing Campaigns</h1>
                <p className="mt-2 text-lg md:text-xl text-gray-600">
                    Explore and support campaigns making a difference!!
                </p>
            </div>

            {/* Add animation to the campaign cards */}
            <div className='grid md:grid-cols-2 gap-4 w-8/12 mx-auto mt-10'>
                {
                    campaigns.map((campaign, index) => (
                        <motion.div
                            key={campaign._id}
                            initial={{ opacity: 0, x: 100 }} // Start from the right and invisible
                            animate={{ opacity: 1, x: 0 }}  // Fade in and slide to the original position
                            transition={{ duration: 0.8, delay: index * 0.2 }} // Adds staggered delay between cards
                        >
                            <CampaignCard
                                campaign={campaign}
                            />
                        </motion.div>
                    ))
                }
            </div>

            {/* Extra Section 1: Why Choose Us */}
            <div className="bg-gray-50 py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Crowdcube?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We provide a trusted platform where dreams are realized through collective efforts and donations.
                        Here's why thousands choose us:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-bold text-lime-600 mb-2">Transparency</h3>
                            <p className="text-sm text-gray-600">
                                Every donation is tracked and accounted for, ensuring maximum trust.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-bold text-lime-600 mb-2">Impactful Campaigns</h3>
                            <p className="text-sm text-gray-600">
                                Our platform supports campaigns that truly make a difference in people’s lives.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-bold text-lime-600 mb-2">Community Driven</h3>
                            <p className="text-sm text-gray-600">
                                Join a community of donors and volunteers working together for a better future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Section 2: Testimonials */}
            <div className="py-12 px-4 bg-gradient-to-r from-green-400 via-lime-300 to-lime-500 text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">What People Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
                            <p className="text-lg italic mb-4">
                                "Crowdcube made it possible for me to launch my dream startup. The support and donations
                                were overwhelming."
                            </p>
                            <h3 className="text-sm font-bold">- Sarah J., Startup Founder</h3>
                        </div>
                        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
                            <p className="text-lg italic mb-4">
                                "I was amazed by the transparency and impact of their campaigns. Every penny counts!"
                            </p>
                            <h3 className="text-sm font-bold">- David M., Donor</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;

