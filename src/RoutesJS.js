import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Armas from './Pages/Armas';
import Atributos from './Pages/Atributos';
import Tendencias from './Pages/Tendencias';

export default function RoutesJS() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/armas' element={<Armas />} />
                <Route path='/atributos' element={<Atributos />} />
                <Route path='/tendencias' element={<Tendencias />} />
            </Routes>
        </BrowserRouter>
    )
}