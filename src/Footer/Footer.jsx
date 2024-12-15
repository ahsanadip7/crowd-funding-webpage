import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        {/* Logo & Description */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">CrowdCube</h2>
                            <p className="text-gray-400">
                                Empowering dreams through crowdfunding. Join us to create and support campaigns that make a difference.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline text-gray-400">Home</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/about" className="hover:underline text-gray-400">About Us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/contact" className="hover:underline text-gray-400">Contact</a>
                                </li>
                                <li>
                                    <a href="/campaigns" className="hover:underline text-gray-400">Campaigns</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="w-full md:w-1/3">
                            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <span>📧 Email:</span> support@Crowdcube.com
                                </li>
                                <li className="mb-2">
                                    <span>📞 Phone:</span> +123 456 7890
                                </li>
                                <li>
                                    <span>📍 Address:</span> 123 Campaign Street, Startup City, USA
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Crowdcube. All rights reserved.</p>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Footer;