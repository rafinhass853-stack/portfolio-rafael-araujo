import React from 'react';
import { BriefcaseBusiness, MapPin, Users, BarChart3, Route, Laptop2 } from 'lucide-react';

const experiences = [
  {
    current: true,
    company: 'TG Logística e Transportes',
    role: 'Gestão de Operações Logísticas',
    period: 'Atual',
    location: 'São Paulo',
    description: 'Atuação em operações de transporte e carga seca/sider, conectando gestão de pessoas, disponibilidade de frota, indicadores e melhoria contínua.',
    highlights: [
      { icon: Users, text: 'Gestão operacional com responsabilidade sobre mais de 150 motoristas' },
      { icon: BarChart3, text: 'Acompanhamento de KPIs e análise de desvios operacionais' },
      { icon: Route, text: 'Programação, tratativas de ocorrências e apoio à produtividade da operação' },
      { icon: Laptop2, text: 'Desenvolvimento de soluções e automações para problemas reais do transporte' }
    ]
  },
  {
    current: false,
    company: 'Trajetória em Transporte & Logística',
    role: 'Experiências anteriores em operações',
    period: '2014 — 2025',
    location: 'Interior de São Paulo',
    description: 'Mais de sete anos de experiência no setor de transporte, com passagem por diferentes contextos operacionais e evolução para posições de maior responsabilidade em gestão, indicadores e tecnologia aplicada.',
    highlights: [
      { icon: BriefcaseBusiness, text: 'Operações de transporte, carga seca e gestão de frota' },
      { icon: Users, text: 'Relacionamento e tratativas com motoristas, clientes e equipes' },
      { icon: BarChart3, text: 'Indicadores, análise de desempenho e melhoria de processos' },
      { icon: Route, text: 'Roteirização, disponibilidade e eficiência operacional' }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="experience-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Carreira</span>
          <h2>Experiência <span className="gradient-text">profissional</span></h2>
          <p className="section-description">
            Uma trajetória construída na operação e ampliada pela tecnologia.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={experience.company}>
              <div className="timeline-marker">
                <BriefcaseBusiness size={18} />
              </div>
              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <span className={`timeline-period ${experience.current ? 'current' : ''}`}>
                      {experience.current ? 'EM ATUAÇÃO' : experience.period}
                    </span>
                    <h3>{experience.company}</h3>
                    <h4>{experience.role}</h4>
                  </div>
                  <span className="timeline-location"><MapPin size={14} /> {experience.location}</span>
                </div>
                <p>{experience.description}</p>
                <div className="timeline-highlights">
                  {experience.highlights.map(({ icon: Icon, text }) => (
                    <div className="timeline-highlight" key={text}>
                      <Icon size={17} />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="career-note">
          <strong>Base profissional:</strong> São Carlos/SP · atuação regional no interior paulista · logística, operações, transporte e tecnologia aplicada.
        </div>
      </div>
    </section>
  );
}
