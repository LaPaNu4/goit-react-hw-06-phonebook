
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/contactsSlice';


function ContactForm() {
    const [contact, setContact] = useState({
      name: '',
      number: '',
    });
  const { name, number } = contact;
   const dispatch = useDispatch();
  
    const handleChange = event => {
      setContact({
        ...contact,
        [event.target.name]: event.target.value,
      });
    };

   const handleSubmit = e => {
     e.preventDefault();
     dispatch(addContact(contact));
     setContact({
       name: '',
      number: '',
     })
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
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}



export default ContactForm;
