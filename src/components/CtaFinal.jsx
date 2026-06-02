import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

export function CtaFinal() {
  const countdown = useCountdown(48);

  return (
    <section className="final-cta" id="cta-final">
      <div className="container fade-up">
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: '24px', maxWidth: '800px', marginInline: 'auto' }}>
          A única habilidade que cresce enquanto o mercado colapsa.
        </h2>
        <p className="subtitle" style={{ marginBottom: '40px', color: '#fff' }}>
          A única coisa entre você e sua vaga de dev é a sua decisão agora. O cronômetro está rodando.
        </p>
        
        <a href="#comprar" className="btn btn-primary btn-lg" style={{ padding: '20px 48px', fontSize: '1.25rem' }}>
          Começar minha transformação
        </a>
        <span className="micro-copy" style={{ marginTop: '16px' }}>
          Faltam <span className="text-urgency">{countdown}</span> para o fim do desconto.
        </span>
      </div>
    </section>
  );
}
