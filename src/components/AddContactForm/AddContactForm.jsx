import { Formik, Field, Form } from 'formik';
import { nanoid } from "nanoid";
import { StyledButton, StyledField, StyledForm, StyledLabel } from './AddContactForm.styled';

export const AddContactForm = ({onContactAdd}) => {
    return (
        <>
            <h2>Phonebook</h2>
            <Formik
            initialValues={{
            name: '',
            tel: '',
            }}

            onSubmit={(values, actions) => {
            onContactAdd({...values, id: nanoid()})
            actions.resetForm();
            }}
            >
                <StyledForm>
                    <StyledLabel>
                    <span>Name</span>
                    <StyledField name="name" placeholder="Contact name..." />
                    </StyledLabel>
                    <StyledLabel>
                    <span>Tel</span>
                    <Field name="tel" type = "tel" placeholder="000-00-00" />
                    </StyledLabel>
                    <StyledButton type = "submit">Add contact</StyledButton>
                </StyledForm>
            </Formik>
        </>
       
    )
}