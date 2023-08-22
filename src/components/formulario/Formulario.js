import React, { useState } from 'react';
import Style from "./Formulario.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";
import axios from 'axios';


export default function Formulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post('http://localhost:8181/api/sendMessage', {
            nome,
            email,
            telefone,
            mensagem
        }).then(function (response) {
            console.log(response.data);

            setNome('');
            setEmail('');
            setTelefone('');
            setSexo('');
            setMensagem('');

            setShowPopup(true);

            setTimeout(() => {
                setShowPopup(false);
            }, 5000);

        }).catch(function (error) {
            console.error(error);
        });
    };

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
                width={{ xs: '80%', md: '50%' }} borderRadius={'0.5rem'} mb={'4rem'}>
                <Box sx={{ backgroundColor: '#8c8c8c',  }} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
                    fontSize={'1rem'}>
                    Me envie uma mensagem:
                </Box>
                <Box py={{ xs: '1rem', md: '2rem' }} px={{ xs: '2rem', md: '3rem' }} borderRadius={'0 0 0.5rem 0.5rem'}
                    sx={{ backgroundColor: '#27242f' }} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>

                    <form className={Style.novaTarefa} onSubmit={handleSubmit}>

                        <div className={Style.testePaulo}>
                            <div className={Style.inputContainer}>
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={nome}
                                    onChange={evento => setNome(evento.target.value)}
                                    id="nome"
                                    placeholder="Digite o nome"
                                    required />
                            </div>

                            <div className={Style.inputContainer}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={evento => setEmail(evento.target.value)}
                                    id="email"
                                    placeholder="Digite o email"
                                    required />
                            </div>
                        </div>

                        <div className={Style.testePaulo}>
                            <div className={Style.inputContainer}>
                                <label htmlFor="telefone">Telefone</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    value={telefone}
                                    onChange={evento => setTelefone(evento.target.value)}
                                    id="telefone"
                                    placeholder="Digite o telefone"
                                    required />
                            </div>

                            <div className={Style.inputContainer}>
                                <label htmlFor="sexo">Sexo</label>
                                <input
                                    type="text"
                                    name="sexo"
                                    value={sexo}
                                    onChange={evento => setSexo(evento.target.value)}
                                    id="sexo"
                                    placeholder="Digite seu sexo"
                                    required />
                            </div>
                        </div>

                        <div className={Style.textareaContainer}>
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                name="mensagem"
                                id="mensagem"
                                value={mensagem}
                                onChange={evento => setMensagem(evento.target.value)}
                                placeholder="Digite sua mensagem"
                                rows={5}
                                cols={50}
                                required
                            />
                        </div>

                        <button type='submit' className={Style.botao}>Enviar</button>
                    </form>


                    {showPopup && (
                        <div className={Style.popup}>
                            Mensagem enviada com sucesso!
                            {/* <button className={Style.closeButton} onClick={togglePopup}>
                                X
                            </button> */}
                        </div>
                    )}
                </Box>
            </Box>
        </Box>
    )
}