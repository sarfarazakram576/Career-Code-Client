import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div className="md:container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;