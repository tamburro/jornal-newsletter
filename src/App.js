import React from 'react'
import Benefits from './componentes/Benefits';
import Cards from './componentes/Cards';
import Footer from './componentes/Footer';
import Hero from './componentes/Hero';
import Navbar from './componentes/Navbar';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefits />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
