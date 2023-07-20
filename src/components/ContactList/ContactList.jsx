import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/reducer";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
          {contact.name}: {contact.number}
          <button
            style={{ marginLeft: 30 }}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete Contact
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
