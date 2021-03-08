import styled from 'styled-components';

export const DetailsBody = styled.div`
    width: 65vw;
    height: 60vh;
    background-color: #FFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
        max-height: 100%;
        filter: grayscale(100);
    }
`;

export const NaverDetails = styled.div`
    width: 50%;
    height: 50vh;
    margin-left: 20px;
    display: grid;
    grid-template-rows: repeat(4, 70px);

    p{
        color: #212121;
        margin-top: 8px;
    }
`;

export const DetailsArea = styled.div`
    height: auto;
    align-self: end;
`

export const DetailsActions = styled.div`
    width: 100%;
    height: auto;   
    align-self: end;

    svg{
        margin-right: 8px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover{
            opacity: 0.9;
        }
    }
`;