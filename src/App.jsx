import React from 'react';
import Header from './components/intro/Header';
import About from './components/intro/About';
import ProjectSection from './components/work/ProjectSection';
import Contact from './components/contact/Contact';
import Footer from './components/contact/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
