
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/contactsSlice';


function ContactForm() {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const dispatch = useDispatch();
  

   const handleSubmit = e => {
     e.preventDefault();
     dispatch(addContact(name, number));
     setName('');
     setNumber('');
   };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}



export default ContactForm;
