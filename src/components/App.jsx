import { Component } from "react"
import { ContactsList } from "./ContactsList/ContactsList";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { Section } from "./Section.styled";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', tel: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', tel: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', tel: '227-91-26'}
    ],
    filter: ''
  }

  onContactAdd = (newContact) => {
    if(this.state.contacts.find(contact => contact.name === newContact.name)){
      alert(`${newContact.name} is already in your phonebook`);
      return;
    }
    this.setState(prevState => {
      return{
        contacts: [...prevState.contacts, newContact]
      }
    })
    }

    onContactDelete = (contactId) => {
      this.setState(prevState => {
        return {
          contacts: prevState.contacts.filter(contact => contact.id !== contactId)
        }
      })
    }
  
    changeNameFilter = (contactName) => {
      this.setState({filter: contactName})
    };

    getContacts = () => {
      const {contacts, filter} = this.state;
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
  
     
    

  render(){ 
    const visibleContacts = this.getContacts();
    return (
    <>
      <Section>
        <AddContactForm onContactAdd = {this.onContactAdd}/>
      </Section>
      <Section>
        <h2>Contacts:</h2>
        <ContactsFilter filter = {this.filter} onNameFilter = {this.changeNameFilter}/>
        <ContactsList contacts = {visibleContacts} onDelete = {this.onContactDelete}/>
      </Section>
      </>
)}}