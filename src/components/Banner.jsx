import React, { useState } from 'react';
import Bannerpng from '../assets/fruits-splash.png';
import { Fadeup } from '../utility/animation';
import { motion } from 'framer-motion';

const Banner = () => {
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const handleLearnMoreClick = () => {
    setShowSecondParagraph(true);
  };

  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
      
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={Bannerpng}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>

     
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={Fadeup(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>

          
            <motion.p
              variants={Fadeup(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Welcome to Fresh Harvest Fruit Store, your newly launched online destination for the freshest and finest quality fruits! 
              We take pride in delivering a wide variety of fruits straight to your doorstep, sourced directly from trusted farms.
            </motion.p>

           
            {showSecondParagraph && (
              <motion.p
                variants={Fadeup(0.9)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                At Fresh Harvest, we are committed to providing a seamless online shopping experience. Our platform is designed to make choosing, ordering, 
                and receiving fresh fruits as easy as possible. Whether you're stocking up on everyday essentials or planning a special treat,
                we guarantee freshness, quality, and timely delivery. Start your journey to healthier eating today—shop with us and enjoy the convenience of premium fruits delivered right to your door!
              </motion.p>
            )}

           
            {!showSecondParagraph && (
              <motion.div
                variants={Fadeup(1.1)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button
                  className="primary-btn"
                  onClick={handleLearnMoreClick}
                >
                  Learn More
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
