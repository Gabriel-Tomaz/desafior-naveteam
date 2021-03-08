import React from 'react';
import {MdDelete,MdModeEdit} from 'react-icons/md';

import {Title,Label} from '../../styles/global';
import {DetailsBody,NaverDetails,DetailsActions,DetailsArea} from './style';
 
const Details = ({id}) => {


    return(
        <DetailsBody>
            <img src="https://avatars.githubusercontent.com/u/47036513?s=460&u=90205242151913a542459aa0a8e3fb4da5f84cc0&v=4" alt="Foto do Naver" />
            <NaverDetails>
                <DetailsArea>
                    <Title>Daniel Dantas</Title>
                    <p>Back-end</p>
                </DetailsArea>
                <DetailsArea>
                    <Label>Idade</Label>
                    <p>22 anos</p>
                </DetailsArea>
           
                <DetailsArea>
                    <Label>Tempo de empresa</Label>
                    <p>2 anos</p>
                </DetailsArea>

                <DetailsArea>
                    <Label>Projetos que participou</Label>
                    <p>Projeto tal</p>
                </DetailsArea>

                <DetailsActions>
                    <MdDelete color="#212121" size={24} />
                    <MdModeEdit color="#212121" size={24} />
                </DetailsActions>

            </NaverDetails>
        </DetailsBody>
    );
}

export default Details;