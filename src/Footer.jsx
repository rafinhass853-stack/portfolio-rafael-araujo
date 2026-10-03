import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">© {new Date().getFullYear()} Rafael Araujo · Logística, Operações & Tecnologia</p>
        <p className="footer-subtext">São Carlos/SP · Construindo soluções para problemas reais.</p>
      </div>
    </footer>
  );
}
