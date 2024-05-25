import imgHero from '../assets/imgs/media/1.png';

export const Hero = () => {
    return (
        <>
            <div className="container-fluid hero text-light mt-5 py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <span className="badge p-2 bg-warning-badge mb-3">Desarrollo de Apps Web!</span>
                            <h1 className="display-3 bold mt-2"> <span className='color-success'>Impulsa</span> tus ideas y <span className='color-warning'>proyectos</span> con J<span className='color-primary'>S</span>Devs</h1>
                            <p className="lead">Somos un equipo mexicano especializado en desarrollo web</p>
                            <p>Convertimos tus conceptos en soluciones digitales innovadoras, eficientes y a la medida de tus necesidades.</p>
                            <button type="button" className="btn btn-success mt-3">
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
