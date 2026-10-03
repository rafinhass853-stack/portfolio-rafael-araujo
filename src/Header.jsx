import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('topo');
  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#formacao', label: 'Formação' },
    { href: '#competencias', label: 'Competências' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    const sections = ['topo', 'sobre', 'experiencia', 'formacao', 'competencias', 'projetos', 'contato']
      .map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => { window.removeEventListener('scroll', handleScroll); observer.disconnect(); };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a className="logo" href="#topo" onClick={() => setIsMenuOpen(false)} aria-label="Rafael Araujo - início">
            <span className="logo-mark">RA</span><span className="logo-text">Rafael Araujo</span>
          </a>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} aria-label="Navegação principal">
            {navLinks.map(link => <a key={link.href} className={activeSection === link.href.slice(1) ? 'active' : ''} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</a>)}
          </nav>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </header>
      <a className={`back-to-top ${isScrolled ? 'visible' : ''}`} href="#topo" aria-label="Voltar ao topo"><ArrowUp size={18} /></a>
    </>
  );
}
