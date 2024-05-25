import React from 'react';
import logo from '../assets/imgs/logo.png';

export const Header = () => {
    const handleNavItemClick = () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <>
            <div className="container-fluid header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#">
                            <img className='logo' src={logo} alt="logo jsdevs" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={handleNavItemClick}>Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#servicios" onClick={handleNavItemClick}>Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sobre" onClick={handleNavItemClick}>Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tecnologias" onClick={handleNavItemClick}>Tecnologias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contacto" onClick={handleNavItemClick}>Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
