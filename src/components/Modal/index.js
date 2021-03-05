import React from 'react';

import {ModalBody,ModalContent} from './style';

const Modal = ({openModal, children}) => {
    return(
        <ModalBody openModal={openModal}>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalBody>
    );
}

export default Modal;