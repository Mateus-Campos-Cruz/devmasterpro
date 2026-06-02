import React, { useState } from 'react';

const modulesData = [
  {
    num: "01",
    title: "Fundamentos da Web",
    content: "A base de tudo. Você vai dominar HTML5, CSS3, semântica web, acessibilidade e criar layouts responsivos do zero, sem depender de templates."
  },
  {
    num: "02",
    title: "Javascript Moderno",
    content: "A linguagem da web. Aprenda lógica de programação, manipulação do DOM, consumo de APIs REST, ES6+, Promises e Async/Await com projetos reais."
  },
  {
    num: "03",
    title: "React.js & Ecossistema",
    content: "A biblioteca mais pedida pelo mercado. Domine componentes, React Hooks, gerenciamento de estado global, roteamento e introdução ao Next.js."
  },
  {
    num: "04",
    title: "Backend com Node.js",
    content: "Construa o motor das aplicações. Aprenda a criar APIs RESTful seguras e escaláveis usando Node.js, Express, middlewares e JWT para autenticação."
  },
  {
    num: "05",
    title: "Bancos de Dados",
    content: "Armazenamento de dados no mundo real. Trabalhe com bancos relacionais (PostgreSQL) e NoSQL (MongoDB), modelagem e o ORM Prisma."
  },
  {
    num: "06",
    title: "Carreira & Mercado",
    content: "O segredo da aprovação. Como otimizar seu LinkedIn, montar um currículo magnético, se comportar em entrevistas técnicas e conquistar a primeira vaga ou freelas."
  }
];

export function Modulos() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleModule = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="modulos">
      <div className="container">
        <h2 className="text-center fade-up">O que você vai aprender na prática</h2>
        <p className="subtitle fade-up">Uma trilha de 6 módulos desenhada para te levar do zero à primeira vaga.</p>

        <div className="modules-grid fade-up">
          {modulesData.map((mod, index) => (
            <div 
              key={index} 
              className={`module-card ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="module-header" onClick={() => toggleModule(index)}>
                <div className="module-title">
                  <span className="module-num">{mod.num}</span> {mod.title}
                </div>
                <svg className="module-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="module-body">
                <div className="module-body-content">
                  {mod.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
