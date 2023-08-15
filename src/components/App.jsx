import { Component } from "react"
// import { nanoid } from 'nanoid'
import { Formik, Field, Form } from 'formik';

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  onContactAdd = (newContact) => {
    console.log(newContact)
    }
  

  render(){
    return (
    <>
      <section>
        <h2>Phonebook</h2>
        <Formik
          initialValues={{
          name: '',
          tel: '',
          }}

        onSubmit={(values) => {
          this.onContactAdd(values)
        }}
        >
          <Form>
            <label>
              Name
              <Field name="name" placeholder="Contact name..." />
            </label>
            <label>
              Tel.
              <Field name="tel" type = "tel" placeholder="000-000-000" />
            </label>
            <button type = "submit">Add contact</button>
          </Form>
        </Formik>
      </section>
      </>
)}}