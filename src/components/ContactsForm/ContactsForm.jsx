import { nanoid } from "@reduxjs/toolkit";
import { Form, Title, ContactFormLabel, ContactInput, AddContactBtn } from "./ContactsForm.styled";
import { useDispatch } from "react-redux";
import { createContact } from "../../redux/contactsSlice/contactsSlice";

const ContactsForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target.elements.name.value;
        let number = e.target.elements.number.value;

        const newContact = {
            id: nanoid(),
            name,
            number
        };

        dispatch(createContact(newContact));
        e.target.elements.name.value = '';
        e.target.elements.number.value = '';
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Title>Phonebook</Title>
            <ContactFormLabel htmlFor="contact-name">Name</ContactFormLabel>
            <ContactInput
                id="contact-name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />

            <ContactFormLabel htmlFor="contact-number">Number</ContactFormLabel>
            <ContactInput
                id="contact-number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <AddContactBtn type="submit">
                ADD
            </AddContactBtn>
        </Form>
    )
};

export default ContactsForm;