import React from 'react';

export function Dor() {
  return (
    <section className="section" id="dor">
      <div className="container">
        <h2 className="text-center fade-up">Você se identifica com isso?</h2>
        <p className="subtitle fade-up">A maioria dos iniciantes desiste não por falta de capacidade, mas por falta de um método claro.</p>
        
        <div className="grid-2">
          <div className="dor-card fade-up">
            <div className="icon">💸</div>
            <p>Você está preso num trabalho exaustivo que não te paga o que você realmente merece?</p>
          </div>
          <div className="dor-card fade-up delay-100">
            <div className="icon">🤯</div>
            <p>Sente que tecnologia é "difícil demais" ou que é só para quem nasceu sabendo matemática?</p>
          </div>
          <div className="dor-card fade-up">
            <div className="icon">🔄</div>
            <p>Já tentou aprender por tutoriais gratuitos no YouTube e acabou desistindo no meio do caminho?</p>
          </div>
          <div className="dor-card fade-up delay-100">
            <div className="icon">🚀</div>
            <p>Vê amigos ou conhecidos migrando pra tech, trabalhando de casa e ganhando 3x mais do que você?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
