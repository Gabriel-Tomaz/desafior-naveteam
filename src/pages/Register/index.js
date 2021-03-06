import React from 'react';
import {MdKeyboardArrowLeft} from 'react-icons/md';

import Navbar from '../../components/Navbar';

import {Main,Label,InputField,Button} from '../../styles/global';
import {RegisterContent,RegisterHeader,RegisterForm,FieldAreaRegister} from './style';

const Register = () => {
    return(
        <Main>
            <Navbar />
            <RegisterContent>
                <RegisterHeader>
                    <MdKeyboardArrowLeft color="#212121" size={36}/>
                    <h2>Adicionar Naver</h2>
                </RegisterHeader>
                <RegisterForm>
                    <FieldAreaRegister>
                        <Label>Nome</Label>
                        <InputField></InputField>
                    </FieldAreaRegister>

                    <FieldAreaRegister>
                        <Label>Cargo</Label>
                        <InputField></InputField>
                    </FieldAreaRegister>

                    <FieldAreaRegister>
                        <Label>Idade</Label>
                        <InputField></InputField>
                    </FieldAreaRegister>

                    <FieldAreaRegister>
                        <Label>Tempo de Empresa</Label>
                        <InputField></InputField>
                    </FieldAreaRegister>

                    <FieldAreaRegister>
                        <Label>Projetos que participou</Label>
                        <InputField></InputField>
                    </FieldAreaRegister>

                    <FieldAreaRegister>
                        <Label>URL da foto do Naver</Label>
                        <InputField></InputField>
                    </FieldAreaRegister>
                    <Button>Salvar</Button>
                </RegisterForm>
            </RegisterContent>
        </Main>
    );
}

export default Register;