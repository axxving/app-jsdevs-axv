import React from 'react';

export const Footer = () => {
    return (
        <footer
            className="py-5"
            style={{
                backgroundColor: '#33658A',
                color: 'white',
            }}
        >
            <div className="container">
                <div className="row gy-5">
                    {/* Columna 1: Logo e Introducción */}
                    <div className="col-lg-4">
                        <h3 className="fw-bold mb-3">DevTech</h3>
                        <p
                            className="text-white-75 mb-4"
                            style={{ lineHeight: '1.8', fontSize: '1rem' }}
                        >
                            Impulsamos la innovación con soluciones en
                            desarrollo de aplicaciones web y móviles,
                            garantizando la transformación digital de tu
                            negocio.
                        </p>
                        <div className="d-flex gap-3">
                            {[
                                { icon: 'bi bi-facebook', link: '#' },
                                { icon: 'bi bi-twitter', link: '#' },
                                { icon: 'bi bi-instagram', link: '#' },
                                { icon: 'bi bi-youtube', link: '#' },
                            ].map((social, index) => (
                                <a
                                    href={social.link}
                                    key={index}
                                    className="text-white fs-4"
                                    style={{ transition: 'color 0.3s' }}
                                    onMouseOver={e =>
                                        (e.target.style.color = '#f6c90e')
                                    }
                                    onMouseOut={e =>
                                        (e.target.style.color = 'white')
                                    }
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div className="col-lg-2">
                        <h5 className="fw-bold mb-4">Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            {[
                                { text: 'Inicio', href: '#home' },
                                { text: 'Sobre Nosotros', href: '#about' },
                                { text: 'Servicios', href: '#services' },
                                { text: 'Portafolio', href: '#portfolio' },
                                { text: 'Contáctanos', href: '#contact' },
                            ].map((link, index) => (
                                <li className="mb-3" key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white-50 text-decoration-none"
                                        style={{
                                            fontSize: '1rem',
                                            transition: 'color 0.3s',
                                        }}
                                        onMouseOver={e =>
                                            (e.target.style.color = '#f6c90e')
                                        }
                                        onMouseOut={e =>
                                            (e.target.style.color = 'white-50')
                                        }
                                    >
                                        <i className="bi bi-chevron-right me-2"></i>
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Servicios */}
                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-4">Servicios</h5>
                        <ul className="list-unstyled">
                            {[
                                {
                                    text: 'Desarrollo Web',
                                    href: '#web-development',
                                },
                                {
                                    text: 'Desarrollo Móvil',
                                    href: '#mobile-development',
                                },
                                { text: 'Diseño UI/UX', href: '#ui-ux-design' },
                                {
                                    text: 'Soluciones en la Nube',
                                    href: '#cloud-solutions',
                                },
                                {
                                    text: 'Ciberseguridad',
                                    href: '#cybersecurity',
                                },
                            ].map((service, index) => (
                                <li className="mb-3" key={index}>
                                    <a
                                        href={service.href}
                                        className="text-white-50 text-decoration-none"
                                        style={{
                                            fontSize: '1rem',
                                            transition: 'color 0.3s',
                                        }}
                                        onMouseOver={e =>
                                            (e.target.style.color = '#f6c90e')
                                        }
                                        onMouseOut={e =>
                                            (e.target.style.color = 'white-50')
                                        }
                                    >
                                        <i className="bi bi-chevron-right me-2"></i>
                                        {service.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 4: Información de Contacto */}
                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-4">Contáctanos</h5>
                        <ul className="list-unstyled">
                            <li
                                className="mb-3"
                                style={{ fontSize: '1rem', lineHeight: '1.8' }}
                            >
                                <i className="bi bi-telephone-fill me-2"></i>
                                Teléfono: +1 800-123-4567
                            </li>
                            <li
                                className="mb-3"
                                style={{ fontSize: '1rem', lineHeight: '1.8' }}
                            >
                                <i className="bi bi-envelope-fill me-2"></i>
                                Email: info@devtech.com
                            </li>
                            <li style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Dirección: Calle Innovación 123, Ciudad Tec, TX
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Línea y Copyright */}
                <div className="text-center mt-5">
                    <hr className="text-white-50" />
                    <p
                        className="text-white-75 mb-0"
                        style={{ fontSize: '0.9rem' }}
                    >
                        © 2023 DevTech. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
