import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'Redux/contactsSlice';

const Filter = () => {
   const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
   const handleFilterChange = event => {
     dispatch(updateFilter(event.target.value));
   };
  return (
    <label>
      Filter contacts by name:
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};



export default Filter;
