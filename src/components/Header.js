import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { showSpeakerYCursos } from '../config/siteFeatures';
import './Header.css';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Función para ir al inicio
  const goToHome = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Función para navegar a una sección del home
  const goToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      // Ya estamos en el home, solo hacer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navegar al home y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  // Función para navegar a una página
  const goToPage = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
          <img src={logoImage} alt="Dra Maleh" className="logo-image" />
        </div>

        {/* Navegación desktop */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li>
              <button className="nav-link" onClick={goToHome}>
                Inicio
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => goToSection('about')}>
                Sobre mí
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => goToPage('/tratamientos')}>
                Tratamientos
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => goToSection('equipo')}>
                Equipo
              </button>
            </li>
            {showSpeakerYCursos && (
              <>
                <li>
                  <button className="nav-link" onClick={() => goToPage('/speaker')}>
                    Speaker
                  </button>
                </li>
                <li>
                  <button className="nav-link" onClick={() => goToPage('/cursos')}>
                    Cursos
                  </button>
                </li>
              </>
            )}
            <li>
              <button className="nav-link" onClick={() => goToSection('contact')}>
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa para mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú mobile */}
      <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-mobile-list">
          <li>
            <button className="nav-mobile-link" onClick={goToHome}>
              Inicio
            </button>
          </li>
          <li>
            <button className="nav-mobile-link" onClick={() => goToSection('about')}>
              Sobre mí
            </button>
          </li>
          <li>
            <button className="nav-mobile-link" onClick={() => goToPage('/tratamientos')}>
              Tratamientos
            </button>
          </li>
          <li>
            <button className="nav-mobile-link" onClick={() => goToSection('equipo')}>
              Equipo
            </button>
          </li>
          {showSpeakerYCursos && (
            <>
              <li>
                <button className="nav-mobile-link" onClick={() => goToPage('/speaker')}>
                  Speaker
                </button>
              </li>
              <li>
                <button className="nav-mobile-link" onClick={() => goToPage('/cursos')}>
                  Cursos
                </button>
              </li>
            </>
          )}
          <li>
            <button className="nav-mobile-link" onClick={() => goToSection('contact')}>
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

