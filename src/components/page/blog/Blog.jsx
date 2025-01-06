import React from 'react';

export const Blog = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                {/* Título de la sección */}
                <div className="text-center mb-5">
                    <h5 className="text-uppercase text-primary">
                        Nuestro Blog
                    </h5>
                    <h2 className="fw-bold">Últimos Blogs y Noticias</h2>
                    <p className="text-muted">
                        Descubre las últimas tendencias, herramientas y casos de
                        éxito en el desarrollo de aplicaciones web y móviles.
                    </p>
                </div>

                {/* Grid de blogs */}
                <div className="row g-4">
                    {/* Blog 1 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://via.placeholder.com/600x400"
                                className="card-img-top"
                                alt="Blog 1"
                            />
                            <div className="card-body bg-primary text-white">
                                <h5 className="card-title fw-bold">
                                    Cómo estructurar tu aplicación web para un
                                    mejor rendimiento
                                </h5>
                                <p className="card-text">
                                    <i className="bi bi-calendar me-2"></i> 27
                                    de marzo, 2023
                                    <i className="bi bi-chat-left-dots ms-4 me-2"></i>{' '}
                                    0 comentarios
                                </p>
                                <p className="card-text">
                                    Aprende las mejores prácticas para optimizar
                                    tu aplicación web utilizando frameworks
                                    modernos como React y Django.
                                </p>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none fw-bold"
                                >
                                    Leer más{' '}
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://via.placeholder.com/600x400"
                                className="card-img-top"
                                alt="Blog 2"
                            />
                            <div className="card-body bg-primary text-white">
                                <h5 className="card-title fw-bold">
                                    Innovación en el desarrollo móvil: Flutter y
                                    React Native
                                </h5>
                                <p className="card-text">
                                    <i className="bi bi-calendar me-2"></i> 27
                                    de marzo, 2023
                                    <i className="bi bi-chat-left-dots ms-4 me-2"></i>{' '}
                                    0 comentarios
                                </p>
                                <p className="card-text">
                                    Descubre cómo los frameworks multiplataforma
                                    están revolucionando la industria del
                                    desarrollo móvil.
                                </p>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none fw-bold"
                                >
                                    Leer más{' '}
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Blog 3 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://via.placeholder.com/600x400"
                                className="card-img-top"
                                alt="Blog 3"
                            />
                            <div className="card-body bg-primary text-white">
                                <h5 className="card-title fw-bold">
                                    Bases de datos avanzadas: optimizando tus
                                    aplicaciones
                                </h5>
                                <p className="card-text">
                                    <i className="bi bi-calendar me-2"></i> 27
                                    de marzo, 2023
                                    <i className="bi bi-chat-left-dots ms-4 me-2"></i>{' '}
                                    0 comentarios
                                </p>
                                <p className="card-text">
                                    Aprende cómo las bases de datos relacionales
                                    y NoSQL pueden mejorar el rendimiento de tu
                                    aplicación.
                                </p>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none fw-bold"
                                >
                                    Leer más{' '}
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
