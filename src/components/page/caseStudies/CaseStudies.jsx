import React from 'react';

export const CaseStudies = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                {/* Título y subtítulo */}
                <div className="text-center mb-5">
                    <h5 className="text-uppercase" style={{ color: '#33658A' }}>
                        Proyectos Destacados
                    </h5>
                    <h2 className="fw-bold">
                        Últimos Proyectos que Hemos Realizado
                    </h2>
                    <p className="text-muted">
                        Descubre cómo nuestras soluciones han transformado
                        negocios a través del desarrollo de aplicaciones
                        innovadoras y escalables.
                    </p>
                </div>

                {/* Grid de proyectos */}
                <div className="row g-4">
                    {[
                        {
                            title: 'Gestión de Inventarios',
                            description:
                                'Desarrollamos una plataforma web que optimiza el control de inventarios en tiempo real, mejorando la eficiencia operativa.',
                            image: 'https://via.placeholder.com/400x250',
                            link: '#inventory',
                        },
                        {
                            title: 'Aplicación de Finanzas',
                            description:
                                'Creamos una app móvil que permite a los usuarios administrar sus finanzas de manera intuitiva y segura.',
                            image: 'https://via.placeholder.com/400x250',
                            link: '#finance',
                        },
                        {
                            title: 'Plataforma de E-commerce',
                            description:
                                'Lanzamos una plataforma de comercio electrónico con integración de pagos y diseño responsivo.',
                            image: 'https://via.placeholder.com/400x250',
                            link: '#ecommerce',
                        },
                    ].map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <div
                                className="card border h-100"
                                style={{
                                    border: '1px solid #33658A',
                                    borderRadius: '8px',
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="card-img-top"
                                    style={{
                                        borderTopLeftRadius: '8px',
                                        borderTopRightRadius: '8px',
                                    }}
                                />
                                <div className="card-body">
                                    <h5
                                        className="fw-bold mb-3"
                                        style={{ color: '#33658A' }}
                                    >
                                        {project.title}
                                    </h5>
                                    <p
                                        className="text-muted"
                                        style={{
                                            fontSize: '0.9rem',
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        className="text-decoration-none fw-bold"
                                        style={{ color: '#33658A' }}
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
        </section>
    );
};
