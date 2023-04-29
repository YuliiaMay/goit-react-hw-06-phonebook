import { useState } from "react";
import { Form, Title, ContactFormLabel, ContactInput, AddContactBtn } from "./ContactsForm.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "redux/actions";
import { getContacts } from "redux/selectors";




const ContactsForm = () => {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);


    // const handleChange = ({ target: { value, name } }) => {
    //     switch(name) {
    //         case 'name':
    //             setName(value);                
    //             break;
            
    //         case 'number':
    //             setNumber(value);                
    //             break;   
            
    //         default:
    //             break;
    //     }
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        // if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        //     return alert(`${name} is already in contacts.`);
        // } else if (contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase())) {
        //     return alert(`This number is already in contacts.`);
        // }

        // onSubmit({
        //     name,
        //     number
        // });

        // reset();
        console.log(e.target);
        const form = e.target;
        console.log(form);
        // dispatch(createContact(form.elements.name.value));

    }


    // const reset = () => {
    //     setName('')
    //     setNumber('')
    // };

    return (
        <Form onSubmit={handleSubmit}>
            <Title>Phonebook</Title>
            <ContactFormLabel htmlFor="contact-name">Name</ContactFormLabel>
            <ContactInput
                id="contact-name"
                type="text"
                name="name"
                // value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                // onChange={handleChange}
            />
            

            <ContactFormLabel htmlFor="contact-number">Number</ContactFormLabel>
            <ContactInput
                id="contact-number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                // value={number}
                // onChange={handleChange}
            />
            

            <AddContactBtn type="submit">
                ADD
            </AddContactBtn>
        </Form>            
    )
}



export default ContactsForm;