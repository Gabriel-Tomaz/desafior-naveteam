import React from 'react';

import {Button} from '../../styles/global';
import {ModalBody,ModalContent,Menssage,Title,Text,ButtonsArea,CancelButton,Close} from './style';

const Modal = ({children,openModal,closeModal,action,menssage,title,text,buttons,closeColor}) => {
    return(
        <ModalBody openModal={openModal} id="modal">
            <ModalContent>
                {children}
                <Close size={24} color={(closeColor) ? closeColor : '#212121'} onClick={closeModal} id="btn-close"/> 
                {(menssage === true) ? (
                    <Menssage>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                    </Menssage>
                ):null}
                {(buttons === true) ? (
                    <ButtonsArea>
                        <CancelButton onClick={closeModal}>Cancelar</CancelButton>
                        <Button onClick={action}>Excluir</Button>
                    </ButtonsArea>
                ):null}
            </ModalContent>
        </ModalBody>
    );
}

export default Modal;