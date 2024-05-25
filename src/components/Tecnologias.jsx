import { IconExpress } from "./icons/IconExpress";
import { IconMongo } from "./icons/IconMongo";
import { IconNode } from "./icons/IconNode";
import { IconReact } from "./icons/IconReact";

export const Tecnologias = () => {
    return (
        <div className="container-fluid tecnologias py-5">
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col">
                        <h2 className="display-4 bold">Tecnologías</h2>
                        <p className="lead">Las tecnologías que utilizamos para desarrollar soluciones innovadoras</p>
                    </div>
                </div>
                <div id="tecnologiasCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <IconExpress className="display-1" />
                            <h5 className="mt-3">ExpressJS</h5>
                        </div>
                        <div className="carousel-item text-center">
                            <IconMongo className="display-1" />
                            <h5 className="mt-3">MongoDB</h5>
                        </div>
                        <div className="carousel-item text-center">
                            <IconNode className="display-1" />
                            <h5 className="mt-3">NodeJS</h5>
                        </div>
                        <div className="carousel-item text-center">
                            <IconReact className="display-1" />
                            <h5 className="mt-3">ReactJS</h5>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#tecnologiasCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#tecnologiasCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
