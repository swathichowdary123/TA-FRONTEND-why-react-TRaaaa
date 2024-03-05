// App.js
import React from 'react';
import './App.css'; // Import your CSS stylesheet

import Header from './components/header';
import HeroSection from './components/hero';
import AboutSection from './components/about';
import BlogSection from './components/blog';
import WorkSection from './components/work';
import ContactSection from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BlogSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
