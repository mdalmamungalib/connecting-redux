import React from 'react';
import { Outlet } from 'react-router-dom';

const Frontend = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Frontend;