import React from 'react';
import { Users } from 'lucide-react';
import { usePresence } from './usePresence';
import { useVisitStats } from './useVisitStats';

function OnlineVisitors() {
  const onlineCount = usePresence();
  const totalVisits = useVisitStats();

  return (
    <div className="online-visitors" aria-live="polite" title="Estatísticas do portfólio">
      <span className="online-visitors-dot" aria-hidden="true" />
      <Users size={15} strokeWidth={2.2} />
      <span>
        {onlineCount === 1
          ? '1 visitante online'
          : `${onlineCount} visitantes online`}
      </span>
      <span className="online-visitors-separator" aria-hidden="true">•</span>
      <span>
        {totalVisits === 1 ? '1 visita' : `${totalVisits} visitas`}
      </span>
    </div>
  );
}

export default OnlineVisitors;
