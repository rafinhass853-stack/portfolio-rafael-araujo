// Skills.jsx (atualizado)
import React from 'react';
import { Users, Truck, TrendingUp, Code, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Users,
      title: 'Gestão & Liderança',
      skills: ['Gestão de Frota', 'Liderança de Equipes', 'Desenvolvimento de Talentos', 'Planejamento Estratégico'],
      level: 95
    },
    {
      icon: Truck,
      title: 'Logística 4.0',
      skills: ['Programação Logística', 'Monitoramento de Risco', 'Gestão de SLAs', 'Otimização de Rotas'],
      level: 90
    },
    {
      icon: TrendingUp,
      title: 'Comercial & Custos',
      skills: ['Gestão de Carteira', 'Negociação de Fretes', 'Análise de Custos', 'BID/SPOT'],
      level: 85
    },
    {
      icon: Code,
      title: 'Tecnologia',
      skills: ['React/Vite', 'Node.js', 'Firebase', 'Análise de Dados'],
      level: 88
    }
  ];

  return (
    <section id="competencias" className="skills-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competências</span>
          <h2>Minhas <span className="gradient-text">habilidades</span></h2>
          <p className="section-description">
            Uma combinação única de expertise operacional e habilidades técnicas
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <category.icon size={22} />
                </div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="skill-bar">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${category.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{category.level}%</span>
            </div>
          ))}
        </div>

        <div className="skill-badges">
          <div className="badge-item">
            <Award size={20} />
            <span>Especialista em Logística</span>
          </div>
          <div className="badge-item">
            <Award size={20} />
            <span>Full Stack Certified</span>
          </div>
          <div className="badge-item">
            <Award size={20} />
            <span>Gestão de Projetos</span>
          </div>
        </div>
      </div>
    </section>
  );
}