import styled from 'styled-components';

import {Button} from '../../styles/global';

export const HomeContent = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const HomeListHeader = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: 600;
    }
`;

export const AddButton = styled(Button)`
    width: 175px; 
`;

export const UsersList = styled.div`
    width: 90%;
    height: 60vh;
    display: grid;
    grid-template-columns: repeat(4, calc(100% / 4.3));
    grid-template-rows: 100%;
    justify-content: space-between;
    overflow: auto;
`;

//Card do Naver.
export const UserCard = styled.div`
    width: 100%;
    height: auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;


    h3{
        margin-top: 5px;

        &:nth-child(3){
            font-weight: 400;
        }
    }
`;

//Imagem do Naver que fica no card.
export const UserImg = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        max-width: 100%;
        filter: grayscale(100);
    }
`;

//Div das ações que podem ser executadas no card.
export const CardActions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;

    svg{
        margin-right: 8px;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
    }
`;

//Delete Naver
export const DeleteContent = styled.div`
    width: 90%;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    h2{
        font-weight: 600;
        color: #212121;
    }

    p{
        color: #212121;
    }

    div{
        width: 70%;
        display: flex;
        justify-content: space-around;
        align-self: flex-end;
    }
`;

export const DeleteButtom = styled(Button)`
    width: 175px;
`;

export const CancelButton = styled(Button)`
    width: 175px;
    background-color: #FFF;
    border: solid 1px #212121;
    color: #212121;
`; 

export const Menssage = styled.div`
    width: 90%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    h2{
        color: #212121;
        font-weight: 600;
    }

    p{
        color: #212121;
        margin-top: 30px;
    }
`;