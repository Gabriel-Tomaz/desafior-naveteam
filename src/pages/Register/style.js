import styled from 'styled-components';

import {FieldArea} from '../../styles/global';

export const RegisterContent = styled.div`
    width: 50%;
    height: auto;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RegisterHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2{
        font-weight: 600;
        color: #212121;
    }
`;

export const RegisterForm = styled.form`
    width: 100%;
    height: auto;
    min-height: 50vh;   
    display: grid;
    grid-template-columns: repeat(2, calc(50%));
    justify-content: center;
    align-content: space-around;
    align-items: center;
    justify-items: center;

    button{
        grid-column: 2;
        justify-self: end;
        right: 10px;
    }
`;

export const FieldAreaRegister = styled(FieldArea)`
    width: 95%;
`