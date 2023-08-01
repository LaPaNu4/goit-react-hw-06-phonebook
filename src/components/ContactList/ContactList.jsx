import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'Redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
    const filteredContacts = getFilteredContacts();
 
  return (
    <ul>
      {filteredContacts.map(contact => (
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

