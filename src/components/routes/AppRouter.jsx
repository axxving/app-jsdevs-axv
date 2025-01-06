import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from '../page/Page';
import { AppHome } from '../app/AppHome';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/home" element={<AppHome />} />
                </Routes>
            </Router>
        </>
    );
};
