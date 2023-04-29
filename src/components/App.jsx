// import { useEffect, useState } from "react";
// import { nanoid } from 'nanoid';
import Section from "./Section/Section";
import Title from "./ContactTitle/ContactTitle";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsFilter from "./ContactsList/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { createContact, removeContact } from "redux/actions";

// import { useDispatch } from "react-redux";
// const CONTACTS_KEY = 'contacts';




export default function App() {
  // const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem(CONTACTS_KEY)) ??
  //   [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );
  // const [filter, setFilter] = useState('');
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handelChangeFilter = (e) => {
    // setFilter(e.target.value)
  }

  return (
      <Section>
        <ContactsForm  />
        <Title text="Contacts" />
        <ContactsFilter />
        <ContactsList />
      </Section>    
    
      // <Section>
      //   <ContactsForm onSubmit={() => dispatch(createContact)} contacts={contacts} />
      //   <Title text="Contacts" />
      //   <ContactsFilter filter={() => dispatch(filter)} onChangeFilter={handelChangeFilter} />
      //   <ContactsList contacts={visibleContacts} onRemoveClick={() => dispatch(removeContact)} />
      // </Section>
    );
};
