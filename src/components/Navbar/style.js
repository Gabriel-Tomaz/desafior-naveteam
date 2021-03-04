import styled from 'styled-components';

import {Label} from '../../styles/global';

export const NavBody = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogo = styled.img`
    max-width: 10%;
    margin-left: 30px;
`;

export const LogoutLabel = styled(Label)`
    cursor: pointer;
    margin-right: 30px;
`;