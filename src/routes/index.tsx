import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './home';
import AppComponent from '../components/app';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/app/",
        element: <AppComponent/>
    }
]);

export default router;