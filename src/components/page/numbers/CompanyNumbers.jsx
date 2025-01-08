import React from 'react';
import imgBanner from '../../../assets/img/img-banner.png';

export const CompanyNumbers = () => {
    return (
        <section
            className="company-numbers-section text-white py-5"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imgBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container">
                <div className="row text-center">
                    {/* Título de la sección */}
                    <div className="col-12 mb-4">
                        <h2 className="fw-bold">Nuestra Empresa en Cifras</h2>
                    </div>

                    {/* Columna: Años de experiencia */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <h1 className="display-4 fw-bold mb-2">
                            10 <sup>+</sup>
                        </h1>
                        <p className="fw-bold">Años de Experiencia</p>
                    </div>

                    {/* Columna: Aplicaciones desarrolladas */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <h1 className="display-4 fw-bold mb-2">
                            500 <sup>+</sup>
                        </h1>
                        <p className="fw-bold">Apps Desarrolladas</p>
                    </div>

                    {/* Columna: Clientes satisfechos */}
                    <div className="col-12 col-md-4">
                        <h1 className="display-4 fw-bold mb-2">
                            300 <sup>+</sup>
                        </h1>
                        <p className="fw-bold">Clientes Satisfechos</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
