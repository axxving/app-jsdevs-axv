import React from 'react';

export const Services = () => {
    return (
        <section
            className="mt-4 mb-4 about-section d-flex align-items-center bg-light"
            style={{ minHeight: '100vh' }}
        >
            <div className="container">
                {/* Título y subtítulo */}
                <div className="text-center mb-5">
                    <h5 className="text-uppercase text-primary">
                        Nuestros Servicios
                    </h5>
                    <h2 className="fw-bold display-3">Servicios Profesionales para Ti</h2>
                    <p className="text-muted">
                        Ofrecemos soluciones personalizadas para satisfacer las
                        necesidades de tu negocio, garantizando calidad y
                        resultados en cada proyecto.
                    </p>
                </div>

                {/* Grid de servicios */}
                <div className="row g-4">
                    {[
                        {
                            icon: 'bi bi-code-slash',
                            title: 'Desarrollo Web',
                            description:
                                'Creamos sitios web modernos, responsivos y optimizados para SEO.',
                            href: '#web',
                        },
                        {
                            icon: 'bi bi-phone',
                            title: 'Desarrollo Móvil',
                            description:
                                'Diseñamos y desarrollamos apps móviles para iOS y Android.',
                            href: '#mobile',
                        },
                        {
                            icon: 'bi bi-pc-display',
                            title: 'Diseño UI/UX',
                            description:
                                'Creamos interfaces intuitivas para mejorar la experiencia del usuario.',
                            href: '#design',
                        },
                        {
                            icon: 'bi bi-cloud-upload',
                            title: 'Soluciones en la Nube',
                            description:
                                'Implementamos soluciones escalables y seguras en la nube.',
                            href: '#cloud',
                        },
                        {
                            icon: 'bi bi-shield-lock',
                            title: 'Ciberseguridad',
                            description:
                                'Protegemos tus datos y sistemas con soluciones avanzadas de seguridad.',
                            href: '#security',
                        },
                        {
                            icon: 'bi bi-gear',
                            title: 'Automatización',
                            description:
                                'Optimiza tus procesos con herramientas personalizadas de automatización.',
                            href: '#automation',
                        },
                    ].map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100 service-card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <i
                                            className={`${service.icon} fs-1`}
                                        ></i>
                                    </div>
                                    <h5 className="card-title fw-bold">
                                        {service.title}
                                    </h5>
                                    <p className="card-text">
                                        {service.description}
                                    </p>
                                    <a
                                        href={service.href}
                                        className="service-link text-primary text-decoration-none fw-bold"
                                    >
                                        Leer Más{' '}
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Estilos adicionales */}
            <style jsx>{`
                .service-card {
                    transition: all 0.3s ease;
                }
                .service-card:hover {
                    background-color: #0d6efd; /* Azul Bootstrap */
                    color: #fff; /* Texto blanco */
                    transform: translateY(-10px); /* Levantar la tarjeta */
                }
                .service-card:hover i,
                .service-card:hover .service-link {
                    color: #fff !important; /* Ícono y enlace en blanco */
                }
            `}</style>
        </section>
    );
};
