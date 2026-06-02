import React from 'react';

export function Depoimentos() {
  return (
    <section className="section bg-alt" id="depoimentos">
      <div className="container">
        <h2 className="text-center fade-up">O que dizem nossos alunos</h2>
        <p className="subtitle fade-up">Resultados reais de quem já esteve exatamente onde você está agora.</p>

        <div className="grid-3">
          <div className="testimonial-card fade-up">
            <p className="testimonial-text">"Em 5 meses consegui minha vaga como Dev Jr! O módulo de React é incrível, e os projetos que criei me destacaram nas entrevistas."</p>
            <div className="testimonial-author">
              <div className="author-avatar">MP</div>
              <div className="author-info">
                <h4>Marcos Paulo</h4>
                <span>Desenvolvedor Frontend Jr</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card fade-up delay-100">
            <p className="testimonial-text">"Eu era de RH e tinha medo de não conseguir aprender. A didática é perfeita, hoje trabalho 100% remoto para uma empresa de SP."</p>
            <div className="testimonial-author">
              <div className="author-avatar">LC</div>
              <div className="author-info">
                <h4>Letícia Costa</h4>
                <span>Desenvolvedora Fullstack Jr</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card fade-up delay-200">
            <p className="testimonial-text">"Melhor investimento que fiz. A comunidade ajudou muito na hora de tirar dúvidas e os projetos me garantiram a vaga."</p>
            <div className="testimonial-author">
              <div className="author-avatar">RS</div>
              <div className="author-info">
                <h4>Rafael Souza</h4>
                <span>Engenheiro de Software Jr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
