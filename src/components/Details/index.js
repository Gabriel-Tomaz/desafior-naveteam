import React from 'react';
import {MdDelete,MdModeEdit} from 'react-icons/md';

import {Title,Label} from '../../styles/global';
import {DetailsBody,NaverDetails,DetailsActions,DetailsArea,NaverImg} from './style';
 
const Details = ({naver,deleteNaver,editNaver}) => {

     //Função para calcular idade do usuário e o tempo de empresa.
     function ageCalculator(date){
        const data = new Date();
    
        const year = data.getFullYear();
        const month = data.getMonth()+1;
        const day = data.getDate();

        if(date !== undefined){
            const birthYearPart = date.split('-');

            const birthYear = birthYearPart[0];
            const birthMounth = birthYearPart[1];
            const birthDay = birthYearPart[2].split('T');

            const age = year - birthYear;
        
            if(month <  birthMounth){
                return age-1;
            }else{
                if(month === birthMounth){
                    if(day < birthDay[0]){
                        return age-1;
                    }
                }
            }
        
            return age;
            }
    }

    return(
        <DetailsBody>
            <NaverImg style={{backgroundImage: `url(${naver.url})`}} />
            <NaverDetails>
                <DetailsArea>
                    <Title>{naver.name}</Title>
                    <p>{naver.job_role}</p>
                </DetailsArea>
                <DetailsArea>
                    <Label>Idade</Label>
                    <p>{ageCalculator(naver.birthdate)} anos</p>
                </DetailsArea>
           
                <DetailsArea>
                    <Label>Tempo de empresa</Label>
                    <p>
                        {(ageCalculator(naver.admission_date) > 1) ? (ageCalculator(naver.admission_date)) : ('Menos de um') }
                        {(ageCalculator(naver.admission_date) < 1) ? (' ano') : (' anos')}
                    </p>
                </DetailsArea>

                <DetailsArea>
                    <Label>Projetos que participou</Label>
                    <p>{naver.project}</p>
                </DetailsArea>

                <DetailsActions>
                    <MdDelete color="#212121" size={24} onClick={deleteNaver}/>
                    <MdModeEdit color="#212121" size={24} onClick={editNaver}/>
                </DetailsActions>

            </NaverDetails>
        </DetailsBody>
    );
}

export default Details;