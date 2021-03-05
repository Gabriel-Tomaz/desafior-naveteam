import styled from 'styled-components';

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
    min-width: 500px;
    width: auto;
    height: auto;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
`;