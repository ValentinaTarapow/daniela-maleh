import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import { showTrayectoriaCompletaLink, showSpeakerYCursos } from './config/siteFeatures';
import Footer from './components/Footer';
import SobreMi from './pages/SobreMi';
import Tratamientos from './pages/Tratamientos';
import Speaker from './pages/Speaker';
import Cursos from './pages/Cursos';

// Función para calcular años de trayectoria desde Junio 2016
const calculateYears = () => {
  const foundingDate = new Date(2016, 5); // Junio 2016 (mes 5 = junio)
  const today = new Date();
  let years = today.getFullYear() - foundingDate.getFullYear();
  // Si aún no llegamos a junio este año, restar 1
  if (today.getMonth() < foundingDate.getMonth()) {
    years--;
  }
  return years;
};

// Datos de las cards de Sobre mí
const aboutCards = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Formación',
    description:
      'Hice un año de clínica médica en el Hospital Pirovano y luego me formé en dermatología en el Hospital Fernández. Tuve la oportunidad de capacitarme varias veces en la clínica Dermik de Barcelona.',
  },
  {
    icon: 'fas fa-microphone',
    title: 'Speaker y docencia',
    description:
      'Soy Speaker de Merz Argentina: doy Webinars y charlas para capacitar a colegas. En mi clínica Due Derma dicto cursos para médicos.',
  },
  {
    icon: 'fas fa-star',
    title: 'Actualización y enfoque',
    description:
      'Busco actualizarme permanentemente asistiendo a congresos y capacitaciones, para darle a mis pacientes los mejores tratamientos.',
  },
];

// Componente HomePage (página principal)
function HomePage() {
  const yearsOfExperience = calculateYears();
  const [aboutCardIndex, setAboutCardIndex] = useState(0);

  const nextAboutCard = () => {
    setAboutCardIndex((prev) => (prev + 1) % aboutCards.length);
  };

  const prevAboutCard = () => {
    setAboutCardIndex((prev) => (prev - 1 + aboutCards.length) % aboutCards.length);
  };

  return (
    <>
      <Header />
      {/* Contenedor con snap SOLO para las secciones */}
      <div className="scroll-container">
        <section id="home" className="section section-1">
          <div className="section-content hero-content">
            <h1>Dra. Daniela Maleh</h1>
            <p className="hero-subtitle">Médica dermatóloga y estética</p>
            <p className="hero-tagline">Fundadora de <a href="https://duederma.com.ar/" target="_blank" rel="noopener noreferrer" className="hero-link">Due Derma</a> · Más de {yearsOfExperience} años de trayectoria</p>
            <div className="hero-buttons">
              <button className="hero-btn hero-btn-primary" onClick={() => document.getElementById('treatments').scrollIntoView({ behavior: 'smooth' })}>
                Ver tratamientos
              </button>
              <a 
                href="https://api.whatsapp.com/send?phone=5491131420521&text=Hola%20Dra%20Maleh,%20quisiera%20solicitar%20una%20consulta..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-btn hero-btn-secondary"
              >
                Solicitar consulta
              </a>
            </div>
          </div>
        </section>
        
        <section id="about" className="section section-2">
          <div className="section-content about-me-content">
            <h1>Sobre mí</h1>
            
            {/* Grid para desktop */}
            <div className="about-me-grid">
              {aboutCards.map((card, index) => (
                <div key={index} className="about-me-card">
                  <div className="about-me-icon">
                    <i className={card.icon}></i>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>

            {/* Carrusel para móvil */}
            <div className="about-me-carousel">
              <button className="about-carousel-btn" onClick={prevAboutCard}>
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="about-carousel-wrapper">
                <div className="about-me-card">
                  <div className="about-me-icon">
                    <i className={aboutCards[aboutCardIndex].icon}></i>
                  </div>
                  <h3>{aboutCards[aboutCardIndex].title}</h3>
                  <p>{aboutCards[aboutCardIndex].description}</p>
                </div>
              </div>
              
              <button className="about-carousel-btn" onClick={nextAboutCard}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            
            {/* Dots del carrusel */}
            <div className="about-carousel-dots">
              {aboutCards.map((_, index) => (
                <button
                  key={index}
                  className={`about-dot ${index === aboutCardIndex ? 'active' : ''}`}
                  onClick={() => setAboutCardIndex(index)}
                />
              ))}
            </div>

            {showTrayectoriaCompletaLink && (
              <Link to="/sobre-mi" className="about-me-link">
                Conocer mi trayectoria completa
              </Link>
            )}
          </div>
        </section>

        <section id="treatments" className="section section-3">
          <div className="treatments-content">
            <div className="treatments-heading">
              <h1 className="treatments-title">Tratamientos</h1>
              <div className="treatments-title-divider" aria-hidden="true">
                <span className="treatments-title-divider__line" />
                <span className="treatments-title-divider__dot" />
                <span className="treatments-title-divider__line" />
              </div>
              <p className="treatments-subtitle">Especializada en Medicina Inyectable</p>
            </div>
            
            <div className="treatments-description">
              <p>
                Abordamos cada caso desde un{' '}
                <span className="treatments-em">enfoque dermatológico integral</span>, combinando{' '}
                <span className="treatments-em">medicina inyectable</span> y{' '}
                <span className="treatments-em">procedimientos mínimamente invasivos</span>. Cada
                tratamiento se indica de forma personalizada, con{' '}
                <span className="treatments-em">criterios médicos y seguimiento continuo</span>.
              </p>
              <p>
                <span className="treatments-em">Explorá los tratamientos disponibles</span>
                {' '}o accedé a la{' '}
                <span className="treatments-em">propuesta completa de Due Derma</span>.
              </p>
            </div>

            <div className="treatments-buttons">
              <Link to="/tratamientos" className="treatments-btn treatments-btn-primary">
                Ver todos los tratamientos
              </Link>
              <a 
                href="https://duederma.com.ar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="treatments-btn treatments-btn-secondary"
              >
                Ver tratamientos en Due Derma <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="equipo" className="section section-4">
          <div className="section-4-left">
            <span className="equipo-blob equipo-blob--1" aria-hidden="true" />
            <span className="equipo-blob equipo-blob--2" aria-hidden="true" />
            <div className="section-content equipo-content">
              <h1>Equipo Due Derma</h1>
              <p className="equipo-subtitle">Un espacio médico especializado en dermatología clínica y estética</p>
              
              <div className="equipo-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <a 
                href="https://duederma.com.ar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="equipo-btn"
              >
                Ir a Due Derma <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="section-4-right">
            <div className="recepcion-image"></div>
          </div>
        </section>

        {showSpeakerYCursos && (
          <section id="speaker" className="section section-5">
            <div className="section-content speaker-content">
              <h1>Speaker & Cursos</h1>
              <p className="speaker-subtitle">Disertante en congresos, formadora de profesionales y creadora de cursos especializados</p>

              <div className="speaker-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

              <div className="speaker-buttons">
                <Link to="/speaker" className="speaker-btn speaker-btn-primary">
                  Ver charlas y participaciones
                </Link>
                <Link to="/cursos" className="speaker-btn speaker-btn-primary">
                  Ver cursos
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
      
      {/* Footer fuera del scroll snap */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=5491131420521&text=Hola%20Dra%20Maleh,%20quisiera%20recibir%20más%20información%20sobre..." 
         target="_blank" 
         rel="noopener noreferrer" 
         className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

// Componente principal con rutas
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/tratamientos" element={<Tratamientos />} />
      <Route
        path="/speaker"
        element={showSpeakerYCursos ? <Speaker /> : <Navigate to="/" replace />}
      />
      <Route
        path="/cursos"
        element={showSpeakerYCursos ? <Cursos /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
