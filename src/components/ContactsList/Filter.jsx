import React from "react";
import { FilterBlock } from "./Filter.styled";
import { getFilter } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice/filterSlice";




const ContactsFilter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <FilterBlock>
            <label htmlFor="contacts-filter">Find contacts by name</label>
            <input
                id='contacts-filter'
                type="text"
                value={filter}
                onChange={e => dispatch(setFilter(e.target.value))}
            />
        </FilterBlock>
    )
};


export default ContactsFilter;