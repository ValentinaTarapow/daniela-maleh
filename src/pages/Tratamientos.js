import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Tratamientos.css';
import { showTratamientosImagenes } from '../config/siteFeatures';

const categoriasData = [
  {
    id: 'toxina-botulinica',
    nombre: 'Toxina Botulínica',
    tratamientos: [
      { 
        id: 'arrugas-frente', 
        nombre: 'Arrugas en frente, entrecejo y patas de gallo', 
        descripcion: `La toxina botulínica es una proteína purificada que actúa relajando temporalmente los músculos faciales, atenuando las arrugas de expresión que se forman con el movimiento natural del rostro.

El tratamiento se enfoca en tres zonas clave: la frente, el entrecejo y las patas de gallo. Mediante micro-inyecciones precisas, se logra suavizar las líneas de expresión de manera natural y armónica.

El procedimiento es rápido, prácticamente indoloro y no requiere tiempo de recuperación. A los 14 días se realiza un control de seguimiento para evaluar los resultados.

Recomendaciones post-tratamiento: evitar actividad física intensa y no aplicar maquillaje en la zona durante las primeras horas.`,
        resultados: '15 días posteriores a la aplicación',
        aplicacion: '30-60 min',
        duracion: '4 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'cocktail-champagne', 
        nombre: 'Cocktail Champagne', 
        descripcion: `El Cocktail Champagne es una de las técnicas más innovadoras en dermatología estética, que combina dos tratamientos de alta eficacia: ácido hialurónico y toxina botulínica.

Esta combinación sinérgica está especialmente diseñada para tratar las arrugas peribucales (alrededor de la boca). La toxina botulínica relaja el músculo para prevenir la contracción que genera las arrugas, mientras que el ácido hialurónico rellena los surcos ya existentes.

El resultado es una mejora notable en la textura y apariencia de la zona, con un efecto natural y rejuvenecedor que combate tanto las causas como las consecuencias del envejecimiento cutáneo.`,
        resultados: '15 días posteriores a la aplicación',
        aplicacion: '30-60 min',
        duracion: '6 a 9 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'toxina-preventiva', 
        nombre: 'Toxina Botulínica Preventiva', 
        descripcion: `La aplicación preventiva de toxina botulínica es una estrategia cada vez más utilizada en pacientes jóvenes que desean prevenir la formación de arrugas profundas antes de que se establezcan.

Al relajar suavemente los músculos de la frente, entrecejo y patas de gallo, se evita que los movimientos repetitivos generen líneas de expresión marcadas con el paso del tiempo.

El tratamiento se realiza mediante micro-inyecciones precisas, es rápido e indoloro. A los 14 días se programa un control de seguimiento.

Recomendaciones post-tratamiento: evitar actividad física intensa, natación y maquillaje en la zona el día de la aplicación.`,
        resultados: '15 días posteriores a la aplicación',
        aplicacion: '30-60 min',
        duracion: '4 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'bruxismo', 
        nombre: 'Bruxismo', 
        descripcion: `El bruxismo es una condición caracterizada por el apretamiento o rechinamiento involuntario de los dientes, que puede causar dolor mandibular, desgaste dental y tensión muscular.

La toxina botulínica se aplica directamente en el músculo masetero, logrando una relajación controlada que alivia los síntomas del bruxismo de manera efectiva y no invasiva.

El procedimiento consiste en micro-inyecciones precisas, es rápido y prácticamente indoloro. Los pacientes experimentan un alivio significativo de la tensión y el dolor asociados.

Recomendaciones post-tratamiento: evitar actividad física intensa y natación el día de la aplicación.`,
        resultados: '15 días posteriores a la aplicación',
        aplicacion: '15 min',
        duracion: '4 a 6 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'cuello', 
        nombre: 'Cuello', 
        descripcion: `Las bandas platismales y las arrugas horizontales del cuello son signos comunes del envejecimiento que pueden tratarse eficazmente con toxina botulínica.

El tratamiento consiste en la aplicación de micro-inyecciones en los músculos del cuello, logrando una relajación que suaviza las líneas horizontales y mejora el aspecto general de esta zona tan visible.

El procedimiento es rápido, mínimamente invasivo y con resultados naturales que rejuvenecen el perfil del cuello sin alterar la expresión facial.

Recomendaciones post-tratamiento: evitar actividad física intensa y natación el día de la aplicación.`,
        resultados: '15 días posteriores a la aplicación',
        aplicacion: '15 min',
        duracion: '4 a 6 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'hiperhidrosis', 
        nombre: 'Hiperhidrosis Axilar', 
        descripcion: `La hiperhidrosis axilar es una condición médica caracterizada por sudoración excesiva en las axilas, que puede afectar significativamente la calidad de vida y la confianza personal.

La toxina botulínica actúa bloqueando la transmisión nerviosa hacia las glándulas sudoríparas, reduciendo de manera notable la producción de sudor en la zona tratada.

El tratamiento se realiza mediante micro-inyecciones superficiales, es rápido y prácticamente indoloro. Los resultados son altamente satisfactorios y duraderos.

Preparación: asistir a la sesión sin desodorante. Recomendaciones post-tratamiento: evitar actividad física intensa el día de la aplicación.`,
        resultados: 'Entre el 3er y 5to día',
        aplicacion: '15 min',
        duracion: '5 a 14 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'sonrisa-gingival', 
        nombre: 'Sonrisa Gingival', 
        descripcion: `La sonrisa gingival se produce cuando al sonreír se expone una cantidad excesiva de encía superior, lo cual puede generar incomodidad estética en algunos pacientes.

La toxina botulínica se aplica estratégicamente en el músculo elevador del labio superior y del ala nasal, logrando una relajación controlada que reduce la retracción excesiva del labio al sonreír.

El resultado es una sonrisa más armónica y equilibrada, manteniendo la naturalidad de la expresión facial. El procedimiento es rápido y prácticamente indoloro.

Recomendaciones post-tratamiento: evitar actividad física intensa y no aplicar maquillaje en la zona el día de la aplicación.`,
        resultados: 'Entre el 3er y 5to día',
        aplicacion: '15 min',
        duracion: '4 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'rosacea', 
        nombre: 'Rosácea', 
        descripcion: `La rosácea es una condición crónica de la piel caracterizada por enrojecimiento facial, vasos sanguíneos visibles y, en algunos casos, brotes inflamatorios.

La toxina botulínica, aplicada de manera diluida en la dermis, actúa sobre los neurotransmisores que regulan la reactividad vascular, ayudando a controlar los síntomas de la rosácea.

El tratamiento logra una reducción significativa del edema, eritema y enrojecimiento facial. Además, ofrece beneficios adicionales como la disminución de la seborrea y la reducción del diámetro de los poros.

Recomendaciones post-tratamiento: evitar actividad física intensa y no aplicar maquillaje en la zona el día de la aplicación.`,
        resultados: 'Entre el 3er y 5to día',
        aplicacion: '15 min',
        duracion: '4 meses',
        anestesia: 'En crema'
      },
    ]
  },
  {
    id: 'fillers',
    nombre: 'Fillers',
    tratamientos: [
      { 
        id: 'blanching', 
        nombre: 'Blanching', 
        descripcion: `El Blanching es un tratamiento ideal para suavizar las arrugas peribucales causadas por la pérdida natural de colágeno, sin afectar la expresión del rostro.

Consiste en la aplicación de micro-inyecciones superficiales de ácido hialurónico de baja densidad, que devuelven la hidratación profunda y restauran la elasticidad que la piel necesita.

El resultado es un aspecto más suave y rejuvenecido de la zona perioral, manteniendo la naturalidad de los gestos faciales.`,
        aplicacion: '15 min',
        anestesia: 'En crema'
      },
      { 
        id: 'codigo-barras', 
        nombre: 'Código de barras', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

En la zona superior del labio van apareciendo progresivamente arrugas verticales conocidas como "código de barras". Este tratamiento con ácido hialurónico es ideal para tratar esta zona, devolviéndole hidratación y elasticidad para suavizar las arrugas y pliegues.

El tratamiento se realiza en 2 sesiones: la primera aplicación y un retoque a los 14 días si el paciente lo requiere.`,
        anestesia: 'En crema'
      },
      { 
        id: 'contorno-mandibular', 
        nombre: 'Contorno mandibular', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones estratégicas en el contorno mandibular para marcarlo y definirlo, otorgando mayor estructura y armonía al rostro.

El tratamiento se realiza en una única sesión, con resultados visibles de forma inmediata.`,
        aplicacion: '60 min',
        duracion: '9 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'surco-nasogeniano', 
        nombre: 'Surco nasogeniano', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones en el surco nasogeniano para suavizar los pliegues que van desde la nariz hasta las comisuras de la boca.

Este tratamiento suele combinarse con otros procedimientos inyectables para lograr un resultado más integral y armónico en el rejuvenecimiento facial.`,
        aplicacion: '15 min',
        duracion: '9 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'menton', 
        nombre: 'Mentón con ácido hialurónico', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones en el mentón para proyectarlo, otorgando mayor ángulo y definición al perfil facial. Este tratamiento permite armonizar las proporciones del rostro y mejorar visualmente la zona de la papada.

El procedimiento se realiza en una única sesión con resultados inmediatos.`,
        aplicacion: '15 min',
        duracion: '9 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'pomulos', 
        nombre: 'Pómulos con ácido hialurónico (Top model look)', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones en los pómulos para realzar esta zona y, como consecuencia, mejorar el aspecto de las ojeras y el surco nasogeniano.

El resultado es un rostro más angular y definido, con un efecto lifting natural. El tratamiento se realiza en una única sesión.`,
        resultados: 'Inmediato',
        aplicacion: '15 min',
        duracion: '9 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'proyeccion-mejillas', 
        nombre: 'Proyección de mejillas', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones en las mejillas para proyectarlas hacia adelante, recuperando el volumen perdido y logrando una apariencia más juvenil y descansada.

El tratamiento se realiza en una única sesión con resultados visibles de forma inmediata.`,
        resultados: 'Inmediato',
        aplicacion: '15 min',
        duracion: '9 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'relleno-labios', 
        nombre: 'Relleno de labios', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones precisas para perfilar, moldear y dar volumen a los labios, además de corregir posibles asimetrías.

El tratamiento se realiza en 2 sesiones: la primera aplicación y un retoque a los 14 días para perfeccionar el resultado.`,
        resultados: 'Inmediato',
        aplicacion: '15 min',
        duracion: '9 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'relleno-ojeras', 
        nombre: 'Relleno de ojeras', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones o cánula en el valle de las lágrimas, rellenando las ojeras hundidas y mejorando el aspecto de fatiga o cansancio.

El tratamiento se realiza en 2 sesiones: la primera aplicación y un retoque entre los 14 y 21 días posteriores.`,
        resultados: 'Inmediato',
        aplicacion: '15 min',
        duracion: '9 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'rinomodelacion', 
        nombre: 'Rinomodelación sin cirugía', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Se aplica mediante micro-inyecciones para corregir irregularidades del dorso nasal y elevar la punta, permitiendo moldear, perfilar y mejorar el aspecto de la nariz según las necesidades de cada paciente.

El tratamiento se realiza en 2 sesiones: la primera aplicación y un retoque a los 14 días para perfeccionar el resultado.`,
        resultados: 'Inmediato',
        aplicacion: '15 min',
        duracion: '6 a 12 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'fosa-temporal', 
        nombre: 'Fosa temporal', 
        descripcion: `El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural, pero que se va degradando con el paso del tiempo.

Con los años, la zona temporal del rostro tiende a perder volumen, generando un aspecto de hundimiento. Para revertir esto y lograr un rostro más armónico, se aplica ácido hialurónico mediante micro-inyecciones.

Este tratamiento no solo rellena la zona, sino que también genera un efecto lifting al elevar la cola de la ceja. Se realiza en 2 sesiones: la primera aplicación y un retoque a los 14 días.`,
        resultados: 'Inmediato',
        aplicacion: '15 min',
        duracion: '12 meses',
        anestesia: 'En crema'
      },
    ]
  },
  {
    id: 'bioestimuladores',
    nombre: 'Bioestimuladores',
    tratamientos: [
      { 
        id: 'tratamientos-hibridos', 
        nombre: 'Tratamiento híbrido', 
        descripcion: `Una de las últimas innovaciones en dermatología estética: la combinación de Radiesse, ácido hialurónico y toxina botulínica.

Este tratamiento ofrece resultados inmediatos como hidratación, voluminización y efecto lifting, además de mejoras a largo plazo en la calidad de la piel.

En el cuello se aplica la combinación completa de Radiesse, ácido hialurónico y toxina botulínica. En mejillas y mandíbula se utiliza Radiesse y ácido hialurónico. El procedimiento se realiza mediante micro-inyecciones y es rápido e indoloro. A los 14 días se programa un control de seguimiento.

Recomendaciones post-tratamiento: evitar actividad física intensa y no aplicar maquillaje en la zona el día de la aplicación.`,
        resultados: '15 días posteriores a la aplicación',
        aplicacion: '30-60 min',
        duracion: '6 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'profhilo', 
        nombre: 'Profhilo', 
        descripcion: `Profhilo es un ácido hialurónico de alta concentración que actúa hidratando de manera inmediata y profunda.

Estimula la producción de nuevas células y genera un efecto tensor que contrarresta la distensión de la piel, regenerándola desde las capas más profundas. Mejora notablemente la hidratación, textura y elasticidad cutánea.

Puede aplicarse como tratamiento preventivo en pacientes jóvenes o como tratamiento anti-age en edades más avanzadas. Se utiliza la técnica BAP: inyección en 5 puntos estratégicos en cada hemicara.`,
        resultados: 'A partir de 30 días',
        aplicacion: '15 min',
        duracion: 'Según paciente y cuidados posteriores',
        anestesia: 'En crema'
      },
      { 
        id: 'mesoterapia-francesa', 
        nombre: 'Mesoterapia francesa', 
        descripcion: `La mesoterapia francesa es una solución completa que contiene minerales, aminoácidos, vitaminas y antioxidantes.

Este cóctel renueva las células de la piel y estimula la producción de colágeno y elastina, actuando como un potente anti-age. Atenúa arrugas finas, ilumina la piel, mejora la hidratación y reduce la coloración oscura de las ojeras.

El tratamiento se realiza en cinco sesiones (con 15-20 días entre cada una) y desde la primera aplicación ya se pueden observar resultados visibles.`,
        resultados: 'Desde la primer sesión',
        aplicacion: '15 min',
        duracion: 'Combinar con otros tratamientos',
        anestesia: 'En crema'
      },
      { 
        id: 'radiesse', 
        nombre: 'Radiesse', 
        descripcion: `El Radiesse es un relleno inyectable compuesto por Hidroxiapatita de Calcio que actúa como bioestimulador.

Aporta firmeza y tensión a la piel al actuar directamente sobre las células productoras de colágeno y elastina. Es ideal para mejorar la calidad de la piel, tratar cicatrices (especialmente de acné) y como relleno dérmico.

Desde la primera aplicación se obtienen resultados con una apariencia más joven y natural, logrando un efecto lifting. Puede utilizarse para definir el contorno mandibular, generar efecto lifting o bioestimular y mejorar la calidad cutánea.`,
        resultados: 'Inmediatos y a largo plazo',
        aplicacion: '30-60 min',
        duracion: '18 meses',
        anestesia: 'En crema'
      },
      { 
        id: 'sculptra', 
        nombre: 'Sculptra', 
        descripcion: `El Sculptra es un bioestimulador a base de ácido poliláctico que estimula la producción natural de colágeno y elastina.

Aporta firmeza y tensión a la piel actuando directamente sobre las células productoras de colágeno. Es especialmente efectivo para tratar la flacidez, mejorar la calidad de la piel y tratar cicatrices de acné.

Puede aplicarse en rostro, brazos, abdomen y glúteos. Se recomiendan 3 sesiones en total, con intervalos de 30-45 días entre cada una. Desde la primera aplicación se observan resultados con un efecto lifting natural.`,
        resultados: 'Inmediatos y a largo plazo',
        aplicacion: '30-60 min',
        duracion: '24 meses',
        anestesia: 'En crema'
      },
    ]
  }
];

const Tratamientos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState(categoriasData[0]);
  const [tratamientoActivo, setTratamientoActivo] = useState(categoriasData[0].tratamientos[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleCategoriaClick = (categoria) => {
    setCategoriaActiva(categoria);
    setTratamientoActivo(categoria.tratamientos[0]);
  };

  const handleTratamientoClick = (tratamiento) => {
    setTratamientoActivo(tratamiento);
    setSidebarOpen(false); // Cerrar sidebar en mobile al seleccionar tratamiento
  };

  return (
    <>
      <Header />
      <main className="tratamientos-page">
        <div className="tratamientos-layout">
          {/* Mobile Toggle Button */}
          <button 
            className={`tratamientos-mobile-toggle ${sidebarOpen ? 'active' : ''}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span>Seleccionar tratamiento</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          
          {/* Sidebar */}
          <aside className={`tratamientos-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <h2>Tratamientos</h2>
            <nav className="tratamientos-nav">
              {categoriasData.map((categoria) => (
                <div key={categoria.id} className="categoria-group">
                  <button
                    className={`categoria-title ${categoriaActiva.id === categoria.id ? 'active' : ''}`}
                    onClick={() => handleCategoriaClick(categoria)}
                  >
                    {categoria.nombre}
                  </button>
                  {categoriaActiva.id === categoria.id && (
                    <div className="tratamientos-subnav">
                      {categoria.tratamientos.map((tratamiento) => (
                        <button
                          key={tratamiento.id}
                          className={`tratamientos-nav-item ${tratamientoActivo.id === tratamiento.id ? 'active' : ''}`}
                          onClick={() => handleTratamientoClick(tratamiento)}
                        >
                          {tratamiento.nombre}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Link to="/" className="tratamientos-back">
              ← Volver al inicio
            </Link>
          </aside>

          {/* Contenido principal */}
          <div className="tratamientos-content">
            <div className="tratamientos-content-header">
              <span className="tratamientos-categoria-label">{categoriaActiva.nombre}</span>
              <h1>{tratamientoActivo.nombre}</h1>
            </div>
            
            <div className="tratamientos-content-body">
              <div className="tratamientos-main">
                <p className="tratamientos-descripcion">{tratamientoActivo.descripcion}</p>
                {showTratamientosImagenes && (
                  <div className="tratamientos-imagen">
                    <img
                      src="https://placehold.co/600x400/E9DBD8/666666?text=Imagen+del+tratamiento"
                      alt={tratamientoActivo.nombre}
                    />
                  </div>
                )}
                <a 
                  href={`https://api.whatsapp.com/send?phone=5491150535098&text=${encodeURIComponent(`Hola! Estoy buscando más información sobre ${categoriaActiva.nombre} - ${tratamientoActivo.nombre}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tratamientos-consulta-btn"
                >
                  <i className="fab fa-whatsapp"></i>
                  Consultar por este tratamiento
                </a>
              </div>
              
              {/* Columna derecha: info cards */}
              {(tratamientoActivo.resultados || tratamientoActivo.aplicacion || tratamientoActivo.duracion || tratamientoActivo.anestesia) && (
                <aside className="tratamientos-info-sidebar">
                  {tratamientoActivo.resultados && (
                    <div className="tratamientos-info-item">
                      <i className="fas fa-clock"></i>
                      <div>
                        <span className="info-label">Resultados en</span>
                        <span className="info-value">{tratamientoActivo.resultados}</span>
                      </div>
                    </div>
                  )}
                  {tratamientoActivo.aplicacion && (
                    <div className="tratamientos-info-item">
                      <i className="fas fa-hourglass-half"></i>
                      <div>
                        <span className="info-label">Aplicación</span>
                        <span className="info-value">{tratamientoActivo.aplicacion}</span>
                      </div>
                    </div>
                  )}
                  {tratamientoActivo.duracion && (
                    <div className="tratamientos-info-item">
                      <i className="fas fa-calendar-alt"></i>
                      <div>
                        <span className="info-label">Duración</span>
                        <span className="info-value">{tratamientoActivo.duracion}</span>
                      </div>
                    </div>
                  )}
                  {tratamientoActivo.anestesia && (
                    <div className="tratamientos-info-item">
                      <i className="fas fa-syringe"></i>
                      <div>
                        <span className="info-label">Anestesia</span>
                        <span className="info-value">{tratamientoActivo.anestesia}</span>
                      </div>
                    </div>
                  )}
                </aside>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Tratamientos;
