import React from 'react'
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;