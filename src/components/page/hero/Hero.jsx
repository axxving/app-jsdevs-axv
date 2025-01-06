import React from 'react';
import imgHero from '../../../assets/img/img-hero.jpg'

export const Hero = () => {
    return (
        <section
            className="hero-section text-white d-flex align-items-center"
            style={{
                backgroundImage: `url('${imgHero}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/* Texto de bienvenida */}
                        <p className="text-uppercase fw-bold mb-2">
                            Bienvenidos a WebDev Solutions
                        </p>

                        {/* Título principal */}
                        <h1 className="display-4 fw-bold mb-4">
                            Creando Soluciones <br />
                            Web a la Medida
                        </h1>

                        {/* Descripción */}
                        <p className="lead mb-4">
                            Transformamos ideas en experiencias digitales
                            excepcionales. Nuestro equipo de expertos se
                            especializa en el diseño y desarrollo de sitios web
                            innovadores que impulsan el éxito de tu negocio.
                        </p>

                        {/* Botón */}
                        <a href="#discover" className="btn btn-primary btn-lg">
                            Descubre Más <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
