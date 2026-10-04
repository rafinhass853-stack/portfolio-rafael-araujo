import React from 'react';
import { Smartphone, Truck, Layers3, Route, ArrowUpRight, LockKeyhole } from 'lucide-react';

const projects = [
  { title: 'VaptVupt', eyebrow: 'Delivery & LogTech', subtitle: 'Operação de entregas em tempo real', description: 'Ecossistema para conectar lojas, motoboys e administração, com geolocalização, rastreamento, matching, tarifação e repasses.', tags: ['React', 'Firebase', 'Expo', 'Firestore', 'Leaflet'], icon: <Smartphone size={26} />, color: '#facc15', highlights: ['Lojas + motoboys + admin', 'Rastreamento e geolocalização', 'Tarifação e repasses'] },
  { title: 'Descargo', eyebrow: 'Transportes', subtitle: 'Gestão de frota e viagens', description: 'Sistema pensado para transportadoras, reunindo app de motoristas, painel gestor e recursos para acompanhar viagens, jornadas, abastecimento e GPS.', tags: ['React Native', 'Expo', 'React', 'Node.js', 'Firebase'], icon: <Truck size={26} />, color: '#38bdf8', highlights: ['App para motoristas', 'Painel web gestor', 'GPS e geofencing'] },
  { title: 'Sistema Logístico Completo', eyebrow: 'ERP de Transportes', subtitle: 'Gestão operacional de transportadoras', description: 'ERP para gestão de transportes com frota, motoristas, programação de cargas, documentos, faturamento, roteirização, mapas e acompanhamento operacional.', tags: ['React', 'Firebase', 'Leaflet', 'Firestore', 'Vite'], icon: <Route size={26} />, color: '#a78bfa', highlights: ['Frota e programação', 'Documentos e faturamento', 'Mapas e roteirização'] },
  { title: 'Entregaqui', eyebrow: 'Delivery', subtitle: 'Gestão de pedidos e entregas', description: 'Plataforma estruturada para acompanhar pedidos, entregas e operação, com interfaces para cliente, estabelecimento e administração.', tags: ['React', 'Firebase', 'Node.js', 'Realtime'], icon: <Layers3 size={26} />, color: '#10b981', highlights: ['Painel do cliente', 'Painel do estabelecimento', 'Painel administrativo'] }
];

export default function Projects() {
  return (
    <section id="projetos" className="projects-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfólio técnico</span>
          <h2>Projetos que mostram meu <span className="gradient-text">trabalho</span></h2>
          <p className="section-description">Produtos autorais construídos a partir de problemas reais de logística, transporte e operação.</p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.title} className="project-card" style={{ '--project-color': project.color }}>
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>{project.icon}</div>
                <span className="project-badge"><LockKeyhole size={13} /> CASE PRIVADO</span>
              </div>
              <span className="project-eyebrow">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <div className="project-highlights">{project.highlights.map(item => <span key={item}>✓ {item}</span>)}</div>
              <div className="project-tags">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              <div className="project-link project-private-note">
                <span><LockKeyhole size={16} /> Código-fonte privado</span>
                <a href="#contato">Conversar sobre o projeto <ArrowUpRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-more">
          <a href="https://github.com/rafinhass853-stack" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Ver GitHub público <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
