import React from 'react';
import Header from './components/intro/Header';
import About from './components/intro/About';
import ProjectSection from './components/work/ProjectSection';
import Resume from './components/work/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/contact/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <ProjectSection />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
