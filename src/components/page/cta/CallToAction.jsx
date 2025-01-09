import React from 'react';
import imgCta from '../../../assets/img/img-cta.png';

export const CallToAction = () => {
    return (
        <section
            className="call-to-action-section text-white d-flex align-items-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${imgCta}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '50vh',
            }}
        >
            <div className="container text-center">
                {/* Título */}
                <h1 className="display-4 fw-bold mb-4">
                    ¿Necesitas una App Web o Móvil para tu Negocio?
                </h1>
                {/* Descripción */}
                <p className="lead mb-4">
                    Transformamos tus ideas en soluciones digitales innovadoras.
                    Con nuestra experiencia en desarrollo de apps, te ayudamos a
                    alcanzar tus objetivos de negocio con tecnología avanzada y
                    diseño intuitivo.
                </p>
                {/* Botón */}
                <a
                    href="#contact"
                    className="btn btn-lg text-white"
                    style={{
                        backgroundColor: '#33658A',
                        // border: 'none',
                        // padding: '12px 30px',
                        // borderRadius: '8px',
                        // fontWeight: 'bold',
                        // transition: 'all 0.3s ease',
                    }}
                    // onMouseOver={e => {
                    //     e.target.style.backgroundColor = '#28527A'; // Azul más oscuro en hover
                    // }}
                    // onMouseOut={e => {
                    //     e.target.style.backgroundColor = '#33658A'; // Regresa al azul original
                    // }}
                >
                    Contáctanos Ahora <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </section>
    );
};
