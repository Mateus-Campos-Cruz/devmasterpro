import React, { useState } from 'react';

const faqData = [
  {
    question: "Preciso ter conhecimento prévio?",
    answer: "Não! O curso é focado em te pegar pela mão do absoluto zero e te levar até o nível profissional."
  },
  {
    question: "Quanto tempo de acesso eu tenho?",
    answer: "Você terá 1 ano de acesso completo a todas as aulas, atualizações e bônus da plataforma."
  },
  {
    question: "E se eu tiver dúvidas?",
    answer: "Temos suporte diário na comunidade exclusiva no Discord e mentorias ao vivo mensais para garantir que você não trave no meio do caminho."
  },
  {
    question: "Consigo conciliar com o trabalho?",
    answer: "Sim, as aulas são focadas e direto ao ponto. Basta dedicar cerca de 1 hora por dia para conseguir acompanhar e aplicar tudo."
  },
  {
    question: "Vou receber certificado?",
    answer: "Sim! Ao final do curso você recebe um certificado de conclusão válido em todo o território nacional."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="text-center fade-up" style={{ marginBottom: '48px' }}>Perguntas Frequentes</h2>
        
        <div className="faq-grid fade-up">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`module-card ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="module-header" onClick={() => toggleFaq(index)}>
                <div style={{ fontWeight: 600 }}>{item.question}</div>
                <svg className="module-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="module-body">
                <div className="module-body-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
