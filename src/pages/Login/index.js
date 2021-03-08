import React from 'react';
import {useContext,useState} from 'react';
import {useHistory,Redirect} from 'react-router-dom';
import {Formik} from 'formik';
import * as yup from 'yup';

import api from '../../services/api';
import {Context} from '../../Context/AuthContext';

import Modal from '../../components/Modal';
import CloseModal from '../../components/CloseModal';

import {Main,Label,InputField,AlertMenssage,FieldArea,Menssage,Title} from '../../styles/global';
import {LoginForm,Logo,ButtonLogin} from './style';

import LogoImg from '../../assets/img/logo.svg';

const Login = () => {
    const history = useHistory();
    const [showModal,setShowModal] = useState(false);

    const LoginSchema = yup.object().shape({
        email: yup.string().email('Por favor, informe um email valido.').required('Por favor, informe seu email.'),
        password: yup.string().required('Por favor, informe a sua senha.')
    }); 

    const {token,setToken} = useContext(Context);

    const handleLogin = async (data) => {
        api.post('/users/login',data).then(response => {
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            history.push('/');
        }).catch(() => {
            setShowModal(true);
        });
    }

    if(token !== ''){
        return <Redirect to={'/'}/>
    }else if(typeof token !== 'string'){
        return <></>
    }

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
                onSubmit={values => handleLogin(values)}
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
            <Modal openModal={showModal}>
                 <CloseModal onClick={()=> {setShowModal(!showModal)}}/>
                 <Menssage>
                    <Title>Login</Title>
                    <p>
                        Ops, houve um problema ao realizar o login!<br/>
                        Verifique o email e a senha e tente novamente.
                    </p>
                 </Menssage>
            </Modal>
       </Main>
    );
}

export default Login;