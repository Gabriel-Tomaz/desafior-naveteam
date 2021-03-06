import React from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Formik} from 'formik';
import {MdKeyboardArrowLeft} from 'react-icons/md';

import {Context} from '../../Context/NaverContext';

import {Label,InputField,Button} from '../../styles/global';
import {FormContent,FormHeader,Form,FieldAreaForm} from './style';

const FormComponent = ({Title,onSubmit}) => {
    const history = useHistory();
    const {naver,setNaver} = useContext(Context);

    const submit = (values) => {
        setNaver(values);
    }

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

            onSubmit={values => submit(values)}
        >
            {({handleChange,handleBlur,handleSubmit,values}) => (
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
                        </FieldAreaForm>
        
                        <FieldAreaForm>
                            <Label>Idade</Label>
                            <InputField 
                                placeholder="Idade"
                                name="birthdate" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.birthdate}
                            />
                        </FieldAreaForm>
        
                        <FieldAreaForm>
                            <Label>Tempo de Empresa</Label>
                            <InputField 
                                placeholder="Tempo de empresa"
                                name="admission_date" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.admission_date}
                            />
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
                        </FieldAreaForm>
                        <Button type="submit">Salvar</Button>
                    </Form>
                </FormContent>
            )}
        </Formik>
    );
}

export default FormComponent;