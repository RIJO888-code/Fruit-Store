import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-green-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl font-bold text-gray-800 uppercase pb-8"
        >
          Contact Us
        </motion.h1>

        <div className="bg-white p-8 rounded-xl shadow-xl mb-10 mx-auto w-full max-w-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-800">Emergency Call</h2>
          <p className="text-xl text-gray-600 mt-4">For immediate assistance, call us at:</p>
          <p className="text-2xl font-bold text-red-600 mt-2">+91 123 456 7890</p>
        </div>

        <div className="text-center mb-10">
          <p className="text-lg text-gray-700">
            At Fresh Fruits, we take pride in providing the finest, freshest fruits straight from the farm to your table. With over a decade of expertise in sourcing and distributing top-quality produce, we are committed to delivering a wide range of fruits to meet all your needs. Our journey has been one of steady growth and innovation, with a focus on maintaining freshness and sustainability in every step of the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Services Box */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-3"
              >
                <span className="text-green-600">✔</span>
                <span>Fresh Fruit Delivery</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-3"
              >
                <span className="text-green-600">✔</span>
                <span>Emergency Fruit Supplies</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-3"
              >
                <span className="text-green-600">✔</span>
                <span>Customized Fruit Baskets</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-3"
              >
                <span className="text-green-600">✔</span>
                <span>Wholesale Fruit Supplies</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-3"
              >
                <span className="text-green-600">✔</span>
                <span>Seasonal Fruit Recommendations</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Form Box */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg border border-gray-300 mt-2 focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg border border-gray-300 mt-2 focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 mt-2 focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
