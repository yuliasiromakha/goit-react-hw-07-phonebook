import './general.css'
import { useSelector } from "react-redux"
import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import ContactForm from "./ContactForm/ContactForm";
import FilterContact from "./FilterContact/FilterContact";
import ContactList from "./ContactList/ContactList";
import Loader from "./Loader/Loader"

const App = () => {
  const isLoading = useSelector((state) => state.contacts.isLoading);
  
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

      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
}

export default App;
