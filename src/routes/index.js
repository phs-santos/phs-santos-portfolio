import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Portfolio from '../pages/portfolio/Portfolio';
import Formulario from '../pages/formulario/Formulario';

export const AppRoutes = () => (
  <Routes>
    <Route exact path={'/'} element={<Home />} />
    <Route exact path={'/about'} element={<About />} />
    <Route exact path={'/portfolio'} element={<Portfolio />} />
    <Route exact path={'/formulario'} element={<Formulario />} />
  </Routes>
);
