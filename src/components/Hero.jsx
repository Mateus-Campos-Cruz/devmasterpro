import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

export function Hero() {
  const countdown = useCountdown(48);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content fade-up">
        <div className="timer-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Preço especial encerra em: <span>{countdown}</span>
        </div>
        
        <h1>Aprenda a programar do zero e conquiste sua <span className="text-gradient">vaga de dev em 6 meses</span></h1>
        <p className="subheadline">O método prático que levou +3.000 alunos do 0 absoluto a construir projetos reais e entrar no mercado tech com salário médio de R$ 4.800.</p>
        
        <div className="cta-group">
          <a href="#comprar" className="btn btn-primary btn-lg" style={{ padding: '20px 40px', fontSize: '1.25rem' }}>
            🚀 Quero entrar no DevMaster Pro
          </a>
          <span className="micro-copy">🔒 Compra 100% segura · Acesso imediato · Garantia de 7 dias</span>
        </div>
        
        <div className="trust-badges fade-up delay-200">
          <span>⭐⭐⭐⭐⭐</span>
          <p>+3.000 Alunos Satisfeitos e Empregados</p>
        </div>
      </div>
    </section>
  );
}
