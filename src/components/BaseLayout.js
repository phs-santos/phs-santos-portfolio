import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import { Box, Grid } from '@mui/material';
import { AppRoutes } from '../routes';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode;
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }
   }, []);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid
            container
            display={'flex'}
            flexDirection={'column'}
            minHeight={'100vh'}
            justifyContent={'space-between'}
         >
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid item flexGrow={1}>
               <AppRoutes />
            </Grid>
         </Grid>
      </Box>
   );
}
