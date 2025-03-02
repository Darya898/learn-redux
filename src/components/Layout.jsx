import React from 'react';
import {Outlet} from "react-router-dom";
import Nav from "./Header/Nav/Nav.jsx";

const Layout = () => {
    return (
        <div>
            <main>
                <Outlet/> {/* Здесь будут отображаться вложенные маршруты */}
            </main>
        </div>
    );
};

export default Layout;