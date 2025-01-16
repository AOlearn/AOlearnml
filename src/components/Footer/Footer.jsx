import React from 'react';

const Footer = () => {
    return (
        <div className='relative'>
            <hr className='h-[1px]' />
            <footer className="bg-gradient-to-b from-orange-900/30 to-black border-t border-zinc-800 text-white p-10 md:py-16">
                <div className="max-w-5xl m-auto relative z-30">
                    <div className="flex flex-col md:flex-row justify-between">
                        {/* Logo and Tagline */}
                        <div className="mb-10 md:mb-0 md:w-1/3 text-center md:text-left">
                            <a href="/" className="text-white text-2xl font-bold mb-4 inline-block">
                                AO | Learn.
                            </a>
                            <p className="text-zinc-500 text-sm leading-loose">&copy; 2024 AO | Learn. Pvt. Ltd. <br />All rights reserved.</p>
                        </div>
                        {/* Product Section */}
                        <div className="mb-8 md:mb-0 md:w-1/6 text-center md:text-left">
                            <h3 className="text-white font-bold text-base md:text-lg mb-4">Product</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Features</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Pricing</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Integrations</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Demo</a></li>
                            </ul>
                        </div>
                        {/* Resources Section */}
                        <div className="mb-8 md:mb-0 md:w-1/6 text-center md:text-left">
                            <h3 className="text-white font-bold text-base md:text-lg mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Templates</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Blog</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Guides</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">API Reference</a></li>
                            </ul>
                        </div>
                        {/* Company Section */}
                        <div className="mb-8 md:mb-0 md:w-1/6 text-center md:text-left">
                            <h3 className="text-white font-bold text-base md:text-lg mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">About Us</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Careers</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Press</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Contact</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Security</a></li>
                            </ul>
                        </div>
                        {/* Community Section */}
                        <div className="mb-8 md:mb-0 md:w-1/ text-center md:text-left">
                            <h3 className="text-white font-bold text-base md:text-lg mb-4">Community</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Forum</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Support</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Events</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Newsletter</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Discord</a></li>
                                <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition duration-300">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="pointer-events-none absolute z-10 inset-y-0 left-0 w-1/2 md:w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute z-10 inset-y-0 right-0 w-1/2 md:w-1/4 bg-gradient-to-l from-black"></div>
        </div>
    );
};

export default Footer;