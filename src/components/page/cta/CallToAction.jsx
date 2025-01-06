import React from 'react';

export const CallToAction = () => {
    return (
        <section
            className="call-to-action-section text-white d-flex align-items-center"
            style={{
                backgroundImage: "url('https://via.placeholder.com/1920x600')", // Cambia esta URL por tu imagen de fondo
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
                    className="btn btn-primary btn-lg"
                    style={{
                        backgroundColor: '#007bff',
                        border: 'none',
                    }}
                >
                    Contáctanos Ahora <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </section>
    );
};
