import React from 'react';
import {Formik} from 'formik';

import {Main,Label,InputField} from '../../styles/global';
import {LoginForm,Logo,FieldArea,ButtonLogin} from './style';

import LogoImg from '../../assets/img/logo.svg';

const Login = () => {
    return(
       <Main>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange,handleBlur,handleSubmit,values}) => (
                    <LoginForm onSubmit={handleSubmit}>
                        <Logo src={LogoImg} alt="Logo da Nave.rs"/>
                        <FieldArea>
                            <Label>E-mail</Label>
                            <InputField 
                                placeholder="E-mail" 
                                name="email" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </FieldArea>
                        <FieldArea>
                            <Label>Senha</Label>
                            <InputField 
                                placeholder="Senha" 
                                type="password"
                                name="password" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </FieldArea>
                        <ButtonLogin type="submit">Entrar</ButtonLogin>
                    </LoginForm>
                )}
            </Formik>
       </Main>
    );
}

export default Login;