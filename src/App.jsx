import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import CareerPlus from './CareerPlus';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import OnlineVisitors from './OnlineVisitors';
import VisitsDashboard from './VisitsDashboard';
import './App.css';

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main><Hero /><About /><Experience /><CareerPlus /><Skills /><Projects /><Contact /></main>
      <Footer />
      <OnlineVisitors />
    </div>
  );
}

export default function App() {
  return window.location.pathname === '/admin/visitas' ? <VisitsDashboard /> : <Portfolio />;
}
