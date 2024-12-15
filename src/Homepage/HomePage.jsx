import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import CampaignCard from '../Private Route/AllCampaign/CampaignCard';

const HomePage = () => {

    const campaigns = useLoaderData()
    return (
        <div>
            <Banner></Banner>

            <div
                className="relative bg-cover bg-center h-96"
                style={{
                    backgroundImage: "url('https://via.placeholder.com/1920x600?text=Welcome+to+Crowdcube')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Welcome to Crowdcube</h1>
                    <p className="text-lg md:text-xl mt-4">
                        Empowering dreams and building futures through campaigns and support.
                    </p>
                    <Link to="/howToHelp">
                        <button className="btn btn-primary mt-6">Learn How to Help</button>
                    </Link>
                </div>
            </div>

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