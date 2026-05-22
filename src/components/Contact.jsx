import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      alert("Backend server not running");

    }

  };

  return (

    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#111827] p-10 rounded-3xl w-full max-w-2xl border border-zinc-800"
      >

        <h2 className="text-5xl font-bold text-center mb-10">

          Contact{" "}

          <span className="text-cyan-400">
            Me
          </span>

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-[#0b1120] rounded-xl outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-[#0b1120] rounded-xl outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-[#0b1120] rounded-xl outline-none h-40"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition-all"
          >

            Send Message

          </button>

        </form>

      </motion.div>

    </section>
  );
}

export default Contact;