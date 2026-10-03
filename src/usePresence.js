import { useEffect, useState } from 'react';
import { database } from './firebase';

export function usePresence() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    const presenceRef = database.ref('presence');
    const connectedRef = database.ref('.info/connected');

    const handlePresence = (snapshot) => {
      setOnlineCount(snapshot.numChildren());
    };

    const handleConnection = (snapshot) => {
      if (snapshot.val() !== true) return;

      const visitorRef = presenceRef.push();

      visitorRef
        .onDisconnect()
        .remove()
        .catch((error) => {
          console.error('[Firebase Presence] Falha no onDisconnect:', error);
        });

      visitorRef
        .set({
          connectedAt: window.firebase.database.ServerValue.TIMESTAMP
        })
        .catch((error) => {
          console.error('[Firebase Presence] Falha ao registrar visitante:', error);
        });
    };

    presenceRef.on('value', handlePresence);
    connectedRef.on('value', handleConnection);

    return () => {
      presenceRef.off('value', handlePresence);
      connectedRef.off('value', handleConnection);
    };
  }, []);

  return onlineCount;
}
