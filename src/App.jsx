import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Banner from './components/Banner';
import OrderSection from './components/OrderSection';
import Contact from './components/Contact';


const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner/>
      <Menu />
      <OrderSection/>
      <Contact/>
    </main>
  );
};

export default App;
