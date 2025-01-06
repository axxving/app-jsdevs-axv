import React from 'react';

export const Reasons = () => {
    return (
        <section
            className="mt-4 mb-4 about-section d-flex align-items-center bg-light"
            style={{ minHeight: '100vh' }}
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Contenido del lado izquierdo */}
                    <div className="col-12 col-md-6">
                        {/* Título */}
                        <h5 className="text-uppercase text-primary mb-3">
                            ¿Por Qué Elegirnos?
                        </h5>
                        <h2 className="display-3 fw-bold mb-4">
                            Desarrollo de Apps Web y Móviles
                        </h2>
                        <p className="text-muted mb-4">
                            En nuestra empresa, utilizamos tecnologías modernas
                            para desarrollar aplicaciones web y móviles que
                            transforman tus ideas en soluciones digitales.
                            Creamos experiencias innovadoras y escalables que
                            impulsan el éxito de tu negocio.
                        </p>

                        {/* Beneficios */}
                        <div className="row text-center text-md-start mb-4">
                            <div className="col-6 mb-3">
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <i className="bi bi-code-slash fs-2 text-primary me-3"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1">
                                            Soluciones Personalizadas
                                        </h5>
                                        <p className="text-muted mb-0">
                                            Diseñamos aplicaciones adaptadas a
                                            las necesidades de tu empresa.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <i className="bi bi-speedometer2 fs-2 text-primary me-3"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1">
                                            Alto Rendimiento
                                        </h5>
                                        <p className="text-muted mb-0">
                                            Garantizamos apps rápidas y
                                            optimizadas para el mejor desempeño.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Barras de progreso */}
                        <div className="mb-3">
                            <h6 className="fw-bold">Innovación</h6>
                            <div className="progress" style={{ height: '8px' }}>
                                <div
                                    className="progress-bar bg-primary"
                                    style={{ width: '95%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <h6 className="fw-bold">Experiencia</h6>
                            <div className="progress" style={{ height: '8px' }}>
                                <div
                                    className="progress-bar bg-primary"
                                    style={{ width: '93%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <h6 className="fw-bold">Conocimiento Técnico</h6>
                            <div className="progress" style={{ height: '8px' }}>
                                <div
                                    className="progress-bar bg-primary"
                                    style={{ width: '97%' }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <h6 className="fw-bold">Atención al Cliente</h6>
                            <div className="progress" style={{ height: '8px' }}>
                                <div
                                    className="progress-bar bg-primary"
                                    style={{ width: '91%' }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Imagen del lado derecho */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                        <img
                            src="https://via.placeholder.com/600x600"
                            alt="Tecnologías utilizadas"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
