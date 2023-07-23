import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PhonebookTitle from '../PhonebookTitle';
import { addContact } from 'redux/slice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
      <PhonebookTitle
          title="Name"
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <PhonebookTitle
          title="Phone number"
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
        <button type="submit" className="add-contact__button">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;