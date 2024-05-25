export const Contacto = () => {
    return (
        <div className="container-fluid py-5 contacto">
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col">
                        <h2 className="display-4 bold">Ponte en <span className="color-primary">Contacto</span></h2>
                        <p className="lead">Ponte en contacto con nosotros para más información</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Tu nombre" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Teléfono</label>
                                <input type="tel" className="form-control" id="phone" placeholder="(123) 456-7890" />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">
                                    <i className="bi bi-envelope-fill"></i> Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
