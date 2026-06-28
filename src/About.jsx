// About.jsx (atualizado)
import React from 'react';
import { Truck, Code, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Truck,
      title: 'Logística Avançada',
      description: 'Especialista em gestão de frotas, SLAs de alta performance e otimização de custos operacionais.',
      color: '#38bdf8'
    },
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Criação de ecossistemas tecnológicos completos com React, Node.js, Firebase e soluções mobile.',
      color: '#10b981'
    },
    {
      icon: Shield,
      title: 'Gestão de Risco',
      description: 'Monitoramento proativo e mitigação de riscos operacionais com análise de dados em tempo real.',
      color: '#f59e0b'
    },
    {
      icon: TrendingUp,
      title: 'Resultados Mensuráveis',
      description: 'Redução comprovada de custos e aumento de produtividade com soluções tecnológicas customizadas.',
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="sobre" className="about-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sobre mim</span>
          <h2>Transformando operações com <span className="gradient-text">tecnologia</span></h2>
          <p className="section-description">
            Combinando expertise em logística com desenvolvimento de software para criar soluções que geram impacto real
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Gestor operacional com <strong>sólida experiência em logística</strong>, focado em alta performance e redução de custos. Especialista no desenvolvimento de soluções tecnológicas aplicadas diretamente à operação, incluindo a criação de ecossistemas (Mobile/Web) voltados para a rentabilidade de transportadoras e eficiência de frotas.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Anos de experiência</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos entregues</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Empresas impactadas</span>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ '--accent-color': feature.color }}>
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}