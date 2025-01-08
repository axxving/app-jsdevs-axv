import React from 'react';

export const Technologies = () => {
    return (
        <section
            className="technologies-section py-5"
            style={{ backgroundColor: '#33658A' }}
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Columna de texto */}
                    <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                        <h6 className="text-uppercase text-white-50 mb-3">
                            Tecnologías
                        </h6>
                        <h2 className="fw-bold text-white mb-4">
                            Herramientas que Usamos
                        </h2>
                        <p className="text-white">
                            Aprovechamos lo mejor de las tecnologías modernas
                            para entregar soluciones robustas, escalables y
                            visualmente atractivas que garantizan un rendimiento
                            óptimo.
                        </p>
                    </div>

                    {/* Columna de logotipos */}
                    <div className="col-md-8">
                        <div className="row g-4 text-center">
                            {/* Tarjetas de tecnologías */}
                            {[
                                {
                                    name: 'Django',
                                    icon: 'fab fa-python',
                                },
                                {
                                    name: 'React',
                                    icon: 'fab fa-react',
                                },
                                {
                                    name: 'Bootstrap',
                                    icon: 'fab fa-bootstrap',
                                },
                                {
                                    name: 'PostgreSQL',
                                    icon: 'fas fa-database',
                                },
                                {
                                    name: 'VPS',
                                    icon: 'fas fa-server',
                                },
                                {
                                    name: 'Docker',
                                    icon: 'fab fa-docker',
                                },
                            ].map((tech, index) => (
                                <div className="col-6 col-md-4" key={index}>
                                    <div
                                        className="tech-card p-4 d-flex flex-column align-items-center justify-content-center rounded shadow-sm"
                                        style={{
                                            background:
                                                'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(8px)',
                                            transition:
                                                'transform 0.3s, box-shadow 0.3s',
                                        }}
                                    >
                                        <i
                                            className={`${tech.icon} fs-1 mb-3`}
                                            style={{ color: '#FFFFFF' }}
                                        ></i>
                                        <h5
                                            className="fw-bold text-white mb-0"
                                            style={{
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {tech.name}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilos adicionales */}
            <style jsx>{`
                .tech-card {
                    transition: all 0.3s ease;
                }
                .tech-card:hover {
                    background-color: #28527a; /* Azul más oscuro */
                    color: #fff; /* Texto blanco */
                    transform: translateY(-10px); /* Levantar la tarjeta */
                }
                .tech-card:hover i {
                    color: #ffdd57; /* Color amarillo brillante */
                }
            `}</style>
        </section>
    );
};

// import React from 'react';

// export const Technologies = () => {
//     return (
//         <section
//             className="technologies-section py-5"
//             style={{ backgroundColor: '#33658A' }}
//         >
//             <div className="container">
//                 <div className="row align-items-center">
//                     {/* Columna de texto */}
//                     <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
//                         <h6 className="text-uppercase text-white-50 mb-3">
//                             Tecnologías
//                         </h6>
//                         <h2 className="fw-bold text-white mb-4">
//                             Herramientas que Usamos
//                         </h2>
//                         <p className="text-white-75">
//                             Aprovechamos lo mejor de las tecnologías modernas
//                             para entregar soluciones robustas, escalables y
//                             visualmente atractivas que garantizan un rendimiento
//                             óptimo.
//                         </p>
//                     </div>

//                     {/* Columna de logotipos */}
//                     <div className="col-md-8">
//                         <div className="row g-4 text-center">
//                             {/* Tarjetas de tecnologías */}
//                             {[
//                                 {
//                                     name: 'Django',
//                                     icon: 'fab fa-python',
//                                 },
//                                 {
//                                     name: 'React',
//                                     icon: 'fab fa-react',
//                                 },
//                                 {
//                                     name: 'Bootstrap',
//                                     icon: 'fab fa-bootstrap',
//                                 },
//                                 {
//                                     name: 'PostgreSQL',
//                                     icon: 'fas fa-database',
//                                 },
//                                 {
//                                     name: 'AWS',
//                                     icon: 'fab fa-aws',
//                                 },
//                                 {
//                                     name: 'Docker',
//                                     icon: 'fab fa-docker',
//                                 },
//                             ].map((tech, index) => (
//                                 <div className="col-6 col-md-4" key={index}>
//                                     <div
//                                         className="tech-card p-4 d-flex flex-column align-items-center justify-content-center rounded shadow-sm"
//                                         style={{
//                                             background: 'rgba(255, 255, 255, 0.1)',
//                                             backdropFilter: 'blur(8px)',
//                                             transition: 'transform 0.3s, box-shadow 0.3s',
//                                         }}
//                                     >
//                                         <i
//                                             className={`${tech.icon} fs-1 mb-3`}
//                                             style={{ color: '#FFFFFF' }}
//                                         ></i>
//                                         <h5
//                                             className="fw-bold text-white mb-0"
//                                             style={{
//                                                 fontSize: '1rem',
//                                             }}
//                                         >
//                                             {tech.name}
//                                         </h5>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Estilos adicionales */}
//             <style jsx>{`
//                 .tech-card:hover {
//                     transform: translateY(-10px);
//                     box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
//                 }

//                 .tech-card i {
//                     transition: color 0.3s;
//                 }

//                 .tech-card:hover i {
//                     color: #ffdd57; /* Color amarillo brillante */
//                 }
//             `}</style>
//         </section>
//     );
// };
