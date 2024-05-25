import React, { useEffect } from 'react';

export const ScrollToTopButton = () => {
    useEffect(() => {
        const btnUp = document.getElementById('boton-up');

        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY >= 200) {
                btnUp.style.bottom = '15px';
            } else {
                btnUp.style.bottom = '-100px';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <a href="#hero" className="btn-up" id="boton-up">
                <i className="bi bi-arrow-up"></i>
            </a>
        </>
    );
};
