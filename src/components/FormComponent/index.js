import React from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Formik} from 'formik';
import * as yup from 'yup';
import {MdKeyboardArrowLeft} from 'react-icons/md';

import {Context} from '../../Context/NaverContext';

import {Label,InputField,Button,AlertMenssage} from '../../styles/global';
import {FormContent,FormHeader,Form,FieldAreaForm} from './style';

const FormComponent = ({Title,onSubmit}) => {
    const history = useHistory();
    const {setNaver} = useContext(Context);

    const formSchema = yup.object().shape({
        name: yup.string()
            .min(3,'Por favor, informe um nome válido.')
            .required('Por favor, informe seu nome.'),
        job_role: yup.string().required('Por favor, informe seu cargo.'),
        birthdate: yup.string().required('Por favor, informe sua data de nascimento.'),
        admission_date: yup.string().required('Por favor, informe sua data de admissão.'),
        project: yup.string().required('Por favor, informe pelo menos um projeto.'),
        url: yup.string().required('Por favor, informe a URL da foto.'),
    });

    return(
        <Formik
            initialValues={
                {
                    name: '',
                    job_role: '',
                    birthdate: '',
                    admission_date: '',
                    project: '',
                    url: '',
                }
            }
            validationSchema={formSchema}
            onSubmit={values => setNaver(values)}
        >
            {({handleChange,handleBlur,handleSubmit,errors,touched,values}) => (
                <FormContent>
                    <FormHeader>
                        <MdKeyboardArrowLeft color="#212121" size={36} onClick={() => {history.goBack()}}/>
                        <h2>{Title}</h2>
                    </FormHeader>
                    <Form onSubmit={handleSubmit}>
                        <FieldAreaForm>
                            <Label>Nome</Label>
                            <InputField 
                                placeholder="Nome"
                                name="name" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name ? (
                                <AlertMenssage>{errors.name}</AlertMenssage>
                            ):null}
                        </FieldAreaForm>
        
                        <FieldAreaForm>
                            <Label>Cargo</Label>
                            <InputField 
                                placeholder="Cargo"
                                name="job_role" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.job_role}
                            />
                            {errors.job_role && touched.job_role ? (
                                <AlertMenssage>{errors.job_role}</AlertMenssage>
                            ):null}
                        </FieldAreaForm>
        
                        <FieldAreaForm>
                            <Label>Data de Nascimento</Label>
                            <InputField 
                                placeholder="Data de Nascimento"
                                name="birthdate" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.birthdate}
                            />
                            {errors.birthdate && touched.birthdate ? (
                                <AlertMenssage>{errors.birthdate}</AlertMenssage>
                            ):null}
                        </FieldAreaForm>
        
                        <FieldAreaForm>
                            <Label>Data de Admissão</Label>
                            <InputField 
                                placeholder="Data de Admissão"
                                name="admission_date" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.admission_date}
                            />
                            {errors.admission_date && touched.admission_date ? (
                                <AlertMenssage>{errors.admission_date}</AlertMenssage>
                            ):null}
                        </FieldAreaForm>
        
                        <FieldAreaForm>
                            <Label>Projetos que participou</Label>
                            <InputField 
                                placeholder="Projetos que participou"
                                name="project" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.project}
                            />
                            {errors.project && touched.project ? (
                                <AlertMenssage>{errors.project}</AlertMenssage>
                            ):null}
                        </FieldAreaForm>
        
                        <FieldAreaForm>
                            <Label>URL da foto do Naver</Label>
                            <InputField 
                                placeholder="Url da foto do Naver"
                                name="url" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.url}
                            />
                            {errors.url && touched.url ? (
                                <AlertMenssage>{errors.url}</AlertMenssage>
                            ):null}
                        </FieldAreaForm>
                        <Button type="submit">Salvar</Button>
                    </Form>
                </FormContent>
            )}
        </Formik>
    );
}

export default FormComponent;