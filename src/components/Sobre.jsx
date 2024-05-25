export const Sobre = () => {
    return (
        <>
            <div className="container-fluid sobre py-5">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col">
                            <h2 className="display-4 bold">Sobre <span className="color-primary">Nosotros</span></h2>
                            <p className="lead">Conoce más acerca de nuestro equipo y nuestra misión</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="font-weight-bold">Nuestra <span className="color-success">Historia</span></h2>
                            <p>
                                JSDevs es un equipo mexicano de desarrolladores apasionados por crear soluciones digitales innovadoras y eficientes. Desde nuestra fundación, hemos trabajado con clientes de todo el mundo, ayudándolos a transformar sus ideas en realidad.
                            </p>
                            <h2 className="bold mt-4">Nuestra <span className="color-warning">Misión</span></h2>
                            <p>
                                Nuestra misión es proporcionar servicios de desarrollo de software de alta calidad que superen las expectativas de nuestros clientes, a través de un enfoque centrado en la innovación, la colaboración y la excelencia técnica.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-dark text-light p-4 text-center rounded shadow-sm">
                                <p>Imagen o video sobre el equipo</p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col">
                            <button type="button" className="btn btn-warning">
                                <i className="bi bi-people-fill"></i> Conoce al Equipo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
