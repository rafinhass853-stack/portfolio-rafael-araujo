import React from 'react';
import { GraduationCap, Award, Languages, HeartHandshake, ExternalLink, Quote } from 'lucide-react';

const certifications = [
  { title: 'Crystal Reports XI - Desenvolvendo Relatórios', issuer: 'Datapar Ltda', date: 'nov. de 2024' },
  { title: 'NTT DATA Quality Assurance Beginner #3', issuer: 'DIO', date: 'Registrado no LinkedIn' },
  { title: 'desenvolvimento básico em Java', issuer: 'DIO', date: 'Registrado no LinkedIn' },
  { title: 'lógica de programação essencial', issuer: 'DIO', date: 'Registrado no LinkedIn' },
  { title: 'Fundamentos de arquitetura de sistemas', issuer: 'DIO', date: 'Registrado no LinkedIn' }
];

const education = [{ title: 'UniCesumar', detail: 'Formação acadêmica — 2021 a 2024' }];

const recommendations = [
  ['Leandro Silva Rosa', 'Coordenador administrativo e logística', 'Sem dúvidas um excelente profissional na área de logística e transportes, onde demonstra muito conhecimento no setor de transportes em relação as tratativas com clientes, conhecimento em roterização no intuito em reduzir custos dos veículos se deslocarem vazios, uma ótima comunicação com os motoristas e um relacionamento profissional com colegas mostrando total respeito e disponibilidade em ajudar a sempre com melhorias, ideias, experiências e tornando o ambiente corporativo muito tranquilo e prazeroso para se trabalhar! Um grande profissional que tenho o maior prazer de chamar de amigo e a honraria de estar atuando junto no mercado de trabalho!'],
  ['Ailton Xavier', 'Logística', 'Tive a oportunidade de trabalhar com Rafael Araújo e posso afirmar que é um profissional extremamente comprometido, ético e colaborativo. Demonstra grande capacidade de análise, organização e foco em resultados, sempre mantendo uma postura positiva e proativa. Rafael se destaca pela facilidade em trabalhar em equipe e pela responsabilidade com que assume seus projetos. Recomendo fortemente seu trabalho.'],
  ['Maristela bonfim Bonfim', 'Técnico em Enfermagem', 'profissional competente e prestativo'],
  ['Angelita Cristina dos Santos', 'Analista de Transportes Jr/ MBA Gestão Logistica', 'Excelente profissional, visionário e estrategista.'],
  ['Jamil Ap B Cavalcante Filho', 'Analista de suporte e implantação | Analista e Desenvolvedor de Sistemas | Python | Análise de dados | Inteligência Artificial | Automação | Power BI | SQL | Go', 'Profissional dedicado ao aprendizado dentro da empresa e exercia suas funções designadas com êxito.'],
  ['Maristela Bonfim Terra', 'Profissional no LinkedIn', 'profissão altamente qualificado!'],
  ['Willa Gomes', 'Gerente Executivo de Operações', 'Profissional de alta competência, comprometido, engajado, com entregas dentro do prazo.'],
  ['Winnie Philipp Tavares', 'Agile Master | Scrum Master | SAFe Scrum Master 6.0 | TKP | KMP | PSM | PSPO | Liderança de Equipes', 'Excelente profissional, focado, comprometido, sempre disposto a auxiliar e facilitar o serviço do grupo. Um verdadeiro profissional de valor que tem muito a agregar à qualquer organização.'],
  ['Rafaela Adolpho', 'Analista Financeira | Contas a Pagar | LATAM | Espanhol Avançado | Processos Financeiros | Tratativa de Bloqueios | Compras | Contas a receber | Conciliação Bancária | Cobranças de inadimplências.', 'Profissional competente, focado.'],
  ['Rafaela Araujo', 'Profissional com experiência em Atendimento, Caixa, Excel e Rotinas Administrativas', 'Profissional dedicado e sempre focado com a qualidade e a satisfação.']
];

export default function CareerPlus() {
  return (
    <section id="formacao" className="career-plus-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Perfil completo</span>
          <h2>Formação, cursos & <span className="gradient-text">recomendações</span></h2>
          <p className="section-description">Experiência, aprendizado contínuo e reconhecimento profissional reunidos em uma única apresentação.</p>
        </div>
        <div className="career-plus-grid">
          <article className="career-panel"><div className="career-panel-title"><GraduationCap size={21} /><h3>Formação</h3></div>{education.map(item => <div className="career-item" key={item.title}><strong>{item.title}</strong><span>{item.detail}</span></div>)}</article>
          <article className="career-panel"><div className="career-panel-title"><Award size={21} /><h3>Licenças e certificados</h3></div>{certifications.map(item => <div className="career-item" key={item.title}><strong>{item.title}</strong><span>{item.issuer} · {item.date}</span></div>)}</article>
          <article className="career-panel"><div className="career-panel-title"><Languages size={21} /><h3>Idiomas</h3></div><div className="language-row"><strong>Português</strong><span>Nativo / bilíngue</span></div><div className="language-row"><strong>Inglês</strong><span>Básico a intermediário</span></div></article>
          <article className="career-panel"><div className="career-panel-title"><HeartHandshake size={21} /><h3>Voluntariado</h3></div><div className="career-item"><strong>Mesário</strong><span>Tribunal Regional Eleitoral de São Paulo · desde 2014</span></div><p className="career-muted">Atuação como mesário no processo eleitoral.</p></article>
        </div>
        <div className="recommendations-block"><div className="career-panel-title"><Quote size={21} /><h3>Recomendações no LinkedIn · 10 recebidas</h3></div><div className="recommendations-grid">{recommendations.map(([name, role, text]) => <article className="recommendation-card" key={name + role}><div className="quote-mark">“</div><p>{text}</p><strong>{name}</strong><span>{role}</span></article>)}</div></div>
        <div className="career-plus-link"><a href="https://www.linkedin.com/in/rafael-araujo1992/" target="_blank" rel="noopener noreferrer">Ver perfil completo no LinkedIn <ExternalLink size={16} /></a></div>
      </div>
    </section>
  );
}
