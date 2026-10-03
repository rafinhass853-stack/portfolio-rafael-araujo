import React from 'react';
import { Truck, Code2, BarChart3, Workflow } from 'lucide-react';

const features = [
  { icon: Truck, title: 'Operação de transporte', description: 'Experiência prática com carga seca/sider, programação, disponibilidade de frota e tratativas do dia a dia.' },
  { icon: BarChart3, title: 'Indicadores & performance', description: 'Acompanhamento de KPIs, análise de desvios e uso de dados para apoiar decisões operacionais.' },
  { icon: Code2, title: 'Tecnologia aplicada', description: 'Desenvolvimento de aplicações web e mobile para aproximar informação, pessoas e operação.' },
  { icon: Workflow, title: 'Processos & melhoria', description: 'Identificação de gargalos, automações e construção de fluxos mais simples para a equipe.' }
];

export default function About() {
  return (
    <section id="sobre" className="about-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sobre mim</span>
          <h2>Do problema operacional à <span className="gradient-text">solução</span></h2>
          <p className="section-description">Minha principal combinação profissional é conhecer a operação por dentro e saber transformar essa experiência em tecnologia.</p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Sou profissional de <strong>Logística e Operações</strong>, com mais de sete anos de experiência no setor de transporte. Ao longo da carreira, atuei próximo de motoristas, frota, programação, indicadores e tratativas operacionais.
            </p>
            <p>
              Em paralelo, desenvolvo soluções digitais para problemas que encontro na prática: dashboards, automações, aplicações web/mobile, rastreamento, geolocalização e ferramentas para apoiar decisões.
            </p>
            <div className="about-stats">
              <div className="stat-item"><span className="stat-number">7+</span><span className="stat-label">anos em logística</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-number">150+</span><span className="stat-label">motoristas sob gestão</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-number">2 frentes</span><span className="stat-label">operação + tecnologia</span></div>
            </div>
          </div>
          <div className="features-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon"><Icon size={24} /></div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
