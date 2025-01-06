import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Testimonials = () => {
    const settings = {
        dots: true, // Mostrar puntos de navegación
        infinite: true, // Hacerlo infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 3, // Cantidad de testimonios visibles
        slidesToScroll: 1, // Desplazarse uno por uno
        autoplay: true, // Activar autoplay
        autoplaySpeed: 3000, // Tiempo entre cada desplazamiento automático (3 segundos)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Mostrar 2 testimonios en pantallas medianas
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Mostrar 1 testimonio en pantallas pequeñas
                },
            },
        ],
    };

    const testimonials = [
        {
            quote: '“Trabajar con esta empresa fue una experiencia increíble. Crearon nuestra app móvil en tiempo récord y con una calidad impresionante. ¡Altamente recomendados!”',
            name: 'Carlos Martínez',
            role: 'Fundador de Startup',
            image: 'https://via.placeholder.com/80?text=CM',
        },
        {
            quote: '“Gracias a ellos, ahora tenemos una plataforma web completamente funcional que ha duplicado nuestra eficiencia. Un equipo profesional y comprometido.”',
            name: 'Laura Fernández',
            role: 'Gerente de Proyectos',
            image: 'https://via.placeholder.com/80?text=LF',
        },
        {
            quote: '“Ellos entendieron nuestras necesidades y desarrollaron una solución personalizada que ha llevado nuestra empresa al siguiente nivel. ¡Estamos encantados con los resultados!”',
            name: 'Juan Rodríguez',
            role: 'CEO',
            image: 'https://via.placeholder.com/80?text=JR',
        },
        {
            quote: '“El equipo nos ayudó a crear una app móvil que ha mejorado la interacción con nuestros clientes. La atención al detalle fue excelente.”',
            name: 'Sofía López',
            role: 'Directora de Marketing',
            image: 'https://via.placeholder.com/80?text=SL',
        },
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-3">
                            <div
                                className="card border-0 shadow-sm h-100"
                                style={{
                                    border: '1px solid #007bff',
                                    borderRadius: '8px',
                                }}
                            >
                                <div className="card-body d-flex flex-column">
                                    <p className="text-muted fst-italic mb-4">
                                        {testimonial.quote}
                                    </p>
                                    <div className="d-flex align-items-center mt-auto">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="rounded-circle me-3"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                            }}
                                        />
                                        <div>
                                            <h6 className="mb-0 fw-bold">
                                                {testimonial.name}
                                            </h6>
                                            <p className="mb-0 text-primary">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-end text-primary">
                                        <i className="bi bi-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};
