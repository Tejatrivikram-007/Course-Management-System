import React, { useState } from "react";
import "./contactus.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setFormData({ name: "", email: "", message: "", phoneNumber: "" });
    };

    return (
        <div className="contact-container">
            <div>
                <h2>Contact US</h2>
                <p> <i className="fas fa-map-marker-alt"></i> #384 Sai Raksha Enclave ,RR Nagar ,Bangalore</p>
                <p> <i className="fas fa-phone-alt"></i> Phone: +91 8095460172</p>
                <p> <i className="fas fa-envelope"></i>     Email: prajwalpavan01@gmail.com</p>

            </div>
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                    <input
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={5}
                        cols={45}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;