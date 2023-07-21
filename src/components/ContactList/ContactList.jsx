// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchContacts } from "redux/slice";


// const STATUS = {
//   IDLE: "idle",
//   PENDING: "pending",
//   RESOLVED: "resolved",
//   REJECTED: "rejected",
// };

// const ContactList = () => {
//   // const filter = useSelector((state) => state.contacts.filter);
//   const dispatch = useDispatch();
//   const { items: contacts, isLoading, error } = useSelector((state) => state.contacts);

//   useEffect(() => {
  
//     fetchContacts()
//       .then((contacts) => {

//         // dispatch(setContacts(contacts));
//       })
//       .catch((error) => {
//         console.error("Error fetching contacts:", error);
//       });
//   }, [dispatch]);

//   // const handleDeleteContact = (id) => {
//   //   // dispatch(deleteContact(id));
//   // };

//   // const filteredContacts = contacts.filter((contact) =>
//   //   contact.name.toLowerCase().includes(filter.toLowerCase())
//   // );

//   // if (STATUS === STATUS.PENDING) {
//   //   return 'Loading..'
//   // }

//   // if (STATUS === STATUS.REJECTED) {
//   //   return {error}
//   // }

//   if (isLoading) {
//     return 'Loading..';
//   }

//   if (error) {
//     return error;
//   }

//   if (STATUS === STATUS.RESOLVED) {
//     return (
//       <ul
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 10,
//           justifyContent: "space-between",
//         }}
//       >
//         {/* {filteredContacts.map((contact) => (
//           <li key={contact.id} style={{ fontSize: 16 }}>
//             {contact.name}: {contact.number}
//             <button
//               style={{ marginLeft: 30 }}
//               onClick={() => handleDeleteContact(contact.id)}
//             >
//               Delete Contact
//             </button>
//           </li>
//         ))} */}
//       </ul>
//     );
//   }

// };

// ContactList.propTypes = {
//   handleDeleteContact: PropTypes.func,
// };

// export default ContactList;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from 'redux/slice'; // Update the import path with the correct path to your slice file

const ContactList = () => {
  const dispatch = useDispatch();
  const { items: contacts, isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts()); // Dispatch the fetchContacts async thunk here
  }, [dispatch]);

  if (isLoading) {
    return 'Loading..';
  }

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
      {contacts.map((contact) => (
        <li key={contact.id} style={{ fontSize: 16 }}>
          {contact.name}: {contact.number}
          {/* You can add a delete button and handle deletion if needed */}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  handleDeleteContact: PropTypes.func,
};

export default ContactList;
