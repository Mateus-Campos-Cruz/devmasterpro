import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

export function Oferta() {
  const countdown = useCountdown(48);

  return (
    <section className="section offer-section" id="comprar">
      <div className="container fade-up">
        <div className="offer-card">
          <h2>A hora é agora!</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Tudo que você precisa para se tornar um Dev Fullstack de alto nível.</p>
          
          <div className="price-old">De: R$ 4.997</div>
          <div className="price-installments">12x de R$ 197 sem juros</div>
          <div className="price-new"><span>ou </span>R$ 1.997<span> à vista</span></div>
          
          <ul className="offer-features">
            <li><i>✓</i> Acesso ao curso completo DevMaster Pro</li>
            <li><i>✓</i> Todos os 5 Bônus Exclusivos</li>
            <li><i>✓</i> Suporte técnico na comunidade</li>
            <li><i>✓</i> Certificado de Conclusão válido</li>
            <li><i>✓</i> Acesso imediato a plataforma</li>
          </ul>

          <a href="#" className="btn btn-primary" style={{ width: '100%', fontSize: '1.25rem', padding: '20px' }}>
            Garantir minha vaga agora
          </a>
          
          <div style={{ marginTop: '16px' }}>
            <a href="#" className="btn btn-ghost" style={{ width: '100%', padding: '12px', fontSize: '1rem' }}>
              Entrar com desconto de 60%
            </a>
          </div>

          <span className="micro-copy" style={{ marginTop: '24px' }}>
            🔒 Compra 100% segura · Garantia de 7 dias<br />
            <span style={{ display: 'inline-block', marginTop: '8px' }}>Preço especial só nas próximas <span className="text-urgency">{countdown}</span></span>
          </span>
        </div>
      </div>
    </section>
  );
}
