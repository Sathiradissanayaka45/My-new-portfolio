import React from 'react';
import { Element, scroller } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services'; // Import the new Services component
import './index.css';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <Header onScrollTo={scrollTo} />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="articles">
        <Articles />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}

export default App;
