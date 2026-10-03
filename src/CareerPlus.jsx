import React from 'react';
import { GraduationCap, Award, Languages, HeartHandshake, ExternalLink, Quote } from 'lucide-react';

const certifications = [
  {
    title: 'Crystal Reports XI - Desenvolvendo Relatórios',
    issuer: 'Datapar Ltda',
    date: 'Novembro de 2024'
  }
];

const education = [
  {
    title: 'UniCesumar',
    detail: 'Formação acadêmica — 2021 a 2024'
  }
];

const recommendations = [
  {
    name: 'Leandro Silva Rosa',
    text: 'Destaca conhecimento em logística e transportes, tratativas com clientes, roteirização para redução de deslocamentos vazios, comunicação com motoristas, relacionamento profissional e contribuição com melhorias.'
  },
  {
    name: 'Ailton Xavier',
    text: 'Ressalta comprometimento, ética, colaboração, capacidade de análise, organização, foco em resultados, trabalho em equipe, responsabilidade e postura proativa.'
  }
];

export default function CareerPlus() {
  return (
    <section id="formacao" className="career-plus-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Além da experiência</span>
          <h2>Formação, certificações & <span className="gradient-text">recomendações</span></h2>
          <p className="section-description">
            Informações públicas identificadas no LinkedIn, organizadas em uma apresentação mais profissional.
          </p>
        </div>

        <div className="career-plus-grid">
          <article className="career-panel">
            <div className="career-panel-title"><GraduationCap size={21} /><h3>Formação</h3></div>
            {education.map(item => (
              <div className="career-item" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </article>

          <article className="career-panel">
            <div className="career-panel-title"><Award size={21} /><h3>Certificações</h3></div>
            {certifications.map(item => (
              <div className="career-item" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.issuer} · {item.date}</span>
              </div>
            ))}
          </article>

          <article className="career-panel">
            <div className="career-panel-title"><Languages size={21} /><h3>Idiomas</h3></div>
            <div className="language-row"><strong>Português</strong><span>Nativo / bilíngue</span></div>
            <div className="language-row"><strong>Inglês</strong><span>Básico a intermediário</span></div>
          </article>

          <article className="career-panel">
            <div className="career-panel-title"><HeartHandshake size={21} /><h3>Voluntariado</h3></div>
            <div className="career-item">
              <strong>Mesário</strong>
              <span>Tribunal Regional Eleitoral de São Paulo · desde 2014</span>
            </div>
            <p className="career-muted">Atuação no atendimento e orientação de eleitores e organização do fluxo no dia da votação.</p>
          </article>
        </div>

        <div className="recommendations-block">
          <div className="career-panel-title"><Quote size={21} /><h3>Recomendações profissionais</h3></div>
          <div className="recommendations-grid">
            {recommendations.map(item => (
              <article className="recommendation-card" key={item.name}>
                <div className="quote-mark">“</div>
                <p>{item.text}</p>
                <strong>{item.name}</strong>
                <span>Recomendação no LinkedIn</span>
              </article>
            ))}
          </div>
        </div>

        <div className="career-plus-link">
          <a href="https://www.linkedin.com/in/rafael-araujo1992/" target="_blank" rel="noopener noreferrer">
            Ver perfil completo no LinkedIn <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
