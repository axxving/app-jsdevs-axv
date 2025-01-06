import React from 'react';

export const About = () => {
    return (
        <section
            className="mt-4 mb-4 about-section d-flex align-items-center bg-light"
            style={{ minHeight: '100vh' }}
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Imagen del lado izquierdo */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                        <img
                            src="https://via.placeholder.com/600x600"
                            alt="Sobre nosotros"
                            className="img-fluid rounded"
                        />
                    </div>

                    {/* Contenido del lado derecho */}
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h5 className="text-uppercase text-primary mb-3">
                            Sobre Nosotros
                        </h5>
                        <h2 className="display-3 fw-bold mb-4">
                            Tu Socio Estratégico <br /> en Desarrollo Digital
                        </h2>
                        <p className="text-muted mb-4">
                            En nuestra empresa, transformamos ideas en
                            soluciones digitales innovadoras. Nos especializamos
                            en el desarrollo de aplicaciones web y móviles que
                            impulsan el crecimiento de negocios, ofreciendo
                            interfaces intuitivas y experiencias de usuario de
                            alto impacto.
                        </p>
                        <div className="row">
                            {/* Columna Vision */}
                            <div className="col-sm-6 mb-4 mb-sm-0">
                                <h5 className="fw-bold">Nuestra Visión</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Impulsar la transformación digital
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Crear experiencias de usuario únicas
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Ofrecer soluciones innovadoras
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Liderar en tecnología avanzada
                                    </li>
                                </ul>
                            </div>

                            {/* Columna Mission */}
                            <div className="col-sm-6">
                                <h5 className="fw-bold">Nuestra Misión</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Diseñar aplicaciones personalizadas
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Ayudar a empresas a alcanzar sus metas
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Innovar con tecnología de vanguardia
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right text-primary"></i>{' '}
                                        Garantizar calidad y satisfacción
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Botón */}
                        <a
                            href="#about"
                            className="btn btn-primary btn-lg mt-4"
                        >
                            Conoce Más <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
