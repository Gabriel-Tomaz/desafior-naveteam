import styled from 'styled-components';

import InputMask from 'react-input-mask';

import {FieldArea} from '../../styles/global';

export const FormContent = styled.div`
    width: 50%;
    height: auto;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 1px) and (max-width: 768px) {
       width: 90%;
       justify-content: flex-start;
       margin-top: 80px;
    }
`;

export const FormHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2{
        font-weight: 600;
        color: #212121;
    }

    svg{
        cursor: pointer;
    }
`;

export const Form = styled.form`
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

    @media(min-width: 1px) and (max-width: 768px) {
        min-height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 20px;

        button{
            width: 95%;
            right: 0;
            justify-self: center;
        }
    }
`;

export const FieldAreaForm = styled(FieldArea)`
    width: 95%;
`;

export const MaskedInput = styled(InputMask)`
    width: auto;
    height: 40px;
    outline: none;
    border: solid 1px #424242;
    font-size: 1.1em;
    padding: 0 12px;

    &::placeholder{
        color: #9E9E9E;
    }
`