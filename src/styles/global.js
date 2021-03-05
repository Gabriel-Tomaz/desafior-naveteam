import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: none;
`;

export const Label = styled.label`
    font-size: 1em;
    color: #212121;
    font-weight: 600;
    width: auto;
    margin-bottom: 5px;
`

export const InputField = styled.input`
    width: auto;
    height: 40px;
    outline: none;
    border: solid 1px #424242;
    font-size: 1.1em;
    padding: 0 12px;

    &::placeholder{
        color: #9E9E9E;
    }
`;


export const Button = styled.button`
    width: auto;
    height: 40px;
    background-color: #212121;
    font-weight: 600;
    color: #FFF;
    outline: none;
    border: none;
    position: relative;
    cursor: pointer;
    text-transform: capitalize;

    &:active{
        opacity: 0.9;
    }
`;

export const AlertMenssage = styled.span`
    color: #EF5350;
    font-size: 0.9em;
    margin-top: 5px;
`;
