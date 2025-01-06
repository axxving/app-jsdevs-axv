import React from 'react';

export const Process = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    {/* Columna izquierda: Etapas */}
                    <div className="col-md-6">
                        <div className="mb-4">
                            <div className="d-flex">
                                <div
                                    className="icon-box text-primary me-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        border: '1px solid #007bff',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <i className="bi bi-person-plus fs-3"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold">
                                        Consulta Inicial
                                    </h5>
                                    <p className="text-muted">
                                        Analizamos tus necesidades para crear
                                        una solución personalizada que se ajuste
                                        a tu negocio.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="d-flex">
                                <div
                                    className="icon-box text-primary me-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        border: '1px solid #007bff',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <i className="bi bi-box-seam fs-3"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold">
                                        Propuesta y Paquete
                                    </h5>
                                    <p className="text-muted">
                                        Te presentamos las opciones de
                                        desarrollo ideales para tu proyecto,
                                        incluyendo diseño y tecnología.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="d-flex">
                                <div
                                    className="icon-box text-primary me-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        border: '1px solid #007bff',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <i className="bi bi-graph-up-arrow fs-3"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold">
                                        Desarrollo y Entrega
                                    </h5>
                                    <p className="text-muted">
                                        Desarrollamos tu aplicación y aseguramos
                                        que cumpla con los más altos estándares
                                        de calidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha: Descripción */}
                    <div className="col-md-6">
                        <h5 className="text-uppercase text-primary mb-3">
                            Nuestro Proceso
                        </h5>
                        <h2 className="fw-bold">
                            Un Proceso Fácil para Desarrollar tu App
                        </h2>
                        <p className="text-muted">
                            Nuestro enfoque se centra en crear soluciones
                            eficientes y personalizadas. Desde la primera
                            consulta hasta la entrega final, garantizamos que
                            cada etapa del proyecto sea clara y esté alineada
                            con tus objetivos de negocio.
                        </p>
                        <p className="text-muted">
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
