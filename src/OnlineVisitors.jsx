import React from 'react';
import { Users } from 'lucide-react';
import { usePresence } from './usePresence';

function OnlineVisitors() {
  const onlineCount = usePresence();

  return (
    <div className="online-visitors" aria-live="polite">
      <span className="online-visitors-dot" aria-hidden="true" />
      <Users size={15} strokeWidth={2.2} />
      <span>
        {onlineCount === 1
          ? '1 visitante online'
          : `${onlineCount} visitantes online`}
      </span>
    </div>
  );
}

export default OnlineVisitors;
