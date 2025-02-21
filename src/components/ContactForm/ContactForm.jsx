import React, { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact));
    actions.resetForm();
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters'),
    number: Yup.string()
      .required('Number is required')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format: XXX-XX-XX'),
  });
  

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div>
          <label className={s.label} htmlFor={nameFieldId}>Name</label>
          <Field className={s.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label className={s.label} htmlFor={numberFieldId}>Number</label>
          <Field className={s.field} type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>

  );
};

export default ContactForm;