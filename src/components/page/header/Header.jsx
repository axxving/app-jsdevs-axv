import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Header = () => {
    return (
        <header>
            <nav
                className="navbar navbar-expand-md"
                id="header"
                style={{ background: '#071013' }}
            >
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand text-white fw-bold" href="#">
                        <span style={{ fontSize: '1.5rem' }}>JSDEVS</span>
                        <br />
                        <small className="text-white-50">EN MERN STACK</small>
                    </a>

                    {/* Botón del menú hamburguesa */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menú de navegación */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#home">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="#about"
                                >
                                    Nosotros
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#services"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Servicios
                                </a>
                                <ul
                                    className="dropdown-menu text-dark"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Desarrollo Web
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Desarrollo Movil
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="#contact"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>

                        {/* Información de contacto */}
                        <div className="d-none d-md-flex align-items-center text-white">
                            <i className="bi bi-telephone-fill fs-4 me-2"></i>
                            <div>
                                <span className="d-block fw-bold">
                                    Llamanos
                                </span>
                                <span>+52-22-1129-5868</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
