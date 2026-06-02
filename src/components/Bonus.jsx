import React from 'react';

export function Bonus() {
  return (
    <section className="section" id="bonus">
      <div className="container">
        <h2 className="text-center fade-up">Bônus Exclusivos para esta turma</h2>
        <p className="subtitle fade-up">Acelere ainda mais os seus resultados com estes presentes.</p>

        <div className="bonus-list fade-up">
          <div className="bonus-item">
            <div className="bonus-info">
              <h4>🎁 Guia de Currículo para Dev Júnior</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Templates e palavras-chave que os robôs de recrutamento amam.</p>
            </div>
            <div className="bonus-value">Valor: R$ 197</div>
          </div>
          <div className="bonus-item">
            <div className="bonus-info">
              <h4>🎁 Pack de 50 Projetos para Portfólio</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nunca mais fique sem saber o que codar para impressionar nas entrevistas.</p>
            </div>
            <div className="bonus-value">Valor: R$ 297</div>
          </div>
          <div className="bonus-item">
            <div className="bonus-info">
              <h4>🎁 Simulador de Entrevistas Técnicas</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Saiba exatamente o que vão te perguntar e como responder com segurança.</p>
            </div>
            <div className="bonus-value">Valor: R$ 247</div>
          </div>
          <div className="bonus-item">
            <div className="bonus-info">
              <h4>🎁 Acesso à Comunidade Exclusiva no Discord</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Networking, parcerias e suporte técnico diário com alunos e mentores.</p>
            </div>
            <div className="bonus-value">Valor: R$ 147/mês</div>
          </div>
          <div className="bonus-item" style={{ borderColor: 'var(--accent)', background: 'rgba(124, 58, 237, 0.1)' }}>
            <div className="bonus-info">
              <h4>💎 Mentorias ao Vivo Mensais (6 sessões)</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Acompanhamento direto para tirar dúvidas de carreira e código.</p>
            </div>
            <div className="bonus-value">Valor: R$ 1.200</div>
          </div>
        </div>
        
        <p className="bonus-total fade-up delay-100">Você leva <span className="text-gradient">R$ 4.085 em bônus de graça</span> — só enquanto o timer estiver rodando.</p>
      </div>
    </section>
  );
}
