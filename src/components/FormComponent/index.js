import React from 'react';
import {MdKeyboardArrowLeft} from 'react-icons/md';

import {Label,InputField,Button} from '../../styles/global';
import {FormContent,FormHeader,Form,FieldAreaForm} from './style';

const FormComponent = ({Title}) => {
    return(
        <FormContent>
            <FormHeader>
                <MdKeyboardArrowLeft color="#212121" size={36}/>
                <h2>{Title}</h2>
            </FormHeader>
            <Form>
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