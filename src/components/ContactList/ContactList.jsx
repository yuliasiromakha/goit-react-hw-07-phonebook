import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from 'redux/slice';
import PhonebookTitle from '../PhonebookTitle/PhonebookTitle'

const ContactList = () => {
  const dispatch = useDispatch();
  const { items: contacts, isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  if (isLoading) {
    return <PhonebookTitle title="Loading..."
    styles={{
      fontSize: 15,
      marginBottom: 0,
    }}/>;
  }

  if (error) {
    return error;
  }

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "space-between",
      }}
    >
      {contacts.map((contact) => (
        <li key={contact.id} style={{ fontSize: 16 }}>
          {contact.name}: {contact.phone || contact.number}
          <button type="button" style={{ marginLeft: 20 }} onClick={() => handleDeleteContact(contact.id)}>Delete contact</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  handleDeleteContact: PropTypes.func,
};

export default ContactList;