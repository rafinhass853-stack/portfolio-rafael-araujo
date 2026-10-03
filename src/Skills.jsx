import React from 'react';
import { Users, Truck, BarChart3, Code2, MapPinned, Database } from 'lucide-react';

const categories = [
  { icon: Users, title: 'Gestão de operações', skills: ['Gestão de equipes e motoristas', 'Programação de transporte', 'Disponibilidade de frota', 'Tratativas de ocorrências'] },
  { icon: Truck, title: 'Logística & transporte', skills: ['Carga seca / sider', 'Roteirização', 'Monitoramento', 'Gestão de SLA'] },
  { icon: BarChart3, title: 'Indicadores & processos', skills: ['KPIs operacionais', 'Análise de desvios', 'Melhoria contínua', 'Automação de rotinas'] },
  { icon: Code2, title: 'Desenvolvimento', skills: ['React / Vite', 'JavaScript / TypeScript', 'Node.js', 'Firebase / Firestore'] },
  { icon: MapPinned, title: 'Geotecnologia', skills: ['GPS e geolocalização', 'Leaflet / mapas', 'Geofencing', 'Rastreamento em tempo real'] },
  { icon: Database, title: 'Dados & ferramentas', skills: ['Crystal Reports', 'SQL', 'Dashboards', 'Git / GitHub'] }
];

export default function Skills() {
  return (
    <section id="competencias" className="skills-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competências</span>
          <h2>O que eu <span className="gradient-text">faço</span></h2>
          <p className="section-description">Competências desenvolvidas entre a rotina operacional e a construção de produtos digitais.</p>
        </div>
        <div className="skills-grid">
          {categories.map(({ icon: Icon, title, skills }) => (
            <div key={title} className="skill-card">
              <div className="skill-header"><div className="skill-icon"><Icon size={22} /></div><h3>{title}</h3></div>
              <ul className="skill-list">{skills.map(skill => <li key={skill}><span className="skill-dot"></span>{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
