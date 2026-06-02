import React from 'react';

export function Mentor() {
  return (
    <section className="section" id="mentor">
      <div className="container fade-up">
        <h2 className="text-center" style={{ marginBottom: '48px' }}>Seu Mentor na Jornada</h2>
        <div className="mentor-box">
          <img 
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
            alt="Mentor" 
            className="mentor-img" 
          />
          <div className="mentor-info">
            <h3>Diego Fernandes</h3>
            <span className="role">Engenheiro de Software</span>
            <p>Com mais de 10 anos de experiência atuando em grandes empresas de tecnologia globais, Diego já vivenciou todas as etapas do desenvolvimento web.</p>
            <p>Depois de mentorar dezenas de desenvolvedores júniores, criou o método <strong>DevMaster Pro</strong> para ajudar iniciantes a cortarem caminho e conquistarem a primeira vaga de forma mais rápida e assertiva.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
