import styled from 'styled-components';

import {Label} from '../../styles/global';

export const NavBody = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #FFF;
`;

export const NavLogo = styled.img`
    max-width: 10%;
    cursor: pointer;

    @media(min-width: 1px) and (max-width: 768px) {
        max-width: 30%;
    }
`;

export const LogoutLabel = styled(Label)`
    cursor: pointer;
`;