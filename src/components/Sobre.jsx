import React from 'react'

export const Sobre = () => {
    return (
        <>
            <div className="container-fluid sobre py-5">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col">
                            <h2 className="display-4 bold">Sobre Nosotros</h2>
                            <p className="lead">Conoce más acerca de nuestro equipo y nuestra misión</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h3>Nuestra Historia</h3>
                            <p>
                                JSDevs es un equipo mexicano de desarrolladores apasionados por crear soluciones digitales innovadoras y eficientes. Desde nuestra fundación, hemos trabajado con clientes de todo el mundo, ayudándolos a transformar sus ideas en realidad.
                            </p>
                            <h3>Nuestra Misión</h3>
                            <p>
                                Nuestra misión es proporcionar servicios de desarrollo de software de alta calidad que superen las expectativas de nuestros clientes, a través de un enfoque centrado en la innovación, la colaboración y la excelencia técnica.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-dark text-light p-4 text-center rounded">
                                <p>Imagen o video sobre el equipo</p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col">
                            <button type="button" className="btn btn-warning btn-lg">
                                <i className="bi bi-people-fill"></i> Conoce al Equipo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
