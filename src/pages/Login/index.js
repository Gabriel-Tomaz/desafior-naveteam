import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

import {Main,Label,InputField,AlertMenssage} from '../../styles/global';
import {LoginForm,Logo,FieldArea,ButtonLogin} from './style';

import LogoImg from '../../assets/img/logo.svg';

const Login = () => {


    const LoginSchema = yup.object().shape({
        email: yup.string().email('Por favor, informe um email valido.').required('Por favor, informe seu email.'),
        password: yup.string().required('Por favor, informe a sua senha.')
    }); 

    return(
       <Main>
            <Formik
                initialValues={
                    {
                        email: '', 
                        password: ''
                    }
                }
                validationSchema={LoginSchema}
                onSubmit={values => console.log(values)}
            >
                {({handleChange,handleBlur,handleSubmit,errors,touched,values}) => (
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
                            {errors.email && touched.email ? (
                                <AlertMenssage>{errors.email}</AlertMenssage>
                            ):null}
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
                            {errors.password && touched.password ? (
                                <AlertMenssage>{errors.password}</AlertMenssage>
                            ):null}
                        </FieldArea>
                        <ButtonLogin type="submit">Entrar</ButtonLogin>
                    </LoginForm>
                )}
            </Formik>
       </Main>
    );
}

export default Login;