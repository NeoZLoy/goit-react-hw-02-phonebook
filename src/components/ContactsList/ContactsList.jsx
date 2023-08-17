
export const ContactsList = ({contacts, onDelete}) => {
    return(
        <ul>
            {contacts.map(contact => {
                return(
                    <li key = {contact.id}>
                        {contact.name} : {contact.tel}
                        <button type="button" onClick={() => onDelete(contact.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}