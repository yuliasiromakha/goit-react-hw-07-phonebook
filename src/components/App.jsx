import './general.css'

import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import ContactForm from "./ContactForm/ContactForm";
import FilterContact from "./FilterContact/FilterContact";
import ContactList from "./ContactList/ContactList";

const App = () => {

  return (
    <div className="general__positioning">
      <div className="border__style">
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