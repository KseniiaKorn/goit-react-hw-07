import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import s from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    function handleClick(id) {
        dispatch(deleteContact(id));
    }
    return (
        <>
            <div className={s.contact}>
                <p className={s.info}><BsFillPersonFill />{contact.name} </p>
                <p className={s.info}><BsFillTelephoneFill /> {contact.number}</p>
                
            </div>
            <button onClick={() => handleClick(contact.id)}>Delete</button>
        </>
    );
};

export default Contact;