import React from 'react';
import imgReasons from '../../../assets/img/img-reasons.png';

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
                        <h5
                            className="text-uppercase"
                            style={{ color: '#33658A' }}
                        >
                            ¿Por Qué Elegirnos?
                        </h5>
                        <h2 className="display-4 fw-bold mb-4">
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
                        <div className="row g-4">
                            <div className="col-12 col-md-6">
                                <div
                                    className="benefit-card d-flex flex-column align-items-center justify-content-center rounded shadow-sm h-100"
                                    style={{
                                        backgroundColor: '#F7F9FA',
                                        border: '1px solid #E1E5EB',
                                        textAlign: 'center',
                                        padding: '20px',
                                    }}
                                >
                                    <i
                                        className="bi bi-code-slash fs-1 mb-3"
                                        style={{ color: '#33658A' }}
                                    ></i>
                                    <h5
                                        className="fw-bold mb-2"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.2',
                                        }}
                                    >
                                        Soluciones Personalizadas
                                    </h5>
                                    <p
                                        className="text-muted"
                                        style={{
                                            fontSize: '0.9rem',
                                            lineHeight: '1.5',
                                            maxWidth: '90%',
                                        }}
                                    >
                                        Diseñamos aplicaciones adaptadas a las
                                        necesidades de tu empresa, asegurando
                                        funcionalidad y calidad.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div
                                    className="benefit-card d-flex flex-column align-items-center justify-content-center rounded shadow-sm h-100"
                                    style={{
                                        backgroundColor: '#F7F9FA',
                                        border: '1px solid #E1E5EB',
                                        textAlign: 'center',
                                        padding: '20px',
                                    }}
                                >
                                    <i
                                        className="bi bi-speedometer2 fs-1 mb-3"
                                        style={{ color: '#33658A' }}
                                    ></i>
                                    <h5
                                        className="fw-bold mb-2"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.2',
                                        }}
                                    >
                                        Alto Rendimiento
                                    </h5>
                                    <p
                                        className="text-muted"
                                        style={{
                                            fontSize: '0.9rem',
                                            lineHeight: '1.5',
                                            maxWidth: '90%',
                                        }}
                                    >
                                        Garantizamos aplicaciones rápidas y
                                        optimizadas para un desempeño
                                        sobresaliente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Imagen del lado derecho */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                        <img
                            src={imgReasons}
                            alt="Tecnologías utilizadas"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
