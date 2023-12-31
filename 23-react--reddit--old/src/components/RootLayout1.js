import React from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';

const RootLayout = ({ accessToken, selectedSubReddit, setSelectedCriterion }) => {
    return (
        <>
            <Header
                accessToken={accessToken}
                selectedSubReddit={selectedSubReddit}
                setSelectedCriterion={setSelectedCriterion} />
            {/* Outlet will render a <main> component depending on the route selected */}
            <Outlet />
        </>
    );
};

export default RootLayout;
