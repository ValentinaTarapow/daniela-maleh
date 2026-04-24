import React from "react";
import styled from "styled-components";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <FooterGrid>
        {/* Columna izquierda - Contacto */}
        <Section>
          <h4>Contacto</h4>
          <p>
            <a 
href="https://api.whatsapp.com/send?phone=5491150535098&text=Hola%20Dra%20Maleh,%20quisiera%20recibir%20más%20información%20sobre..."
              target="_blank" rel="noreferrer"
            >
              <FaWhatsapp /> +54 11 5053-5098
            </a>
          </p>
          <p>
            <a href="mailto:danielamaleh@gmail.com">
              <FaEnvelope /> danielamaleh@gmail.com
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> Gallo 1671, 1° Piso, Recoleta, Buenos Aires
          </p>
        </Section>

        {/* Columna derecha - Redes */}
        <Section>
          <h4>Síguenos</h4>
          <SocialGroup>
            <span>Dra Daniela Maleh</span>
            <SocialLinks>
              <a href="https://www.facebook.com/dradanielamaleh" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/dradanielamaleh" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </SocialLinks>
          </SocialGroup>
          <SocialGroup>
            <span>Due Derma</span>
            <SocialLinks>
              <a href="https://duederma.com.ar/" target="_blank" rel="noopener noreferrer" aria-label="Sitio web Due Derma">
                <FaGlobe />
              </a>
              <a href="https://www.facebook.com/DueDerma/" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/duederma" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </SocialLinks>
          </SocialGroup>
        </Section>
      </FooterGrid>
    </FooterWrapper>
  );
};

export default Footer;

// --- Styled Components ---
const FooterWrapper = styled.footer`
  background: #0d0807;
  color: #ffffff;
  padding: 2.5rem 1.5rem;
  font-size: 0.95rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Section = styled.div`
  h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  p {
    margin: 0.4rem 0;
    color: #e0e3e7;
  }

  a {
    color: #e0e3e7;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }

  svg {
    margin-right: 6px;
    vertical-align: middle;
    color: #e0e3e7;
    transition: color 0.2s ease;
  }

  a:hover svg {
    color: #ffffff;
  }
`;

const SocialGroup = styled.div`
  margin-bottom: 1rem;

  span {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #e0e3e7;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    font-size: 1.3rem;
    color: #e0e3e7;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;


