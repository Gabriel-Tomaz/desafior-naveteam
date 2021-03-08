import styled from 'styled-components';
import {MdClose} from 'react-icons/md';

import { Button } from '../../styles/global';


export const ModalBody = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(33,33,33 ,0.5);
    z-index: 100;
    display: ${({openModal}) => openModal ? 'flex':'none'};
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
`;

export const ModalContent = styled.div`
    min-width: 590px;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    position: relative;
`;

//Área dos textos do Modal
export const Menssage = styled.div`
    width: 90%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

//Titulo do Modal
export const Title = styled.h2`
    color: #212121;
    font-weight: 600;
`;

//Texto de menssagem do Modal
export const Text = styled.p`
    color: #212121;
    margin-top: 30px;
`;

//Are onde ficam os botões do Modal
export const ButtonsArea = styled.div`
    width: 90%;
    height: 75px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

//Botão de cancelar
export const CancelButton = styled(Button)`
    background-color: #FFF;
    border: solid 1px #212121;
    color: #212121;
    margin-right: 20px;
`; 

//Butão de fechar o modal
export const Close = styled(MdClose)`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
`;