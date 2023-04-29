import React from "react";
import { FilterBlock } from "./Filter.styled";
// import PropTypes from 'prop-types';
import { getFilter } from "redux/selectors";
import { useSelector } from "react-redux";


const ContactsFilter = () => {
    const filter = useSelector(getFilter);
    const handelChangeFilter = (e) => {
        // setFilter(e.target.value)
    }
    return (
    <FilterBlock>
        <label htmlFor="contacts-filter">Find contacts by name</label>
        <input 
            id='contacts-filter'
            type="text"
            value={filter}
            onChange={handelChangeFilter}
        />
    </FilterBlock>
)}
// ContactsFilter.propTypes = {
//     onChangeFilter: PropTypes.func.isRequired,
//     filter: PropTypes.string.isRequired,
// }


export default ContactsFilter;