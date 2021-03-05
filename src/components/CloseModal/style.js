import styled from 'styled-components';

import {MdClose} from 'react-icons/md';

export const Close = styled(MdClose)`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
`;