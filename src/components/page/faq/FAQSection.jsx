import React from 'react';

export const FAQSection = () => {
    return (
        <section
            className="py-5"
            style={{ backgroundColor: '#007bff', color: 'white' }}
        >
            <div className="container">
                <div className="row">
                    {/* Columna izquierda: Título y descripción */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">FAQ</h5>
                        <h2 className="fw-bold">Las Preguntas Más Comunes</h2>
                        <p className="text-white-50">
                            Encuentra las respuestas a las preguntas más comunes
                            relacionadas con el desarrollo de aplicaciones web y
                            móviles. Si necesitas más información, no dudes en
                            contactarnos.
                        </p>
                    </div>

                    {/* Columna derecha: Acordeón de preguntas */}
                    <div className="col-md-6">
                        <div className="accordion" id="faqAccordion">
                            {/* Pregunta 1 */}
                            <div className="accordion-item border">
                                <h2
                                    className="accordion-header"
                                    id="headingOne"
                                >
                                    <button
                                        className="accordion-button bg-light text-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        ¿Qué tecnologías usan para desarrollar
                                        aplicaciones?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body text-white bg-primary">
                                        Utilizamos tecnologías como React,
                                        Django, Node.js, y Flutter para
                                        garantizar soluciones escalables,
                                        rápidas y seguras.
                                    </div>
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div className="accordion-item border">
                                <h2
                                    className="accordion-header"
                                    id="headingTwo"
                                >
                                    <button
                                        className="accordion-button collapsed bg-light text-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        ¿Pueden desarrollar una app para Android
                                        e iOS al mismo tiempo?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body text-white bg-primary">
                                        Sí, con frameworks como React Native o
                                        Flutter desarrollamos apps
                                        multiplataforma con un solo código base,
                                        reduciendo tiempo y costos.
                                    </div>
                                </div>
                            </div>

                            {/* Pregunta 3 */}
                            <div className="accordion-item border">
                                <h2
                                    className="accordion-header"
                                    id="headingThree"
                                >
                                    <button
                                        className="accordion-button collapsed bg-light text-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        ¿Cuánto tiempo toma desarrollar una
                                        aplicación?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body text-white bg-primary">
                                        El tiempo depende de la complejidad. En
                                        general, tardamos de 2 a 6 meses desde
                                        la planificación hasta el lanzamiento.
                                    </div>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="accordion-item border">
                                <h2
                                    className="accordion-header"
                                    id="headingFour"
                                >
                                    <button
                                        className="accordion-button collapsed bg-light text-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        ¿Qué incluye el soporte
                                        post-lanzamiento?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body text-white bg-primary">
                                        Incluye mantenimiento, actualizaciones,
                                        y soporte técnico continuo para asegurar
                                        el éxito de tu aplicación.
                                    </div>
                                </div>
                            </div>

                            {/* Pregunta 5 */}
                            <div className="accordion-item border">
                                <h2
                                    className="accordion-header"
                                    id="headingFive"
                                >
                                    <button
                                        className="accordion-button collapsed bg-light text-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        ¿Pueden integrar mi app con otros
                                        sistemas?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body text-white bg-primary">
                                        Sí, podemos integrar tu aplicación con
                                        APIs externas, pasarelas de pago, y
                                        otros sistemas personalizados.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
