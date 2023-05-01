import React from "react";
import { FilterBlock } from "./Filter.styled";
import { getFilter } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice/filterSlice";


const ContactsFilter = () => {
    const dispatch = useDispatch();


    const onFilterChange = ({target: {value}}) => {
        const filterValue = value;
        dispatch(setFilter(filterValue));
    }

    return (
        <FilterBlock>
            <label htmlFor="contacts-filter">Find contacts by name</label>
            <input
                id="contacts-filter"
                type="text"
                name="filter"
                onChange={onFilterChange}
            />
        </FilterBlock>
    )
};


export default ContactsFilter;