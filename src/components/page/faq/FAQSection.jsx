import React from 'react';

export const FAQSection = () => {
    return (
        <section
            className="py-5"
            style={{
                backgroundColor: '#33658A',
                color: 'white',
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Columna izquierda: Título y descripción */}
                    <div className="col-md-5 mb-4 mb-md-0">
                        <h5
                            className="text-uppercase fw-bold mb-3"
                            style={{
                                letterSpacing: '1px',
                                color: '#f6f7f8',
                            }}
                        >
                            Preguntas Frecuentes
                        </h5>
                        <h2
                            className="fw-bold mb-4"
                            style={{ lineHeight: '1.3' }}
                        >
                            Todo lo que Necesitas Saber sobre Nuestro Servicio
                        </h2>
                        <p
                            className="text-white-75"
                            style={{
                                fontSize: '1rem',
                                lineHeight: '1.8',
                            }}
                        >
                            Encuentra las respuestas a las preguntas más comunes
                            relacionadas con el desarrollo de aplicaciones web y
                            móviles. Si necesitas más información, ¡no dudes en
                            contactarnos!
                        </p>
                    </div>

                    {/* Columna derecha: Acordeón de preguntas */}
                    <div className="col-md-7">
                        <div className="accordion" id="faqAccordion">
                            {[
                                {
                                    id: 'collapseOne',
                                    question:
                                        '¿Qué tecnologías usan para desarrollar aplicaciones?',
                                    answer: 'Utilizamos tecnologías como React, Django, Node.js y Flutter para garantizar soluciones escalables, rápidas y seguras.',
                                },
                                {
                                    id: 'collapseTwo',
                                    question:
                                        '¿Pueden desarrollar una app para Android e iOS al mismo tiempo?',
                                    answer: 'Sí, con frameworks como React Native o Flutter desarrollamos apps multiplataforma con un solo código base, reduciendo tiempo y costos.',
                                },
                                {
                                    id: 'collapseThree',
                                    question:
                                        '¿Cuánto tiempo toma desarrollar una aplicación?',
                                    answer: 'El tiempo depende de la complejidad. En general, tardamos de 2 a 6 meses desde la planificación hasta el lanzamiento.',
                                },
                                {
                                    id: 'collapseFour',
                                    question:
                                        '¿Qué incluye el soporte post-lanzamiento?',
                                    answer: 'Incluye mantenimiento, actualizaciones y soporte técnico continuo para asegurar el éxito de tu aplicación.',
                                },
                                {
                                    id: 'collapseFive',
                                    question:
                                        '¿Pueden integrar mi app con otros sistemas?',
                                    answer: 'Sí, podemos integrar tu aplicación con APIs externas, pasarelas de pago y otros sistemas personalizados.',
                                },
                            ].map((faq, index) => (
                                <div
                                    className="accordion-item mb-3"
                                    key={index}
                                >
                                    <h2
                                        className="accordion-header"
                                        id={`heading${index + 1}`}
                                    >
                                        <button
                                            className="accordion-button bg-white text-dark shadow-sm rounded"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${faq.id}`}
                                            aria-expanded={index === 0}
                                            aria-controls={faq.id}
                                            style={{
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                padding: '15px 20px',
                                            }}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div
                                        id={faq.id}
                                        className={`accordion-collapse collapse ${
                                            index === 0 ? 'show' : ''
                                        }`}
                                        aria-labelledby={`heading${index + 1}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div
                                            className="accordion-body bg-light text-dark rounded"
                                            style={{
                                                padding: '20px',
                                                fontSize: '0.95rem',
                                                lineHeight: '1.7',
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
