import React from 'react';
import {MdDelete,MdModeEdit} from 'react-icons/md';

import {Title,Label} from '../../styles/global';
import {DetailsBody,NaverDetails,DetailsActions,DetailsArea} from './style';
 
const Details = ({naver,deleteNaver}) => {
    return(
        <DetailsBody>
            <img src={naver.url} alt="Foto do Naver" />
            <NaverDetails>
                <DetailsArea>
                    <Title>{naver.name}</Title>
                    <p>{naver.job_role}</p>
                </DetailsArea>
                <DetailsArea>
                    <Label>Idade</Label>
                    <p>{naver.birthdate}</p>
                </DetailsArea>
           
                <DetailsArea>
                    <Label>Tempo de empresa</Label>
                    <p>{naver.admission_date}</p>
                </DetailsArea>

                <DetailsArea>
                    <Label>Projetos que participou</Label>
                    <p>{naver.project}</p>
                </DetailsArea>

                <DetailsActions>
                    <MdDelete color="#212121" size={24} onClick={deleteNaver}/>
                    <MdModeEdit color="#212121" size={24} />
                </DetailsActions>

            </NaverDetails>
        </DetailsBody>
    );
}

export default Details;