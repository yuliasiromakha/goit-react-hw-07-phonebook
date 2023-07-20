import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './general.css'

import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import ContactForm from "./ContactForm/ContactForm";
import FilterContact from "./FilterContact/FilterContact";
import ContactList from "./ContactList/ContactList";
import { setContacts } from "redux/reducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    dispatch(setContacts(contacts));
  }, [dispatch]);

  return (
    <div className="general__positioning">
      <div className="border__style">
        <PhonebookTitle
          title="Name"
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />
        <ContactForm />
      </div>

      <PhonebookTitle
        title="Contacts"
        styles={{
          fontSize: 25,
          marginBottom: 0,
        }}
      />

      <FilterContact />

      <ContactList />
    </div>
  );
}

export default App;