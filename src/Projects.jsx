// Projects.jsx (atualizado)
import React, { useState } from 'react';
import { Smartphone, Layers, Database } from 'lucide-react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Descargo",
      subtitle: "Ecossistema LogTech Autoral",
      description: "Solução completa para gestão operacional de transportadoras, com aplicativo mobile para motoristas e painel web gerencial. Inclui rastreamento GPS em tempo real, geofencing e dashboards analíticos.",
      tags: ["React", "Vite", "Firebase", "Node.js", "Mobile"],
      icon: <Smartphone size={28} />,
      color: "#38bdf8",
      stats: [
        { label: "Motoristas", value: "150+" },
        { label: "Entregas/mês", value: "2.5K" },
        { label: "Redução de custos", value: "32%" }
      ]
    },
    {
      title: "Entregaqui",
      subtitle: "Plataforma de Delivery Multimódulo",
      description: "Sistema completo de entregas para restaurantes com três módulos integrados: Administrador, Estabelecimento e Cliente Final. Otimização de rotas e gestão de pedidos em tempo real.",
      tags: ["React.js", "Realtime DB", "Node.js", "Dashboards"],
      icon: <Layers size={28} />,
      color: "#10b981",
      stats: [
        { label: "Estabelecimentos", value: "80+" },
        { label: "Pedidos/mês", value: "5K+" },
        { label: "Tempo de entrega", value: "-28%" }
      ]
    },
    {
      title: "Automações TG Logística",
      subtitle: "Relatórios & Processos Internos",
      description: "Desenvolvimento de relatórios customizados via Crystal Reports e scripts de automação, otimizando fluxos de dados operacionais e acelerando tomadas de decisão estratégicas.",
      tags: ["Crystal Reports", "SQL", "Análise de Dados", "Processos"],
      icon: <Database size={28} />,
      color: "#8b5cf6",
      stats: [
        { label: "Relatórios criados", value: "45+" },
        { label: "Economia de tempo", value: "60%" },
        { label: "Processos otimizados", value: "12" }
      ]
    }
  ];

  return (
    <section id="projetos" className="projects-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfólio</span>
          <h2>Projetos em <span className="gradient-text">destaque</span></h2>
          <p className="section-description">
            Soluções tecnológicas desenvolvidas para resolver desafios reais da logística
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ '--project-color': project.color }}
            >
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <span className="project-badge">LOGTECH</span>
              </div>
              
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>

              <div className="project-stats">
                {project.stats.map((stat, i) => (
                  <div key={i} className="stat">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}