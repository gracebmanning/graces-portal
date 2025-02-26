import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <Navbar/>
      <div className="mainContent">
        <div className="contentBoxLeft">
            <h2>Let's get in touch!</h2>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/contact/thank-you"
      >
        {/* Hidden input for Netlify to detect the form */}
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              autoComplete="on"
              className="short-input"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              autoComplete="on"
              className="short-input"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
        </p>
        <p>
          <label>
            Subject:{" "}
            <input
              type="text"
              name="subject"
              className="long-input"
              onChange={handleChange}
              value={formData.subject}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              className="long-input"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}