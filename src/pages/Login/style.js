import styled from 'styled-components';

import {Button} from '../../styles/global';

export const LoginForm = styled.form`
    width:  68vh;
    height: 60.8vh;
    border: solid 1px #212121;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media(min-width: 1px) and (max-width: 768px) {
        width: 90%;
        height: 55vh;
    }

`;

export const Logo = styled.img`
    max-width: 50%;
`;

export const ButtonLogin = styled(Button)`
    width: 80%;

    @media(min-width: 1px) and (max-width: 768px) {
        width: 90%;
    }
`;

