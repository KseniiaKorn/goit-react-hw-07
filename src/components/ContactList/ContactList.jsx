import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';


const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    
    return (
        <div >
            <ul className={s.contactList}>
                {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;