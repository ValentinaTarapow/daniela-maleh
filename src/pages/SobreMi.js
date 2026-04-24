import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './SobreMi.css';

const SobreMi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="sobre-mi-page">
        <div className="sobre-mi-container">
          <h1>Sobre mí</h1>
          
          <section className="sobre-mi-section">
            <h2>Formación</h2>
            <p>
              Hice un año de clínica médica en el Hospital Pirovano y luego me formé en dermatología
              en el Hospital Fernández.
            </p>
            <p>
              Tuve la oportunidad de capacitarme varias veces en la clínica Dermik de Barcelona.
            </p>
          </section>

          <section className="sobre-mi-section">
            <h2>Speaker y docencia</h2>
            <p>
              Soy Speaker de Merz Argentina: doy Webinars y charlas para capacitar a colegas. En
              mi clínica Due Derma dicto cursos para médicos.
            </p>
          </section>

          <section className="sobre-mi-section">
            <h2>Actualización y enfoque</h2>
            <p>
              Busco actualizarme permanentemente asistiendo a congresos y capacitaciones, para
              darle a mis pacientes los mejores tratamientos.
            </p>
          </section>

          <Link to="/" className="sobre-mi-back">
            ← Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SobreMi;
