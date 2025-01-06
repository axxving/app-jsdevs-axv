import React from 'react';
import { Hero } from './hero/Hero';
import { Header } from './header/Header';
import { HeaderContact } from './header/HeaderContact';

export const Page = () => {
    const stykeContainerHeader = {
        padding: '0',
        margun: '0',
        position: 'sticky',
        top: '0',
    };
    return (
        <>
            <div style={stykeContainerHeader}>
                <HeaderContact />
                <Header />
            </div>
            <Hero />
        </>
    );
};
