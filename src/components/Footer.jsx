export const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light py-5 footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h3 className="bold mb-4">Sobre Nosotros</h3>
                        <p>Somos un equipo dedicado a proporcionar soluciones tecnológicas innovadoras y de alta calidad.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h3 className="bold mb-4">Enlaces Rápidos</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#servicios" className="text-light text-decoration-none">
                                    <i className="bi bi-chevron-right"></i> Servicios
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#sobre" className="text-light text-decoration-none">
                                    <i className="bi bi-chevron-right"></i> Sobre Nosotros
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#contacto" className="text-light text-decoration-none">
                                    <i className="bi bi-chevron-right"></i> Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3 className="bold mb-4">Contacto</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i> Dirección: Calle Falsa 123, Ciudad, País
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone-fill me-2"></i> Teléfono: +123 456 7890
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-envelope-fill me-2"></i> Email: info@ejemplo.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col">
                        <p className="m-0">&copy; 2024 JSDevs. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
