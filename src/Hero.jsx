import React from 'react';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';

const SocialIcons = {
  LinkedIn: () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C24 23.227 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  GitHub: () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22 -.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.073-1.689-.073-4.948 0-3.259.014-3.667.072-4.947C2.269 2.69 4.692.272 7.053.072 8.333.014 8.741 0 12 0c3.259 0 3.668.014 4.948.072 4.354.2 6.782 2.617 6.979 6.979.059 1.28.073 1.689.073 4.948 0 3.259-.014 3.668-.072 4.948-.2 4.354-2.618 6.78-6.98 6.98C15.668 23.986 15.259 24 12 24c-3.259 0-3.668-.014-4.948-.072-4.358-.2-6.78-2.618-6.98-6.98C.014 15.668 0 15.259 0 12c0-3.259.014-3.668.072-4.948.2-4.358 2.618-6.78 6.98-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z"/></svg>,
  Facebook: () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
};

export default function Hero() {
  return (
    <section id="topo" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge"><span className="pulse-dot"></span>Logística + Tecnologia</div>
          <h1 className="hero-title"><span>Rafael</span> <span className="gradient-text">Araujo</span></h1>
          <p className="hero-subtitle">Analista de Frotas · Logística · Tecnologia aplicada à operação</p>
          <p className="hero-description">
            Profissional de logística com mais de 7 anos de experiência, atualmente como Analista de Frotas na Eixo SP, atuando com manutenção, disponibilidade, custos e indicadores, além de desenvolvimento de soluções digitais.
          </p>
          <div className="hero-actions">
            <a href="#contato" className="btn-primary"><Mail size={18} /> Fale comigo</a>
            <a href="#projetos" className="btn-secondary">Ver projetos <ArrowDown size={18} /></a>
          </div>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/rafael-araujo1992/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn"><SocialIcons.LinkedIn /></a>
            <a href="https://github.com/rafinhass853-stack" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub"><SocialIcons.GitHub /></a>
            <a href="https://www.instagram.com/rafael.araujo1992/" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram"><SocialIcons.Instagram /></a>
            <a href="https://www.facebook.com/rafael.araujo.678732" target="_blank" rel="noopener noreferrer" className="social-link facebook" aria-label="Facebook"><SocialIcons.Facebook /></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-image-container">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQHSlY6XjNRdKg/profile-displayphoto-scale_100_100/B4DaDQqkChHwAc-/0/1790207216353?e=1792627200&v=beta&t=XXDNanbiJ3EBcxEWmomt7vFykOb_dszipld2O-gyf-g" alt="Rafael Araujo" className="profile-image" />
            <div className="profile-orb"></div>
          </div>
          <div className="floating-cards">
            <div className="float-card card-1"><span>🚛</span><div><strong>7+ anos</strong><small>em logística e transporte</small></div></div>
            <div className="float-card card-2"><span>👥</span><div><strong>150+</strong><small>motoristas sob gestão</small></div></div>
            <div className="float-card card-3"><span>💻</span><div><strong>LogTech</strong><small>tecnologia aplicada à operação</small></div></div>
          </div>
        </div>
      </div>
      <div className="hero-proof">
        <span><strong>São Carlos/SP</strong> · Interior paulista</span>
        <span><strong>Frotas</strong> · Manutenção · Custos · Indicadores</span>
        <span><strong>Stack</strong> · React · Firebase · Node · Mobile</span>
      </div>
    </section>
  );
}
