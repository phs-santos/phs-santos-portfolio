import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import Style from "./Lista.module.scss";

import classNames from "classnames";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const iconClass = "fa fa-plus";

export default function Formulario() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = () => {
        axios.get(`${process.env.REACT_APP_API}getMessages`)
            .then(function (response) {
                setMessages(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
                width={{ xs: '80%', md: '50%' }} borderRadius={'0.5rem'} mb={'4rem'}>
                <Box sx={{ backgroundColor: '#8c8c8c' }} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
                    fontSize={'1rem'}>
                    Pessoas que enviaram mensagens
                </Box>
                <Box py={{ xs: '1rem', md: '2rem' }} px={{ xs: '2rem', md: '3rem' }} borderRadius={'0 0 0.5rem 0.5rem'}
                    sx={{ backgroundColor: '#27242f' }} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="message table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Ações</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {messages.map((message, i) => (
                                    <TableRow key={message._id}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{message.nome}</TableCell>
                                        <TableCell>{message.email}</TableCell>
                                        <TableCell><i className={classNames(iconClass, Style.red)} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>

                {/* <Box component={'section'} width={{ xs: '80%', md: '50%' }} borderRadius={'0.5rem'} mb={'4rem'}>
                
            </Box> */}
            </Box>
        </Box>
    );
}

{/* <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="message table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Telefone</TableCell>
                                <TableCell>Sexo</TableCell>
                                <TableCell>Mensagem</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {messages.map((message, i) => (
                                <TableRow key={message._id}>
                                    <TableCell>{i+1}</TableCell>
                                    <TableCell>{message.nome}</TableCell>
                                    <TableCell>{message.email}</TableCell>
                                    <TableCell>{message.telefone}</TableCell>
                                    <TableCell>{message.sexo}</TableCell>
                                    <TableCell>{message.mensagem}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> */}