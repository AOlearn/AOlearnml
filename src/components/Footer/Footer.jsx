import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-border py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand and Tagline */}
                    <div className="lg:col-span-1">
                        <a href="/" className="text-dark text-2xl font-bold mb-4 inline-block">
                            AO | <span className="text-primary">Learn</span>
                        </a>
                        <p className="text-dark/60 text-sm mt-4 leading-relaxed">
                            &copy; 2024 AO | Learn Pvt. Ltd. <br />All rights reserved.
                        </p>
                    </div>
                    
                    {/* Product Section */}
                    <div>
                        <h3 className="text-dark font-semibold text-lg mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Demo
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Resources Section */}
                    <div>
                        <h3 className="text-dark font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Guides
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    API Reference
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Company Section */}
                    <div>
                        <h3 className="text-dark font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Community Section */}
                    <div>
                        <h3 className="text-dark font-semibold text-lg mb-4">Community</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Forum
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                                    Newsletter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
                    <p className="text-dark/60 text-sm mb-4 md:mb-0">
                        Designed with ❤️ for developers and AI enthusiasts
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-dark/60 hover:text-primary transition-colors duration-300">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;