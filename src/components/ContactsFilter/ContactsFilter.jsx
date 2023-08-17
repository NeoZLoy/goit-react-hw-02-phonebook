import { Form, Formik, Field } from "formik"

export const ContactsFilter = ({filter, onNameFilter}) => {
    return(
        <div>
            <h3>Find contacts by name:</h3>
            <Formik
            initialValues={{
                searchName:"",
            }}
            >
                <Form onChange={(value) => onNameFilter(value.target.value)}>
                    <Field name="searchName" placeholder="Contact name to search..." />
                </Form>
            </Formik>
        </div>
        
    )
}