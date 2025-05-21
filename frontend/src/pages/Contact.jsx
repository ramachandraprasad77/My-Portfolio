import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("📢 Sending contact data:", formData);

    const res = await axios.post("http://localhost:3000/api/contact", formData);

    console.log("✅ API Response:", res.data);

    setResponseMessage(res.data.message);
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("❌ Error submitting contact form:", error.response ? error.response.data : error);
    setResponseMessage("Something went wrong!");
  }
};

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 border rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 text-green-600">{responseMessage}</p>
      )}
    </div>
  );
}

export default Contact;