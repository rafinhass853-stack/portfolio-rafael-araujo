// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} Rafael Araujo. 
          Feito com ❤️ em React + Vite
        </p>
        <p className="footer-subtext">
          Transformando operações com tecnologia
        </p>
      </div>
    </footer>
  );
}