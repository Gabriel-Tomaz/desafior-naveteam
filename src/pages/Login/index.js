import React from 'react';

import {Main,Label,InputField} from '../../styles/global';
import {LoginBody,Logo,FieldArea,ButtonLogin} from './style';

import LogoImg from '../../assets/img/logo.svg';

const Login = () => {
    return(
       <Main>
            <LoginBody>
                <Logo src={LogoImg} alt="Logo da Nave.rs"/>
                <FieldArea>
                    <Label>E-mail</Label>
                    <InputField placeholder="E-mail"></InputField>
                </FieldArea>
                <FieldArea>
                    <Label>Senha</Label>
                    <InputField placeholder="Senha"></InputField>
                </FieldArea>
                <ButtonLogin>Entrar</ButtonLogin>
            </LoginBody>
       </Main>
    );
}

export default Login;