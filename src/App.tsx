import React from 'react';
import { useState } from 'react';
import AppComponent from './components/app';
import router from './routes';
import {RouterProvider} from 'react-router-dom';

function App() {

    return (
        <RouterProvider router={router} />
    );
};



export default App;
