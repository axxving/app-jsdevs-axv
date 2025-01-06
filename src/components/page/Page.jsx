import React from 'react';
import { Hero } from './hero/Hero';
import { Header } from './header/Header';
import { HeaderContact } from './header/HeaderContact';
import { About } from './about/About';
import { CompanyNumbers } from './numbers/CompanyNumbers';
import { Services } from './services/Services';
import { Technologies } from './technologies/Technologies';
import { Reasons } from './reasons/Reasons';
import { Testimonials } from './testimonials/Testimonials';
import { CallToAction } from './cta/CallToAction';
import { CaseStudies } from './caseStudies/CaseStudies';
import { Process } from './process/ProcessSection';
import { FAQSection } from './faq/FAQSection';
import { Blog } from './blog/Blog';

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
            <About />
            <CompanyNumbers />
            <Services />
            <Technologies />
            <Reasons />
            <Testimonials />
            <CallToAction />
            <CaseStudies />
            <Process />
            <FAQSection />
            <Blog />
        </>
    );
};
