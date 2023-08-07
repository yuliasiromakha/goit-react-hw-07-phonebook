import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteContactAsync } from 'redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items: contacts, error } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter.filter); 

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContactAsync(id));
  };

  if (error) {
    return error;
  }

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "space-between",
      }}
    >
      {filteredContacts.map((contact) => (
        <li key={contact.id} style={{ fontSize: 16 }}>
          {contact.name}: {contact.number || contact.phone}
          <button
            type="button"
            style={{ marginLeft: 20 }}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  handleDeleteContact: PropTypes.func,
};

export default ContactList;