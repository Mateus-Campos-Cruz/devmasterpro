import React from 'react';

export function Solucao() {
  return (
    <section className="section bg-alt" id="solucao">
      <div className="container">
        <h2 className="text-center fade-up">Conheça o <span className="text-gradient">DevMaster Pro</span></h2>
        <p class="subtitle fade-up">Um método validado que ignora teoria inútil e foca no que realmente importa: prática, portfólio e mercado.</p>

        <div className="grid-3">
          <div className="solution-feature fade-up">
            <div className="icon">💻</div>
            <h3>100% Prático</h3>
            <p>Você vai aprender codando desde o primeiro dia. Nada de aulas teóricas arrastadas. É mão na massa do início ao fim.</p>
          </div>
          <div className="solution-feature fade-up delay-100">
            <div className="icon">🏗️</div>
            <h3>Projetos Reais</h3>
            <p>Construa aplicações completas que impressionam recrutadores e crie um portfólio impossível de ser ignorado.</p>
          </div>
          <div className="solution-feature fade-up delay-200">
            <div className="icon">🎯</div>
            <h3>Foco em Mercado</h3>
            <p>Aprenda as tecnologias exatas que as empresas estão exigindo hoje, além de técnicas de entrevista e LinkedIn.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
