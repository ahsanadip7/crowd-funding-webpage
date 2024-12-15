import React from 'react';
import { FaDonate, FaHandsHelping, FaBullhorn } from 'react-icons/fa';

const HowToHelp = () => {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=How+To+Help')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">How You Can Help</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto py-12 px-4">
                <p className="text-lg text-gray-600 text-center mb-8">
                    At Gadget Heaven, every small contribution matters. Learn how you can make a difference today!
                </p>

                {/* Help Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Option 1: Donate */}
                    <div className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center">
                        <FaDonate className="text-4xl text-lime-600 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Donate</h2>
                        <p className="text-gray-600">
                            Support campaigns by making donations directly to the causes you care about.
                        </p>
                    </div>

                    {/* Option 2: Volunteer */}
                    <div className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center">
                        <FaHandsHelping className="text-4xl text-lime-600 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Volunteer</h2>
                        <p className="text-gray-600">
                            Join us as a volunteer and help organize campaigns or spread the word.
                        </p>
                    </div>

                    {/* Option 3: Spread the Word */}
                    <div className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center">
                        <FaBullhorn className="text-4xl text-lime-600 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Spread the Word</h2>
                        <p className="text-gray-600">
                            Share our campaigns on social media and let others know how they can help too!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToHelp;

