import styled from 'styled-components';

import {Button} from '../../styles/global';

export const LoginBody = styled.div`
    width:  68vh;
    height: 60.8vh;
    border: solid 1px #212121;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Logo = styled.img`
    max-width: 50%;
`;

export const FieldArea = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const ButtonLogin = styled(Button)`
    width: 80%;
`