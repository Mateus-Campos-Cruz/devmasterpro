import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Dor } from './components/Dor';
import { Solucao } from './components/Solucao';
import { Modulos } from './components/Modulos';
import { Qualificacao } from './components/Qualificacao';
import { Mentor } from './components/Mentor';
import { Depoimentos } from './components/Depoimentos';
import { Bonus } from './components/Bonus';
import { Oferta } from './components/Oferta';
import { Garantia } from './components/Garantia';
import { FAQ } from './components/FAQ';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Dor />
      <Solucao />
      <Modulos />
      <Qualificacao />
      <Mentor />
      <Depoimentos />
      <Bonus />
      <Oferta />
      <Garantia />
      <FAQ />
      <CtaFinal />
      <Footer />
    </>
  );
}

export default App;
