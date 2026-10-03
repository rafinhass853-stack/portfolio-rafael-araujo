import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'LinkedIn', mark: 'in', url: 'https://www.linkedin.com/in/rafael-araujo1992/' },
  { label: 'GitHub', mark: 'GH', url: 'https://github.com/rafinhass853-stack' },
  { label: 'Instagram', mark: 'IG', url: 'https://www.instagram.com/rafael.araujo1992/' },
  { label: 'Facebook', mark: 'f', url: 'https://www.facebook.com/rafael.araujo.678732' }
];

export default function Contact() {
  return (
    <section id="contato" className="contact-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contato</span>
          <h2>Vamos <span className="gradient-text">conversar</span></h2>
          <p className="section-description">Estou aberto a conversas sobre oportunidades, projetos, tecnologia aplicada à logística e operações.</p>
        </div>
        <div className="contact-grid contact-grid-simple">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div><h4>Email</h4><a href="mailto:rafinhass853@gmail.com">rafinhass853@gmail.com</a></div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div><h4>Localização</h4><span>São Carlos, São Paulo, Brasil</span></div>
            </div>
            <div className="contact-cta">
              <strong>Perfil profissional</strong>
              <p>Experiência em operações logísticas + desenvolvimento de soluções digitais.</p>
              <a href="https://www.linkedin.com/in/rafael-araujo1992/" target="_blank" rel="noopener noreferrer">Abrir LinkedIn <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="contact-social-panel">
            <h3>Encontre-me online</h3>
            <p>Meus canais profissionais e projetos estão aqui:</p>
            <div className="social-links-grid">
              {links.map(({ label, mark, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-card">
                  <span className="social-mark" aria-hidden="true">{mark}</span><span>{label}</span><ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
