
export const Servicios = () => {
    return (
        <>
            <div className="container-fluid py-5 servicios">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col">
                            <h2 className="display-4 bold">Nuestros Servicios</h2>
                            <p className="lead">Descubre lo que podemos hacer por ti</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Desarrollo Web</h5>
                                    <p className="card-text">Creamos sitios web personalizados y responsivos utilizando las últimas tecnologías.</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-dark">
                                        <i className="bi bi-arrow-right"></i> Más Información
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Desarrollo de Aplicaciones Móviles</h5>
                                    <p className="card-text">Desarrollamos aplicaciones móviles intuitivas y de alto rendimiento para Android e iOS.</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-dark">
                                        <i className="bi bi-arrow-right"></i> Más Información
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Consultoría Tecnológica</h5>
                                    <p className="card-text">Ofrecemos asesoramiento y soluciones tecnológicas adaptadas a las necesidades de tu negocio.</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-dark">
                                        <i className="bi bi-arrow-right"></i> Más Información
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
