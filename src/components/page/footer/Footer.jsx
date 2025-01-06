import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-5 bg-primary text-white">
            <div className="container">
                <div className="row">
                    {/* Logo e Introducción */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h3 className="fw-bold">DevTech</h3>
                        <p className="text-white-50">
                            Impulsamos la innovación con soluciones en
                            desarrollo de aplicaciones web y móviles,
                            garantizando la transformación digital de tu
                            negocio.
                        </p>
                        {/* Iconos de redes sociales */}
                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="text-white fs-4">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-white fs-4">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-white fs-4">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-white fs-4">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="fw-bold">Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a
                                    href="#home"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Inicio
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#about"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#services"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Servicios
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#portfolio"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Portafolio
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#contact"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Contáctanos
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="fw-bold">Servicios</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a
                                    href="#web-development"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Desarrollo Web
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#mobile-development"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Desarrollo Móvil
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#ui-ux-design"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Diseño UI/UX
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#cloud-solutions"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Soluciones en la Nube
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#cybersecurity"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    Ciberseguridad
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Información de Contacto */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Información</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <i className="bi bi-telephone-fill me-2"></i>{' '}
                                Teléfono: +1 800-123-4567
                            </li>
                            <li className="mb-3">
                                <i className="bi bi-envelope-fill me-2"></i>{' '}
                                Email: info@devtech.com
                            </li>
                            <li>
                                <i className="bi bi-geo-alt-fill me-2"></i>{' '}
                                Dirección: Calle Innovación 123, Ciudad Tec, TX
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Línea y Copyright */}
                <div className="text-center mt-4">
                    <hr className="text-white-50" />
                    <p className="text-white-50">
                        © 2023 DevTech. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
