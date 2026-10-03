import { useEffect, useState } from 'react';
import { database } from './firebase';

function getLocalDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function useVisitStats() {
  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    const totalRef = database.ref('analytics/totalVisits');
    const totalListener = (snapshot) => {
      setTotalVisits(Number(snapshot.val()) || 0);
    };

    totalRef.on('value', totalListener);

    const sessionKey = 'portfolio_visit_registered_v1';
    if (!sessionStorage.getItem(sessionKey)) {
      sessionStorage.setItem(sessionKey, '1');

      totalRef.transaction((current) => (Number(current) || 0) + 1);

      const dailyRef = database.ref(`analytics/daily/${getLocalDateKey()}`);
      dailyRef.transaction((current) => (Number(current) || 0) + 1);

      database.ref('analytics/lastVisit').set(
        window.firebase.database.ServerValue.TIMESTAMP
      );
    }

    return () => totalRef.off('value', totalListener);
  }, []);

  return totalVisits;
}
