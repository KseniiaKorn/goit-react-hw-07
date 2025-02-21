import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from '../../redux/contactsSlice';


const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filteredContacts = useSelector(selectFilteredContacts);

    if (filteredContacts.length === 0) {
        return (
            <p className={s.noContactsMessage}>
                {contacts.length === 0
                    ? "There are no contacts in a phonebook"
                    : "There are no contacts matching your query"}
            </p>
        );
    }
    
    return (
        <div >
            <ul className={s.contactList}>
                {filteredContacts.map((contact) => (
                    <li className={s.contactItem} key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;