import React from 'react';

export const HeaderContact = () => {
    return (
        <>
            {/* Barra superior */}
            <div
                className="bg-light py-2 d-none d-md-block"
                id="header-contact"
            >
                <div className="container-fluid">
                    <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center">
                        {/* Información de contacto */}
                        <div className="text-center text-sm-start mb-2 mb-sm-0">
                            <span className="d-block d-sm-inline">
                                <i className="bi bi-envelope-fill"></i>{' '}
                                jsdevs@gmail.com
                            </span>
                        </div>

                        {/* Iconos de redes sociales */}
                        <div className="d-flex gap-3 justify-content-center justify-content-sm-end">
                            <a href="#" className="text-dark">
                                <i className="bi bi-facebook fs-5"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="bi bi-instagram fs-5"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="bi bi-youtube fs-5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
