import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'Redux/contactsSlice';

const ContactList = () => {
   const contacts = useSelector(state => state.contacts.contacts);
   const dispatch = useDispatch();
 
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => dispatch(removeContact(contact.id))}
            style={{ marginLeft: '10px' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

