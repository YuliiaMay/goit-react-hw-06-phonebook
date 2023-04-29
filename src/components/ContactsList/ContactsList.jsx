import React from "react";
import { Contact, DeleteContactBtn } from "./ContactsList.styled";

import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";
import { createContact, removeContact } from "redux/actions";


const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    return (
    <ul>
        {
            contacts.map(({ id, name, number }) => {
                return (
                    <Contact key={id}>
                        <span>{name}</span>
                        <span>{number}</span>
                        <DeleteContactBtn
                            type="button"
                            // onClick={() => {
                            //     dispatch(removeContact);
                            // }}
                        >❌</DeleteContactBtn>
                    </Contact>
                )
            })
        }
    </ul>
)}

export default ContactsList;