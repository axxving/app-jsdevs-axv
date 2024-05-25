
export const Servicios = () => {
    return (
        <>
            <div id="servicios" className="container-fluid py-5 servicios">
                <div className="container">
                    <div className="container-fluid py-5 servicios">
                        <div className="container">
                            <div className="row text-center mb-4">
                                <div className="col">
                                    <h2 className="display-4 bold">Nuestros <span className="color-primary">Servicios</span></h2>
                                    <p className="lead">Descubre lo que podemos hacer por ti</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 shadow-sm border-0">
                                        <div className="card-body d-flex flex-column align-items-center text-center">
                                            <i className="bi bi-globe2 display-1 p-3"></i>
                                            <h5 className="card-title mt-3">Desarrollo Web</h5>
                                            <p className="card-text">Creamos sitios web personalizados y responsivos utilizando las últimas tecnologías.</p>
                                        </div>
                                        <div className="card-footer border-0 text-center">
                                            <button type="button" className="btn btn-warning mb-3 mt-3">
                                                <i className="bi bi-arrow-right"></i> Más Información
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 shadow-sm border-0">
                                        <div className="card-body d-flex flex-column align-items-center text-center">
                                            <i className="bi bi-phone display-1 p-3"></i>
                                            <h5 className="card-title mt-3">Desarrollo de Aplicaciones Móviles</h5>
                                            <p className="card-text">Desarrollamos aplicaciones móviles intuitivas y de alto rendimiento para Android e iOS.</p>
                                        </div>
                                        <div className="card-footer border-0 text-center">
                                            <button type="button" className="btn btn-warning mb-3 mt-3">
                                                <i className="bi bi-arrow-right"></i> Más Información
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 shadow-sm border-0">
                                        <div className="card-body d-flex flex-column align-items-center text-center">
                                            <i className="bi bi-bar-chart display-1 p-3"></i>
                                            <h5 className="card-title mt-3">Consultoría Tecnológica</h5>
                                            <p className="card-text">Ofrecemos asesoramiento y soluciones tecnológicas adaptadas a las necesidades de tu negocio.</p>
                                        </div>
                                        <div className="card-footer border-0 text-center">
                                            <button type="button" className="btn btn-warning mb-3 mt-3">
                                                <i className="bi bi-arrow-right"></i> Más Información
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
