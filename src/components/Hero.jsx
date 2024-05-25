import imgHero from '../assets/imgs/media/1.png';

export const Hero = () => {
    return (
        <>
            <div className="container-fluid hero text-light mt-3 py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 bold">Bienvenidos a JSDevs</h1>
                            <p className="lead">Equipo Mexicano de Desarrollo de Aplicaciones Web</p>
                            <p>Transformamos tus ideas en soluciones digitales innovadoras y eficientes.</p>
                            <button type="button" className="btn btn-outline-light btn-lg mt-3">
                                <i className="bi bi-rocket"></i> Descubre Más
                            </button>
                        </div>
                        <div className="col-lg-6 text-center mt-4 mt-lg-0">
                            <img className='img-fluid mt-5' src={imgHero} alt="ilustracion de un programador con una laptop" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
