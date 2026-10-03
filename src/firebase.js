/*
 * Firebase Realtime Database
 *
 * O projeto Firebase já está definido no .firebaserc:
 * rafaelaraujo-15a60
 *
 * IMPORTANTE:
 * Preencha apenas a databaseURL abaixo com a URL do Realtime Database
 * do projeto no Firebase Console.
 */
const firebaseConfig = {
  projectId: 'rafaelaraujo-15a60',
  databaseURL: 'https://rafaelaraujo-15a60-default-rtdb.firebaseio.com/'
};

if (
  !firebaseConfig.databaseURL ||
  firebaseConfig.databaseURL.includes('COLOQUE_AQUI')
) {
  console.warn(
    '[Firebase Presence] Configure a databaseURL em src/firebase.js antes de publicar.'
  );
}

if (!window.firebase) {
  throw new Error(
    'Firebase SDK não carregado. Verifique os scripts Firebase no index.html.'
  );
}

if (!window.firebase.apps.length) {
  window.firebase.initializeApp(firebaseConfig);
}

export const database = window.firebase.database();
