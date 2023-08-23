import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

// paginas
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Formulario from '../pages/formulario/Formulario';
import Lista from '../pages/lista/Lista';
import Login from '../pages/login/Login';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            {/* <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>   */}

            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>

            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/portfolio'} element={<Portfolio />} />
                  <Route exact path={'/formulario'} element={<Formulario />} />
                  <Route exact path={'/lista'} element={<Lista />} />
                  <Route exact path={'/login'} element={<Login />} />
               </Routes>
            </Grid>
         </Grid>
      </Box>
   )
}

