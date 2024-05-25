import React, { useEffect } from 'react';

export const Loader = () => {
    useEffect(() => {
        const handleLoad = () => {
            document.body.classList.add('loaded');
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        </>
    );
};
