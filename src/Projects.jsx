import React from 'react';
import { Smartphone, Layers3, Truck, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'VaptVupt',
    subtitle: 'Plataforma de entregas para lojas e motoboys',
    description: 'Ecossistema inspirado em apps de delivery, com painel administrativo, operação de lojas, fluxo de motoboys, geolocalização, rastreamento e regras de tarifação.',
    tags: ['React', 'Firebase', 'Firestore', 'Expo', 'Leaflet'],
    icon: <Smartphone size={28} />,
    url: 'https://github.com/rafinhass853-stack/VaptVupt',
    color: '#facc15'
  },
  {
    title: 'Descargo',
    subtitle: 'LogTech para operações de transporte',
    description: 'Projeto voltado à digitalização de processos de transportadoras, conectando motoristas, operação, dados e acompanhamento de viagens.',
    tags: ['React', 'Firebase', 'Mobile', 'GPS'],
    icon: <Truck size={28} />,
    url: 'https://github.com/rafinhass853-stack/descargo',
    color: '#38bdf8'
  },
  {
    title: 'Entregaqui',
    subtitle: 'Plataforma de delivery',
    description: 'Projeto de plataforma para gestão de pedidos e entregas, pensado para conectar estabelecimentos, clientes e operação.',
    tags: ['React', 'Node.js', 'Realtime', 'Dashboards'],
    icon: <Layers3 size={28} />,
    url: 'https://github.com/rafinhass853-stack/entrega-aqui',
    color: '#10b981'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="projects-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfólio</span>
          <h2>Projetos que mostram meu <span className="gradient-text">trabalho</span></h2>
          <p className="section-description">Produtos e experimentos voltados principalmente para logística, transporte, delivery e gestão operacional.</p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.title} className="project-card" style={{ '--project-color': project.color }}>
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>{project.icon}</div>
                <span className="project-badge">PROJETO</span>
              </div>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">Ver no GitHub <ExternalLink size={16} /></a>
            </article>
          ))}
        </div>
        <div className="projects-more">
          <a href="https://github.com/rafinhass853-stack" target="_blank" rel="noopener noreferrer" className="btn-secondary">Ver todos os repositórios <ExternalLink size={16} /></a>
        </div>
      </div>
    </section>
  );
}
