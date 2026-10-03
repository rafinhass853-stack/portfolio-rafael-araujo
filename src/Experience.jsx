import React from 'react';
import { BriefcaseBusiness, MapPin, Users, BarChart3, Route, Laptop2, Wrench } from 'lucide-react';

const experiences = [
  {
    current: true,
    company: 'Eixo SP',
    role: 'Analista de Frotas',
    period: 'Atual',
    location: 'São Carlos / Itirapina, SP',
    description: 'Atuação na gestão de frota da concessionária rodoviária, com foco em manutenção, disponibilidade, custos, indicadores e PPCM.',
    highlights: [
      { icon: Wrench, text: 'Planejamento, programação e controle de manutenção (PPCM)' },
      { icon: BriefcaseBusiness, text: 'Controle de ordens de serviço, peças, mão de obra e disponibilidade da frota' },
      { icon: BarChart3, text: 'Acompanhamento de custos, produtividade das oficinas e indicadores de manutenção' },
      { icon: Laptop2, text: 'Relatórios, dashboards, análise de dados e apoio à melhoria dos processos' }
    ]
  },
  {
    current: false,
    company: 'TG Logística e Transportes',
    role: 'Operações de Transporte e Logística',
    period: 'Experiência anterior',
    location: 'Mogi Guaçu / Araraquara, SP',
    description: 'Experiência em operação de transporte rodoviário, gestão de motoristas, acompanhamento de indicadores e atuação sobre disponibilidade e desempenho operacional.',
    highlights: [
      { icon: Users, text: 'Gestão operacional de mais de 150 motoristas e acompanhamento das rotinas da operação' },
      { icon: Route, text: 'Atuação com transporte de carga seca e sider, programação e disponibilidade operacional' },
      { icon: BarChart3, text: 'Acompanhamento de KPIs, análise de desvios e apoio à tomada de decisão' },
      { icon: BriefcaseBusiness, text: 'Tratativas de faltas, atestados, veículos indisponíveis e força-tarefa operacional' }
    ]
  },
  {
    current: false,
    company: 'Trajetória anterior em Transporte & Logística',
    role: 'Operações, processos e atendimento',
    period: 'Experiências anteriores',
    location: 'Interior de São Paulo',
    description: 'Atuação profissional anterior em diferentes operações e contextos do setor de transporte e logística, conforme trajetória registrada no LinkedIn.',
    highlights: [
      { icon: Route, text: 'Experiência em operações e processos de transporte' },
      { icon: Users, text: 'Relacionamento com motoristas, equipes e clientes' },
      { icon: BarChart3, text: 'Indicadores, controles e análise de desempenho operacional' },
      { icon: Laptop2, text: 'Uso de tecnologia e dados para apoiar processos e decisões' }
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
            Uma trajetória construída na operação, gestão de frotas e logística, ampliada pela tecnologia.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
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
          <strong>Base profissional:</strong> São Carlos/SP · atuação regional no interior paulista · frotas, manutenção, operações, transporte, indicadores e tecnologia aplicada.
        </div>
      </div>
    </section>
  );
}
