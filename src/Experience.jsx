import React from 'react';
import { BriefcaseBusiness, MapPin, Users, BarChart3, Route, Laptop2 } from 'lucide-react';

const experiences = [
  {
    current: true,
    company: 'Eixo SP',
    role: 'Analista de Frotas',
    period: 'Atual',
    location: 'São Paulo',
    description: 'Atuação na gestão de frota da concessionária rodoviária, com foco em manutenção, disponibilidade, custos e indicadores operacionais.',
    highlights: [
      { icon: Users, text: 'Planejamento, programação e controle de manutenção (PPCM)' },
      { icon: BarChart3, text: 'Controle de ordens de serviço, peças, mão de obra e disponibilidade' },
      { icon: Route, text: 'Acompanhamento de custos, produtividade e desempenho das oficinas' },
      { icon: Laptop2, text: 'Análise de indicadores e apoio à melhoria da disponibilidade da frota' }
    ]
  },
  {
    current: false,
    company: 'Trajetória em Transporte & Logística',
    role: 'Experiências anteriores em operações',
    period: 'Experiências anteriores',
    location: 'Interior de São Paulo',
    description: 'Trajetória construída no setor de transporte e logística, com experiência em operações, frota, motoristas, indicadores e melhoria de processos.',
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
