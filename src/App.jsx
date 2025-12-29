import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { getContacts } from "./redux/selectors";

function App() {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
