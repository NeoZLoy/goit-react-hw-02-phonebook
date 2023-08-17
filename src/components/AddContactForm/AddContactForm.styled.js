import { styled } from "styled-components";
import { Formik, Field, Form } from 'formik';

const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 8px;
`

const StyledField = styled(Field)`
width: 155px;
`

const StyledLabel = styled.label`
:nth-child(1){
margin-right: 4px;

}
`

const StyledButton = styled.button`
border: none;
background-color: #86E9FF;
width: 150px;
height: 40px;
`

export {StyledForm, StyledField, StyledLabel, StyledButton}