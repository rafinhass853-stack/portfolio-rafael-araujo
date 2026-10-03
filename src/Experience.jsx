import React from 'react';
import { BriefcaseBusiness, MapPin, Users, BarChart3, Route, Laptop2, Wrench, ChevronDown } from 'lucide-react';

const logo = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const experiences = [
  { current: true, company: 'Eixo SP Concessionária de Rodovias S.A.', role: 'Analista de Frotas', period: 'set. de 2026 — atual', location: 'Itirapina, SP · No local', logo: logo('eixosp.com.br'), description: 'Gestão de frota com foco em manutenção, disponibilidade, custos, indicadores e PPCM.', highlights: [
    { icon: Wrench, text: 'Planejamento, programação e controle de manutenção (PPCM)' },
    { icon: BriefcaseBusiness, text: 'Controle de ordens de serviço, peças, mão de obra e disponibilidade' },
    { icon: BarChart3, text: 'Acompanhamento de custos, produtividade e indicadores de manutenção' }
  ]},
  { company: 'Transportadora SIDER', role: 'Consultor', period: 'jul. de 2026 — set. de 2026', location: 'Limeira, SP · No local', logo: logo('sidertransportes.com.br'), description: 'Atuação como consultor autônomo em logística e transporte.', highlights: [] },
  { company: 'TG Logistica e Transportes', role: 'Coordenador de logística', period: 'set. de 2023 — jul. de 2026', location: 'Mogi Guaçu, SP · Híbrido', logo: logo('tglogistica.com.br'), description: 'Responsável pelo planejamento diário de rotas e cronogramas de entrega, utilizando o TMS Rodopar para otimizar a ocupação da frota. Coordenação de motoristas, monitoramento em tempo real e comunicação estratégica com clientes.', highlights: [
    { icon: Users, text: 'Coordenação de motoristas e monitoramento operacional em tempo real' },
    { icon: Route, text: 'Planejamento de rotas e cronogramas com TMS Rodopar' },
    { icon: BarChart3, text: 'Foco em KPIs, redução de atrasos e cumprimento de lead times críticos' },
    { icon: Laptop2, text: 'Gerenciamento de processos de negócios e marketing comercial' }
  ]},
  { company: 'Transportadora Danglares Duarte', role: 'Coordenador de logística', period: 'ago. de 2025 — set. de 2025', location: 'Araraquara, SP · No local', logo: logo('danglares.com.br'), description: 'Coordenação de logística em operação de transporte.', highlights: [] },
  { company: 'AGA LOGÍSTICA', role: 'Coordenador de logística', period: 'ago. de 2023 — set. de 2023', location: 'Araraquara, SP · No local', logo: logo('agalogistica.com.br'), description: 'Gestão operacional direta para contas de alta complexidade e programação de cargas.', highlights: [
    { icon: Users, text: 'Atuação com contas como Heineken, Nestlé, Italac e Solven' },
    { icon: Route, text: 'Programação de cargas e coordenação logística' },
    { icon: BarChart3, text: 'Contagem de estoque e planos de ação' }
  ]},
  { company: 'RDR Soluções Logísticas', role: 'Programador de logística pleno', period: 'jan. de 2023 — ago. de 2023', location: 'Ribeirão Preto, SP · Presencial', logo: logo('rdrsolucoeslogisticas.com.br'), description: 'Desenvolvimento de estratégias de gestão de frota com foco em economia de combustível e otimização de custos para clientes como Unilever e Ambev.', highlights: [
    { icon: Route, text: 'Monitoramento com Sighra, Sascar e Autotrac e gerenciamento de risco' },
    { icon: Laptop2, text: 'Rodopar para CTe, Manifestos e controles de prazos' },
    { icon: BarChart3, text: 'Estratégias de economia de combustível e otimização de custos' }
  ]},
  { company: 'RDR Soluções Logísticas', role: 'Analista de logística', period: 'jun. de 2022 — jan. de 2023', location: 'Ribeirão Preto, SP', logo: logo('rdrsolucoeslogisticas.com.br'), description: 'Monitoramento logístico, gerenciamento de risco e acompanhamento de coletas e entregas.', highlights: [
    { icon: Route, text: 'Sighra, SASCAR, ONIXSAT e Autotrac' },
    { icon: BriefcaseBusiness, text: 'Rodopar para cadastros, CTes, manifestos e operação' },
    { icon: BarChart3, text: 'Planilhas de prazos, checklist de veículos e pesquisa de motoristas' }
  ]},
  { company: 'Grupo Cargo Polo', role: 'Analista de logística', period: 'abr. de 2021 — fev. de 2022', location: 'Ribeirão Preto e Região', logo: logo('cargopolo.com.br'), description: 'Emissão de CTes, manifestos, contratos de motoristas e acompanhamento de viagens com foco em agendas de coleta e entrega.', highlights: [
    { icon: Laptop2, text: 'Experiência com Rodopar e plataforma GALILEU' },
    { icon: Users, text: 'Cadastro e consulta de motoristas e análise de risco' },
    { icon: BriefcaseBusiness, text: 'Cadastro de parceiros, contratos e fidelização de clientes e agregados' }
  ]},
  { company: 'Grupo Cargo Polo', role: 'Gerenciamento de risco', period: 'abr. de 2021 — jun. de 2021', location: 'Ribeirão Preto, SP', logo: logo('cargopolo.com.br'), description: 'Gerenciamento de risco e monitoramento de veículos durante viagens.', highlights: [
    { icon: Route, text: 'Monitoramento com Sascar, Omnilink e PROMATIX' },
    { icon: BarChart3, text: 'Abertura de SM e acompanhamento de viagens e rotas' },
    { icon: Users, text: 'Relatórios de fadiga e controle de jornada' }
  ]},
  { company: 'BK bank', role: 'Assistente administrativo', period: 'mar. de 2021 — abr. de 2021', location: 'Ribeirão Preto, SP · No local', logo: logo('bkbank.com.br'), description: 'Atuação administrativa, sistemas operacionais e atendimento ao cliente.', highlights: [] },
  { company: 'Santa Casa São Carlos', role: 'Atendente de farmácia', period: 'abr. de 2020 — set. de 2020', location: 'São Carlos, SP', logo: logo('scsaocarlos.com.br'), description: 'Separação de medicamentos e utensílios para procedimentos hospitalares, controle de estoque e rotinas da farmácia.', highlights: [
    { icon: BarChart3, text: 'Controle de estoque e gestão da farmácia' },
    { icon: Laptop2, text: 'Sistema MVSOUL' }
  ]},
  { company: 'Arteris S.A.', role: 'Assistente administrativo CCA', period: 'out. de 2018 — set. de 2019', location: 'Ribeirão Preto e Região', logo: logo('arteris.com.br'), description: 'Correções de discrepâncias das vias manuais e automáticas dos pedágios, suporte às praças e acompanhamento de liquidação de turno.', highlights: [
    { icon: BriefcaseBusiness, text: 'Análise e abertura de chamados' },
    { icon: BarChart3, text: 'Acompanhamento de liquidação de turno dos operadores' }
  ]},
  { company: 'Arteris S.A.', role: 'Operador de pedágio', period: 'nov. de 2016 — out. de 2018', location: 'São Simão, SP', logo: logo('arteris.com.br'), description: 'Operação de caixa de pedágio.', highlights: [] },
  { company: 'Termoeps Comercial e Industrial Ltda EPP', role: 'Encarregado geral', period: 'jan. de 2013 — out. de 2014', location: 'São Simão, SP', logo: logo('termoeps.com.br'), description: 'Atuação como encarregado geral.', highlights: [] },
  { company: 'Fortline Industria e Comercio de Moveis', role: 'Operador de produção', period: 'abr. de 2011 — ago. de 2012', location: 'São Simão, SP', logo: logo('fortline.com.br'), description: 'Atuação na produção industrial.', highlights: [] },
  { company: 'Fortline Industria e Comercio de Moveis', role: 'Auxiliar', period: 'out. de 2010 — abr. de 2011', location: 'São Simão, SP', logo: logo('fortline.com.br'), description: 'Atuação como auxiliar na indústria.', highlights: [] },
  { company: 'Supermercados Gricki', role: 'Empacotador', period: 'jul. de 2008 — abr. de 2009', location: 'São Simão, SP', logo: logo('gricki.com.br'), description: 'Atuação como empacotador.', highlights: [] }
];

function CompanyLogo({ experience }) {
  const initials = experience.company.split(/\s+/).filter(Boolean).slice(0, 2).map(word => word[0]).join('').toUpperCase();
  return (
    <div className="company-logo-wrap" data-initials={initials}>
      <img src={experience.logo} alt="" aria-hidden="true" className="company-logo"
        onError={(event) => { event.currentTarget.style.display = 'none'; }} />
      <span className="company-logo-fallback" aria-hidden="true">{initials}</span>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="experience-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Carreira</span>
          <h2>Experiência <span className="gradient-text">profissional</span></h2>
          <p className="section-description">Toda a trajetória profissional registrada no LinkedIn, do primeiro emprego à atuação atual em gestão de frotas.</p>
        </div>

        <div className="career-summary">
          <div><strong>17</strong><span>posições</span></div>
          <div><strong>2008 — atual</strong><span>trajetória profissional</span></div>
          <div><strong>Logística + tecnologia</strong><span>especialidade atual</span></div>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className={`timeline-item ${experience.current ? 'current-role' : ''}`} key={`${experience.company}-${experience.role}-${experience.period}-${index}`}>
              <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
              <details className="timeline-details" open={experience.current}>
                <summary className="timeline-card timeline-summary">
                  <div className="timeline-company">
                    <CompanyLogo experience={experience} />
                    <div className="timeline-top">
                      <div>
                        <span className={`timeline-period ${experience.current ? 'current' : ''}`}>{experience.current ? 'EM ATUAÇÃO' : experience.period}</span>
                        <h3>{experience.company}</h3>
                        <h4>{experience.role}</h4>
                      </div>
                      <span className="timeline-location"><MapPin size={14} /> {experience.location}</span>
                    </div>
                    <ChevronDown className="timeline-chevron" size={20} />
                  </div>
                </summary>
                <div className="timeline-content">
                  <p>{experience.description}</p>
                  {experience.highlights.length > 0 && (
                    <div className="timeline-highlights">
                      {experience.highlights.map(({ icon: Icon, text }) => (
                        <div className="timeline-highlight" key={text}><Icon size={17} /><span>{text}</span></div>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            </article>
          ))}
        </div>

        <div className="career-note"><strong>Leitura rápida:</strong> a experiência mais recente aparece aberta; clique em qualquer outra posição para consultar detalhes sem deixar a página excessivamente longa.</div>
      </div>
    </section>
  );
}
