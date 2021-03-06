import React from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {MdKeyboardArrowLeft} from 'react-icons/md';

import {Context} from '../../Context/NaverContext';

import {Label,InputField,Button} from '../../styles/global';
import {FormContent,FormHeader,Form,FieldAreaForm} from './style';

const FormComponent = ({Title,onSubmit}) => {
    const history = useHistory();
    const {naver,setNaver} = useContext(Context);

    const testDois = () => {
        setNaver('OLha só que legal');
    }

    console.log(naver);

    return(
        <FormContent>
            <FormHeader>
                <MdKeyboardArrowLeft color="#212121" size={36} onClick={() => {history.goBack()}}/>
                <h2>{Title}</h2>
            </FormHeader>
            <Form onSubmit={() => testDois()}>
                <FieldAreaForm>
                    <Label>Nome</Label>
                    <InputField></InputField>
                </FieldAreaForm>

                <FieldAreaForm>
                    <Label>Cargo</Label>
                    <InputField></InputField>
                </FieldAreaForm>

                <FieldAreaForm>
                    <Label>Idade</Label>
                    <InputField></InputField>
                </FieldAreaForm>

                <FieldAreaForm>
                    <Label>Tempo de Empresa</Label>
                    <InputField></InputField>
                </FieldAreaForm>

                <FieldAreaForm>
                    <Label>Projetos que participou</Label>
                    <InputField></InputField>
                </FieldAreaForm>

                <FieldAreaForm>
                    <Label>URL da foto do Naver</Label>
                    <InputField></InputField>
                </FieldAreaForm>
                <Button>Salvar</Button>
            </Form>
        </FormContent>
    );
}

export default FormComponent;