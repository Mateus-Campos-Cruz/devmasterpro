import React from 'react';

export function Qualificacao() {
  return (
    <section className="section bg-alt" id="qualificacao">
      <div className="container">
        <div className="grid-2">
          <div className="who-card who-is fade-up">
            <h2>Para quem é?</h2>
            <ul className="who-list">
              <li>Quer mudar de carreira para a área de tecnologia.</li>
              <li>Está começando do zero, sem experiência em programação.</li>
              <li>Deseja conquistar liberdade geográfica e trabalhar remotamente.</li>
              <li>Busca consistência, um método comprovado e resultados reais.</li>
            </ul>
          </div>
          <div className="who-card who-not fade-up delay-100">
            <h2>Para quem NÃO é?</h2>
            <ul className="who-list">
              <li>Quem busca "esquemas" de riqueza rápida sem esforço.</li>
              <li>Quem não tem pelo menos 1h por dia para dedicar ao curso e à prática.</li>
              <li>Quem apenas coleciona cursos, mas nunca aplica o que aprende.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
