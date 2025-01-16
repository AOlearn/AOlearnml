import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Message sent!");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <h2 className="text-4xl font-bold text-center text-white mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 mb-4 bg-zinc-900 text-white text-sm rounded border border-zinc-800 focus:outline-none focus:border-zinc-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 mb-4 bg-zinc-900 text-white text-sm rounded border border-zinc-800 focus:outline-none focus:border-zinc-500"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 mb-4 bg-zinc-900 text-white text-sm rounded border border-zinc-800 focus:outline-none focus:border-zinc-500"
                    rows="4"
                    required
                />
                <button
                    type="submit"
                    className="w-full p-4 bg-white text-black rounded font-semibold hover:bg-zinc-300 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactSection;