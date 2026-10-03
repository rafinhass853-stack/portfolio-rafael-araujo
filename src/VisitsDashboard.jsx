import React, { useEffect, useMemo, useState } from 'react';
import { Activity, ArrowLeft, CalendarDays, Eye, RefreshCw, Users } from 'lucide-react';
import { database } from './firebase';
import { usePresence } from './usePresence';

const DAY_NAMES = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getLastDays(count = 14) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (count - 1 - index));
    return date;
  });
}

function formatDateTime(timestamp) {
  if (!timestamp) return 'Ainda não há visitas';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(new Date(timestamp));
}

function VisitsDashboard() {
  const onlineCount = usePresence();
  const [totalVisits, setTotalVisits] = useState(0);
  const [lastVisit, setLastVisit] = useState(null);
  const [daily, setDaily] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refs = {
      total: database.ref('analytics/totalVisits'),
      last: database.ref('analytics/lastVisit'),
      daily: database.ref('analytics/daily')
    };

    const listeners = {
      total: snap => setTotalVisits(Number(snap.val()) || 0),
      last: snap => setLastVisit(snap.val() || null),
      daily: snap => setDaily(snap.val() || {})
    };

    refs.total.on('value', listeners.total);
    refs.last.on('value', listeners.last);
    refs.daily.on('value', listeners.daily);

    const timer = window.setTimeout(() => setLoading(false), 500);

    return () => {
      refs.total.off('value', listeners.total);
      refs.last.off('value', listeners.last);
      refs.daily.off('value', listeners.daily);
      window.clearTimeout(timer);
    };
  }, []);

  const days = useMemo(() => getLastDays(14), []);
  const chartData = useMemo(() => days.map(date => ({
    label: `${DAY_NAMES[date.getDay()]} ${String(date.getDate()).padStart(2, '0')}`,
    value: Number(daily[getDateKey(date)]) || 0
  })), [daily, days]);

  const maxValue = Math.max(1, ...chartData.map(item => item.value));
  const periodTotal = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="visits-dashboard">
      <header className="visits-dashboard-header">
        <div>
          <span className="visits-kicker">PORTFÓLIO · ADMIN</span>
          <h1>Painel de visitas</h1>
          <p>Acompanhe o movimento do seu portfólio em tempo real.</p>
        </div>
        <div className="visits-header-actions">
          <button className="visits-refresh" onClick={() => window.location.reload()}>
            <RefreshCw size={16} /> Atualizar
          </button>
          <a className="visits-back" href="/">
            <ArrowLeft size={16} /> Voltar ao site
          </a>
        </div>
      </header>

      <main className="visits-dashboard-main">
        <section className="visits-metrics">
          <article className="visit-metric">
            <div className="visit-metric-icon blue"><Eye size={20} /></div>
            <div><span>Total de visitas</span><strong>{totalVisits.toLocaleString('pt-BR')}</strong></div>
          </article>
          <article className="visit-metric">
            <div className="visit-metric-icon green"><Users size={20} /></div>
            <div><span>Online agora</span><strong>{onlineCount}</strong></div>
          </article>
          <article className="visit-metric">
            <div className="visit-metric-icon purple"><CalendarDays size={20} /></div>
            <div><span>Últimos 14 dias</span><strong>{periodTotal.toLocaleString('pt-BR')}</strong></div>
          </article>
          <article className="visit-metric">
            <div className="visit-metric-icon orange"><Activity size={20} /></div>
            <div><span>Última visita</span><strong className="metric-date">{formatDateTime(lastVisit)}</strong></div>
          </article>
        </section>

        <section className="visits-chart-card">
          <div className="visits-card-heading">
            <div><span className="visits-kicker">DESEMPENHO</span><h2>Visitas por dia</h2></div>
            <span className="visits-period">Últimos 14 dias</span>
          </div>
          <div className="visits-chart" aria-label="Gráfico de visitas por dia">
            {loading ? <div className="visits-empty">Carregando dados...</div> : chartData.map(item => (
              <div className="chart-column" key={item.label}>
                <div className="chart-value">{item.value}</div>
                <div className="chart-track">
                  <div className="chart-bar" style={{ height: `${Math.max(5, (item.value / maxValue) * 100)}%` }} />
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="visits-lower-grid">
          <article className="visits-info-card">
            <div className="visits-card-heading"><div><span className="visits-kicker">AGORA</span><h2>Status</h2></div></div>
            <div className="status-row"><span className="status-dot" /> <strong>{onlineCount} visitante{onlineCount === 1 ? '' : 's'} online</strong></div>
            <p>O número é atualizado automaticamente pelo Firebase enquanto os visitantes mantêm a conexão aberta.</p>
          </article>
          <article className="visits-info-card">
            <div className="visits-card-heading"><div><span className="visits-kicker">ATIVIDADE</span><h2>Última visita</h2></div></div>
            <div className="last-visit-big">{formatDateTime(lastVisit)}</div>
            <p>As visitas são contabilizadas uma vez por sessão do navegador.</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default VisitsDashboard;
