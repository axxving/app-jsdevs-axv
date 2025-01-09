import React from 'react';

export const Blog = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                {/* Título de la sección */}
                <div className="text-center mb-5">
                    <h5
                        className="text-uppercase mb-3"
                        style={{ color: '#33658A' }}
                    >
                        Nuestro Blog
                    </h5>
                    <h2 className="fw-bold display-4">
                        Últimos Blogs y Noticias
                    </h2>
                    <p
                        className="text-muted"
                        style={{ fontSize: '1rem', lineHeight: '1.8' }}
                    >
                        Descubre las últimas tendencias, herramientas y casos de
                        éxito en el desarrollo de aplicaciones web y móviles.
                    </p>
                </div>

                {/* Grid de blogs */}
                <div className="row g-4">
                    {[
                        {
                            title: 'Cómo estructurar tu aplicación web para un mejor rendimiento',
                            date: '27 de marzo, 2023',
                            comments: '0 comentarios',
                            description:
                                'Aprende las mejores prácticas para optimizar tu aplicación web utilizando frameworks modernos como React y Django.',
                            image: 'https://via.placeholder.com/600x400',
                            link: '#',
                        },
                        {
                            title: 'Innovación en el desarrollo móvil: Flutter y React Native',
                            date: '27 de marzo, 2023',
                            comments: '0 comentarios',
                            description:
                                'Descubre cómo los frameworks multiplataforma están revolucionando la industria del desarrollo móvil.',
                            image: 'https://via.placeholder.com/600x400',
                            link: '#',
                        },
                        {
                            title: 'Bases de datos avanzadas: optimizando tus aplicaciones',
                            date: '27 de marzo, 2023',
                            comments: '0 comentarios',
                            description:
                                'Aprende cómo las bases de datos relacionales y NoSQL pueden mejorar el rendimiento de tu aplicación.',
                            image: 'https://via.placeholder.com/600x400',
                            link: '#',
                        },
                    ].map((blog, index) => (
                        <div className="col-md-4" key={index}>
                            <div
                                className="card h-100 border-0 shadow-sm"
                                style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={blog.image}
                                    className="card-img-top"
                                    alt={blog.title}
                                    style={{
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div
                                    className="card-body d-flex flex-column"
                                    style={{
                                        backgroundColor: '#33658A',
                                        color: 'white',
                                    }}
                                >
                                    <h5
                                        className="card-title fw-bold mb-3"
                                        style={{ fontSize: '1.1rem' }}
                                    >
                                        {blog.title}
                                    </h5>
                                    <p
                                        className="card-text mb-2"
                                        style={{
                                            fontSize: '0.9rem',
                                            opacity: '0.8',
                                        }}
                                    >
                                        <i className="bi bi-calendar me-2"></i>
                                        {blog.date}
                                        <i className="bi bi-chat-left-dots ms-4 me-2"></i>
                                        {blog.comments}
                                    </p>
                                    <p
                                        className="card-text flex-grow-1"
                                        style={{
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6',
                                        }}
                                    >
                                        {blog.description}
                                    </p>
                                    <a
                                        href={blog.link}
                                        className="text-white fw-bold text-decoration-none mt-auto"
                                        style={{
                                            transition: 'color 0.3s',
                                        }}
                                        onMouseOver={e =>
                                            (e.target.style.color = '#f6c90e')
                                        }
                                        onMouseOut={e =>
                                            (e.target.style.color = 'white')
                                        }
                                    >
                                        Leer más{' '}
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
