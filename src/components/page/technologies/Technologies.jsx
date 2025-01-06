import React from 'react';

export const Technologies = () => {
    return (
        <section
            className="technologies-section py-5 text-white bg-primary"
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Columna de logotipos */}
                    <div className="col-md-8">
                        <div className="row g-4 text-center text-md-start">
                            {/* Logotipos de tecnologías */}
                            {[
                                {
                                    name: 'Django',
                                    logo: 'https://via.placeholder.com/150?text=Django',
                                },
                                {
                                    name: 'React',
                                    logo: 'https://via.placeholder.com/150?text=React',
                                },
                                {
                                    name: 'Bootstrap',
                                    logo: 'https://via.placeholder.com/150?text=Bootstrap',
                                },
                                {
                                    name: 'PostgreSQL',
                                    logo: 'https://via.placeholder.com/150?text=PostgreSQL',
                                },
                                {
                                    name: 'AWS',
                                    logo: 'https://via.placeholder.com/150?text=AWS',
                                },
                                {
                                    name: 'Docker',
                                    logo: 'https://via.placeholder.com/150?text=Docker',
                                },
                            ].map((tech, index) => (
                                <div className="col-6 col-md-4" key={index}>
                                    <img
                                        src={tech.logo}
                                        alt={`${tech.name} Logo`}
                                        className="img-fluid"
                                    />
                                    <p className="mt-2">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columna de texto */}
                    <div className="col-md-4 text-center text-md-start">
                        <h6 className="text-uppercase text-white-50 mb-3">
                            Tecnologías
                        </h6>
                        <h2 className="display-4 fw-bold mb-4">
                            Herramientas que Usamos
                        </h2>
                        <p className="text-white-75">
                            En nuestros proyectos empleamos tecnologías modernas
                            y robustas que garantizan alto rendimiento,
                            escalabilidad y una excelente experiencia para
                            nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
