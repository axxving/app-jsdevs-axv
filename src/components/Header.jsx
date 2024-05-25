import logo from '../assets/imgs/logo.png'

export const Header = () => {
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
                                    <a className="nav-link" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Características</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Precios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}
