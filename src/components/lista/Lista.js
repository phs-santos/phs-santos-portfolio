import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import Style from "./Lista.module.scss";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Formulario() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = () => {
        axios.get('http://localhost:8181/api/getMessages')
            .then(function (response) {
                console.log(response.data);
                setMessages(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Box component={'section'} width={{ xs: '80%', md: '50%' }} borderRadius={'0.5rem'} mb={'4rem'}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="message table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Telefone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {messages.map((message, i) => (
                                <TableRow key={message._id}>
                                    <TableCell>{i+1}</TableCell>
                                    <TableCell>{message.nome}</TableCell>
                                    <TableCell>{message.email}</TableCell>
                                    <TableCell>{message.telefone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
