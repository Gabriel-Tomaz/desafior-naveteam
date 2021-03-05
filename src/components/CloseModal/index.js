import React from 'react';

import {Close} from './style';

const CloseModal = ({onClick}) => {
    return(
        <Close color="#212121" size={24} onClick={onClick}/>
    );
}

export default CloseModal;