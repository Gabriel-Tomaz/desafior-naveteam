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
    min-height: 420px;
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
    min-height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    filter: grayscale(100);
    cursor: pointer;
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
        transition: all 0.2s;

        &:hover{
            opacity: 0.9;
        }
    }
`;
