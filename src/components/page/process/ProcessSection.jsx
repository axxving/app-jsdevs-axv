import React from 'react';

export const Process = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    {/* Columna izquierda: Etapas */}
                    <div className="col-md-6">
                        {[
                            {
                                icon: 'bi bi-person-plus',
                                title: 'Consulta Inicial',
                                description:
                                    'Analizamos tus necesidades para crear una solución personalizada que se ajuste a tu negocio.',
                            },
                            {
                                icon: 'bi bi-box-seam',
                                title: 'Propuesta y Paquete',
                                description:
                                    'Te presentamos las opciones de desarrollo ideales para tu proyecto, incluyendo diseño y tecnología.',
                            },
                            {
                                icon: 'bi bi-graph-up-arrow',
                                title: 'Desarrollo y Entrega',
                                description:
                                    'Desarrollamos tu aplicación y aseguramos que cumpla con los más altos estándares de calidad.',
                            },
                        ].map((step, index) => (
                            <div className="mb-4" key={index}>
                                <div className="d-flex align-items-start">
                                    <div
                                        className="icon-box d-flex align-items-center justify-content-center me-3"
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: '#33658A',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <i
                                            className={`${step.icon} fs-3 text-white`}
                                        ></i>
                                    </div>
                                    <div>
                                        <h5
                                            className="fw-bold mb-2"
                                            style={{
                                                color: '#33658A',
                                            }}
                                        >
                                            {step.title}
                                        </h5>
                                        <p
                                            className="text-muted"
                                            style={{
                                                fontSize: '0.9rem',
                                                lineHeight: '1.6',
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Columna derecha: Descripción */}
                    <div className="col-md-6">
                        <h5
                            className="text-uppercase mb-3"
                            style={{ color: '#33658A' }}
                        >
                            Nuestro Proceso
                        </h5>
                        <h2 className="fw-bold display-4">
                            Un Proceso Fácil para Desarrollar tu App
                        </h2>
                        <p
                            className="text-muted"
                            style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                            }}
                        >
                            Nuestro enfoque se centra en crear soluciones
                            eficientes y personalizadas. Desde la primera
                            consulta hasta la entrega final, garantizamos que
                            cada etapa del proyecto sea clara y esté alineada
                            con tus objetivos de negocio.
                        </p>
                        <p
                            className="text-muted"
                            style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                            }}
                        >
                            Trabajamos con tecnologías modernas y un equipo
                            dedicado para que tu proyecto esté en manos de
                            expertos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
