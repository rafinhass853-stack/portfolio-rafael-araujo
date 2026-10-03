import React from 'react';
import { Smartphone, Truck, Layers3, Route, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'VaptVupt',
    eyebrow: 'Delivery & LogTech',
    subtitle: 'Operação de entregas em tempo real',
    description: 'Ecossistema para conectar lojas, motoboys e administração, com geolocalização, rastreamento, tarifação, repasses e operação semelhante a plataformas de delivery.',
    tags: ['React', 'Firebase', 'Expo', 'Firestore', 'Leaflet'],
    icon: <Smartphone size={26} />,
    url: 'https://github.com/rafinhass853-stack/VaptVupt',
    color: '#facc15',
    highlights: ['Lojas + motoboys + admin', 'Rastreamento e geolocalização', 'Tarifação e repasses']
  },
  {
    title: 'Descargo',
    eyebrow: 'Transportes',
    subtitle: 'Gestão de frota e viagens',
    description: 'Sistema pensado para transportadoras, reunindo app de motoristas, painel gestor e API para acompanhar viagens, jornadas, abastecimento, cargas, GPS e operação.',
    tags: ['React Native', 'Expo', 'React', 'Node.js', 'Firebase'],
    icon: <Truck size={26} />,
    url: 'https://github.com/rafinhass853-stack/descargo',
    color: '#38bdf8',
    highlights: ['App para motoristas', 'Painel web gestor', 'GPS e geofencing']
  },
  {
    title: 'Sistema Logístico Completo',
    eyebrow: 'ERP de Transportes',
    subtitle: 'Soto Logística',
    description: 'ERP para gestão de transportes com frota, motoristas, programação de cargas, documentos, faturamento, roteirização, mapas e acompanhamento operacional.',
    tags: ['React', 'Firebase', 'Leaflet', 'Firestore', 'Vite'],
    icon: <Route size={26} />,
    url: 'https://github.com/rafinhass853-stack/sistemalogisticocompleto',
    color: '#a78bfa',
    highlights: ['Frota e programação', 'CTRC, MDF-e e romaneios', 'Mapas e roteirização']
  },
  {
    title: 'Entregaqui',
    eyebrow: 'Delivery',
    subtitle: 'Gestão de pedidos e entregas',
    description: 'Plataforma com painéis para cliente, estabelecimento e administração, estruturada para acompanhar pedidos, entregas e operação em tempo real.',
    tags: ['React', 'Firebase', 'Node.js', 'Realtime'],
    icon: <Layers3 size={26} />,
    url: 'https://github.com/rafinhass853-stack/entrega-aqui',
    color: '#10b981',
    highlights: ['Painel do cliente', 'Painel do estabelecimento', 'Painel administrativo']
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="projects-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfólio técnico</span>
          <h2>Projetos que mostram meu <span className="gradient-text">trabalho</span></h2>
          <p className="section-description">
            Soluções próprias que unem experiência em logística, transporte e operação com desenvolvimento de produtos digitais.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.title} className="project-card" style={{ '--project-color': project.color }}>
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>{project.icon}</div>
                <span className="project-badge">PROJETO</span>
              </div>

              <span className="project-eyebrow">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map(item => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>

              <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                Ver projeto no GitHub <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="projects-more">
          <a href="https://github.com/rafinhass853-stack" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Ver todos os repositórios <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
