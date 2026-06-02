import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo" style={{ justifyContent: 'center', marginBottom: '24px' }}>&lt;/&gt; DevMaster<span>Pro</span></div>
        <div className="footer-links">
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Contato</a>
        </div>
        <p>© 2024 DevMaster Pro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
