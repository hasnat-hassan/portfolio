"use client";

import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl font-bold mb-8 text-blue-400"
    >
      Let&apos;s Connect
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="grid md:grid-cols-2 gap-8"
    >
      <div>
        <p className="text-gray-300 mb-6">Feel free to reach out to discuss potential collaborations or just to say hello!</p>
        <div className="space-y-4 text-gray-300">
          <div>
            <strong className="text-blue-400">Email:</strong>
            <br />
            <a href="mailto:hasnathassan397@gmail.com" className="hover:text-blue-400 transition">
              hasnathassan397@gmail.com
            </a>
          </div>
          <div>
            <strong className="text-blue-400">WhatsApp:</strong>
            <br />
            <a href="https://wa.me/03079114060" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              03079114060
            </a>
          </div>
          <div>
            <strong className="text-blue-400">LinkedIn:</strong>
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              View Profile
            </a>
          </div>
          <div>
            <strong className="text-blue-400">GitHub:</strong>
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              View Profile
            </a>
          </div>
        </div>
      </div>
      <div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  </section>
);

export default Contact;
