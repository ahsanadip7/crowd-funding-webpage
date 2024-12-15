import React from 'react';
import { FaDonate, FaHandsHelping, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const HowToHelp = () => {
    return (
        <div>
            {/* Banner Section */}
            <motion.div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=How+To+Help')" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <motion.h1 
                        className="text-3xl md:text-5xl font-bold"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        How You Can Help
                    </motion.h1>
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="max-w-5xl mx-auto py-12 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <p className="text-lg text-gray-600 text-center mb-8">
                    At Gadget Heaven, every small contribution matters. Learn how you can make a difference today!
                </p>

                {/* Help Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Option 1: Donate */}
                    <motion.div
                        className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <FaDonate className="text-4xl text-lime-600 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Donate</h2>
                        <p className="text-gray-600">
                            Support campaigns by making donations directly to the causes you care about.
                        </p>
                    </motion.div>

                    {/* Option 2: Volunteer */}
                    <motion.div
                        className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <FaHandsHelping className="text-4xl text-lime-600 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Volunteer</h2>
                        <p className="text-gray-600">
                            Join us as a volunteer and help organize campaigns or spread the word.
                        </p>
                    </motion.div>

                    {/* Option 3: Spread the Word */}
                    <motion.div
                        className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <FaBullhorn className="text-4xl text-lime-600 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Spread the Word</h2>
                        <p className="text-gray-600">
                            Share our campaigns on social media and let others know how they can help too!
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default HowToHelp;


