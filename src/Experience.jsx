import React from 'react';
import { BriefcaseBusiness, MapPin, Users, BarChart3, Route, Laptop2, Wrench, ChevronDown, ClipboardList, ShieldCheck, Package, Factory, Hospital, CreditCard } from 'lucide-react';

const experiences = [
  { current: true, logoUrl: 'https://eixosp.com.br/wp-content/themes/EixoSP/img/logo-top.png', company: 'Eixo SP Concessionária de Rodovias S.A.', role: 'Analista de Frotas', period: 'set. de 2026 — atual', location: 'Itirapina, SP · No local', description: 'Atuação no planejamento, programação e controle de manutenção da frota, acompanhando disponibilidade, custos, ordens de serviço, peças, mão de obra e indicadores de desempenho.', highlights: [
    { icon: Wrench, text: 'PPCM: planejamento, programação e controle de manutenção preventiva e corretiva' },
    { icon: ClipboardList, text: 'Acompanhamento de ordens de serviço, peças, mão de obra e inspeções' },
    { icon: BarChart3, text: 'Controle de custos, disponibilidade e produtividade das oficinas' }
  ]},
  { company: 'Transportadora SIDER', role: 'Consultor', period: 'jul. de 2026 — set. de 2026', location: 'Limeira, SP · No local', description: 'Atuação consultiva em operação de transporte rodoviário, apoiando a organização da rotina operacional, programação e acompanhamento das demandas de frota e motoristas.', highlights: [
    { icon: Route, text: 'Apoio à programação e acompanhamento das operações de transporte' },
    { icon: Users, text: 'Interface com motoristas e rotina operacional' },
    { icon: BarChart3, text: 'Análise de ocorrências e apoio à melhoria dos processos' }
  ]},
  { logoUrl: 'https://tglogistica.com.br/wp-content/webp-express/webp-images/uploads/2022/11/tglogistica.png.webp', company: 'TG Logistica e Transportes', role: 'Coordenador de logística', period: 'set. de 2023 — jul. de 2026', location: 'Mogi Guaçu, SP · Híbrido', description: 'Responsável pelo planejamento diário de rotas e cronogramas de entrega, coordenação de motoristas e monitoramento em tempo real, utilizando o TMS Rodopar para apoiar a ocupação da frota e o cumprimento dos prazos.', highlights: [
    { icon: Users, text: 'Coordenação de motoristas e monitoramento operacional em tempo real' },
    { icon: Route, text: 'Planejamento de rotas, cronogramas e ocupação da frota com TMS Rodopar' },
    { icon: BarChart3, text: 'Acompanhamento de KPIs, atrasos e lead times críticos' },
    { icon: Laptop2, text: 'Gerenciamento de processos e interface comercial com clientes' }
  ]},
  { logoUrl: 'https://static.wixstatic.com/media/f7fc0f_7744962ca78b4801a7e1e4f0f8c35f10~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/duartelogodfundo.png', company: 'Transportadora Danglares Duarte', role: 'Coordenador de logística', period: 'ago. de 2025 — set. de 2025', location: 'Araraquara, SP · No local', description: 'Coordenação da rotina logística, acompanhando programação, execução das viagens e tratativas necessárias para manter o fluxo operacional.', highlights: [
    { icon: Route, text: 'Programação e acompanhamento de viagens' },
    { icon: Users, text: 'Interface com motoristas e operação' },
    { icon: ClipboardList, text: 'Tratativa de ocorrências e acompanhamento de prazos' }
  ]},
  { logoUrl: 'https://agalogistica.com.br/wp-content/uploads/logo-logistica.png', company: 'AGA LOGÍSTICA', role: 'Coordenador de logística', period: 'ago. de 2023 — set. de 2023', location: 'Araraquara, SP · No local', description: 'Gestão operacional direta de contas de alta complexidade, com programação de cargas, acompanhamento da distribuição e atendimento das demandas dos clientes.', highlights: [
    { icon: Users, text: 'Atuação com contas como Heineken, Nestlé, Italac e Solven' },
    { icon: Route, text: 'Programação de cargas e coordenação da distribuição' },
    { icon: BarChart3, text: 'Acompanhamento de estoque, desvios e planos de ação' }
  ]},
  { logoUrl: 'https://rdrsolucoeslogisticas.com.br/wp-content/uploads/2019/04/logo.png', company: 'RDR Soluções Logísticas', role: 'Programador de logística pleno', period: 'jan. de 2023 — ago. de 2023', location: 'Ribeirão Preto, SP · Presencial', description: 'Atuação no planejamento e programação logística, com foco em gestão de frota, economia de combustível, otimização de custos, monitoramento e gerenciamento de risco.', highlights: [
    { icon: Route, text: 'Monitoramento com Sighra, Sascar e Autotrac e gerenciamento de risco' },
    { icon: Laptop2, text: 'Rodopar para emissão de CTe, Manifestos e controles operacionais' },
    { icon: BarChart3, text: 'Estratégias de economia de combustível e otimização de custos' }
  ]},
  { logoUrl: 'https://rdrsolucoeslogisticas.com.br/wp-content/uploads/2019/04/logo.png', company: 'RDR Soluções Logísticas', role: 'Analista de logística', period: 'jun. de 2022 — jan. de 2023', location: 'Ribeirão Preto, SP', description: 'Acompanhamento de coletas e entregas, monitoramento de veículos, gerenciamento de risco e atualização dos controles necessários para cumprimento dos prazos.', highlights: [
    { icon: Route, text: 'Monitoramento com Sighra, SASCAR, ONIXSAT e Autotrac' },
    { icon: ShieldCheck, text: 'Gerenciamento de risco, abertura de SM e acompanhamento de viagens' },
    { icon: ClipboardList, text: 'Rodopar, CTes, manifestos, planilhas de prazos e checklists de veículos' },
    { icon: Users, text: 'Consulta e pesquisa de motoristas para programação de viagens' }
  ]},
  { company: 'Grupo Cargo Polo', role: 'Analista de logística', period: 'abr. de 2021 — fev. de 2022', location: 'Ribeirão Preto e Região', description: 'Rotinas de documentação, programação e acompanhamento de viagens, com contato com motoristas, parceiros comerciais e clientes.', highlights: [
    { icon: Laptop2, text: 'Emissão de CTes, manifestos e contratos de motoristas' },
    { icon: Route, text: 'Acompanhamento de viagens, coletas e entregas conforme agenda' },
    { icon: ShieldCheck, text: 'Cadastro e consulta de motoristas com análise de risco' },
    { icon: Users, text: 'Cadastro de parceiros, contratos e relacionamento com clientes e agregados' }
  ]},
  { company: 'Grupo Cargo Polo', role: 'Gerenciamento de risco', period: 'abr. de 2021 — jun. de 2021', location: 'Ribeirão Preto, SP', description: 'Atuação no gerenciamento de risco das viagens, monitoramento de veículos e acompanhamento das condições operacionais e de jornada dos motoristas.', highlights: [
    { icon: Route, text: 'Monitoramento com Sascar, Omnilink e PROMATIX' },
    { icon: ShieldCheck, text: 'Abertura de SM e análise de risco das viagens' },
    { icon: BarChart3, text: 'Relatórios de fadiga e controle de jornada' }
  ]},
  { company: 'BK bank', role: 'Assistente administrativo', period: 'mar. de 2021 — abr. de 2021', location: 'Ribeirão Preto, SP · No local', description: 'Atuação em rotinas administrativas, atendimento ao cliente e utilização de sistemas operacionais para suporte às atividades da unidade.', highlights: [
    { icon: Laptop2, text: 'Operação e atualização de sistemas internos' },
    { icon: Users, text: 'Atendimento e suporte às demandas dos clientes' },
    { icon: ClipboardList, text: 'Organização de informações e rotinas administrativas' }
  ]},
  { company: 'Santa Casa São Carlos', role: 'Atendente de farmácia', period: 'abr. de 2020 — set. de 2020', location: 'São Carlos, SP', description: 'Atuação na farmácia hospitalar, apoiando a separação e organização de medicamentos conforme prescrições e solicitações internas, além dos registros e controles no sistema.', highlights: [
    { icon: Hospital, text: 'Rotina de farmácia hospitalar em ambiente de saúde' },
    { icon: Package, text: 'Separação e conferência de medicamentos conforme prescrição médica e solicitações' },
    { icon: Laptop2, text: 'Baixas, registros e movimentações no sistema MVSOUL' },
    { icon: ClipboardList, text: 'Organização, controle de estoque e apoio às rotinas de dispensação' }
  ]},
  { company: 'Arteris S.A.', role: 'Assistente administrativo CCA', period: 'out. de 2018 — set. de 2019', location: 'Ribeirão Preto e Região', description: 'Atuação administrativa no Centro de Controle e Arrecadação, apoiando a análise das movimentações das praças de pedágio e a regularização de ocorrências.', highlights: [
    { icon: BarChart3, text: 'Análise de discrepâncias entre vias manuais e automáticas' },
    { icon: ClipboardList, text: 'Abertura e acompanhamento de chamados' },
    { icon: CreditCard, text: 'Acompanhamento da liquidação de turnos dos operadores' }
  ]},
  { company: 'Arteris S.A.', role: 'Operador de pedágio', period: 'nov. de 2016 — out. de 2018', location: 'São Simão, SP', description: 'Operação de praça de pedágio, atendimento ao usuário e execução das rotinas de arrecadação e controle de passagem.', highlights: [
    { icon: CreditCard, text: 'Operação de caixa e arrecadação de tarifas' },
    { icon: Users, text: 'Atendimento direto aos usuários da rodovia' },
    { icon: ClipboardList, text: 'Conferência e cumprimento dos procedimentos operacionais da praça' }
  ]},
  { logoUrl: 'http://www.termoeps.com.br/wp-content/uploads/2020/04/logo-termo-grande.png', company: 'Termoeps Comercial e Industrial Ltda EPP', role: 'Encarregado geral', period: 'jan. de 2013 — out. de 2014', location: 'São Simão, SP', description: 'Atuação como encarregado geral, acompanhando a rotina operacional e apoiando a organização das atividades da equipe e da produção.', highlights: [
    { icon: Users, text: 'Acompanhamento e distribuição das atividades da equipe' },
    { icon: Factory, text: 'Apoio à rotina operacional e produtividade' },
    { icon: ClipboardList, text: 'Organização de tarefas e acompanhamento da execução' }
  ]},
  { company: 'Fortline Industria e Comercio de Moveis', role: 'Operador de produção', period: 'abr. de 2011 — ago. de 2012', location: 'São Simão, SP', description: 'Atuação na linha de produção industrial de móveis, seguindo padrões de qualidade, segurança e produtividade.', highlights: [
    { icon: Factory, text: 'Execução de atividades na linha de produção' },
    { icon: ClipboardList, text: 'Cumprimento de padrões e procedimentos operacionais' },
    { icon: Wrench, text: 'Apoio à organização e continuidade do processo produtivo' }
  ]},
  { company: 'Fortline Industria e Comercio de Moveis', role: 'Auxiliar', period: 'out. de 2010 — abr. de 2011', location: 'São Simão, SP', description: 'Atuação como auxiliar na indústria, dando suporte às etapas da produção e à organização do ambiente de trabalho.', highlights: [
    { icon: Factory, text: 'Suporte às atividades do processo produtivo' },
    { icon: Package, text: 'Movimentação e organização de materiais' },
    { icon: ClipboardList, text: 'Apoio à equipe e cumprimento das rotinas de produção' }
  ]},
  { logoUrl: 'https://www.supermercadosgricki.com.br/wp-content/uploads/2026/06/result_Logo-Full-Gricki_OK-2.png', company: 'Supermercados Gricki', role: 'Empacotador', period: 'jul. de 2008 — abr. de 2009', location: 'São Simão, SP', description: 'Primeira experiência profissional, com atendimento ao público, organização e apoio à operação de frente de caixa.', highlights: [
    { icon: Users, text: 'Atendimento e apoio aos clientes' },
    { icon: Package, text: 'Organização e acondicionamento das compras' },
    { icon: ClipboardList, text: 'Apoio à rotina da frente de caixa e organização do setor' }
  ]}
];

function CompanyLogo({ experience }) {
  const words = experience.company.replace(/[^A-Za-zÀ-ÿ0-9 ]/g, '').split(/\s+/).filter(Boolean);
  const initials = words.length >= 2 ? `${words[0][0]}${words[1][0]}`.toUpperCase() : (words[0]?.slice(0, 2) || 'EX').toUpperCase();
  return (
    <div className="company-logo-wrap" aria-label={experience.company}>
      {experience.logoUrl ? (
        <img className="company-logo-image" src={experience.logoUrl} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'inline-flex'; }} />
      ) : null}
      <span className="company-logo-mark" aria-hidden="true" style={{ display: experience.logoUrl ? 'none' : 'inline-flex' }}>{initials}</span>
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
          <p className="section-description">Uma trajetória construída na operação: transporte, logística, atendimento, indústria e, hoje, gestão de frotas e tecnologia aplicada.</p>
        </div>
        <div className="career-summary">
          <div><strong>17</strong><span>posições</span></div>
          <div><strong>2008 — atual</strong><span>trajetória profissional</span></div>
          <div><strong>Operação + tecnologia</strong><span>especialidade atual</span></div>
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
                  {experience.highlights.length > 0 && <div className="timeline-highlights">{experience.highlights.map(({ icon: Icon, text }) => <div className="timeline-highlight" key={text}><Icon size={17} /><span>{text}</span></div>)}</div>}
                </div>
              </details>
            </article>
          ))}
        </div>
        <div className="career-note"><strong>Leitura rápida:</strong> a posição atual aparece aberta. As demais podem ser expandidas para mostrar responsabilidades e competências sem transformar a página em um bloco de texto.</div>
      </div>
    </section>
  );
}
