import React from 'react';
import Fruit1 from "../assets/fruits/apple.png";
import Fruit2 from "../assets/fruits/orange.png";
import Fruit3 from "../assets/fruits/avocado.png";
import Fruit4 from "../assets/fruits/cherry.png";
import Fruit5 from "../assets/fruits/mango.webp";
import Fruit6 from "../assets/fruits/banana.png";
import Fruit7 from "../assets/fruits/strawberry.jpg";
import Fruit8 from "../assets/fruits/grapes.jpg";
import Fruit9 from "../assets/fruits/watermelon.jpg";
import Fruit10 from "../assets/fruits/pineapple.jpg";
import Fruit11 from "../assets/fruits/papaya.jpg";
import Fruit12 from "../assets/fruits/green grapes.webp";
import Fruit13 from "../assets/fruits/pomegranate.jpg";
import Fruit14 from "../assets/fruits/guava.jpg";
import Fruit15 from "../assets/fruits/Moozambie.jpg";
import Fruit16 from "../assets/fruits/gapple.jpg";

import { motion } from "framer-motion";

const MenusData = [
  { id: 1, title: "Fresh RED Apples", price: "Rs.60/kg", img: Fruit1, delay: 0.3 },
  { id: 2, title: "Fresh Oranges", price: "Rs.50/kg", img: Fruit2, delay: 0.6 },
  { id: 3, title: "Fresh Avocado", price: "Rs.150/kg", img: Fruit3, delay: 0.9 },
  { id: 4, title: "Fresh Cherries", price: "Rs.70/kg", img: Fruit4, delay: 1.2 },
  { id: 5, title: "Fresh Mangoes", price: "Rs.100/kg", img: Fruit5, delay: 1.5 },
  { id: 6, title: "Fresh Bananas", price: "Rs.40/kg", img: Fruit6, delay: 1.8 },
  { id: 7, title: "Fresh Strawberries", price: "Rs.250/kg", img: Fruit7, delay: 2.1 },
  { id: 8, title: "Fresh Grapes", price: "Rs.80/kg", img: Fruit8, delay: 2.4 },
  { id: 9, title: "Fresh Watermelon", price: "Rs.30/kg", img: Fruit9, delay: 2.7 },
  { id: 10, title: "Fresh Pineapple", price: "Rs.90/kg", img: Fruit10, delay: 3.0 },
  { id: 11, title: "Fresh Papaya", price: "Rs.50/kg", img: Fruit11, delay: 3.3 },
  { id: 12, title: "Fresh Green Grapes", price: "Rs.85/kg", img: Fruit12, delay: 3.6 },
  { id: 13, title: "Fresh Pomegranate", price: "Rs.120/kg", img: Fruit13, delay: 3.9 },
  { id: 14, title: "Fresh Guava", price: "Rs.60/kg", img: Fruit14, delay: 4.2 },
  { id: 15, title: "Fresh Moozambie", price: "Rs.70/kg", img: Fruit15 },
  { id: 16, title: "Fresh Green Apple", price: "Rs.140/kg", img: Fruit16 },
];

const fadeInAnimation = (delay = 0.3) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

const Menu = () => {
  return (
    <section className="bg-gradient-to-r from-green-100 to-yellow-100 py-20 px-6">
      <div className="container mx-auto text-center">
       
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {MenusData.map(({ id, title, price, img, delay = 0.3 }) => (
            <motion.div
              key={id}
              variants={fadeInAnimation(delay)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              className="text-center bg-white rounded-3xl px-4 py-2 shadow-lg flex flex-row items-center gap-3"
            >
              <img
                src={img}
                alt={title}
                className="w-[60px] mb-4 scale-125 transform translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-lg font-semibold text-secondary">{price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
