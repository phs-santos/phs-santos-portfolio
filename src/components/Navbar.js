import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./../pages/home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'sobre mim',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Formulario',
        to: '/formulario',
        active: 'formulario'
    }

]

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'} fontSize={'1rem'}>
                {/* {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))} */}



                <Box component={'li'} sx={{ borderImageSource: info.gradient }}>
                    <Link to='/' className={Style.link}>
                        <p style={{ padding: '0.5rem 0' }}>Home</p>
                    </Link>
                </Box>

                <Box component={'li'} sx={{ borderImageSource: info.gradient }}>
                    <Link to='/about' className={Style.link}>
                        <p style={{ padding: '0.5rem 0' }}>about</p>
                    </Link>
                </Box>

                <Box component={'li'} sx={{ borderImageSource: info.gradient }}>
                <Toggler darkMode={darkMode} handleClick={handleClick} />
                
                </Box>


                <Box component={'li'} sx={{ borderImageSource: info.gradient }}>
                    <Link to='/portfolio' className={Style.link}>
                        <p style={{ padding: '0.5rem 0' }}>portifolio</p>
                    </Link>
                </Box>

                <Box component={'li'} sx={{ borderImageSource: info.gradient }}>
                    <Link to='/formulario' className={Style.link}>
                        <p style={{ padding: '0.5rem 0' }}>contato</p>
                    </Link>
                </Box>



                {/* <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li> */}
            </Box>
        </Box>
    )
}