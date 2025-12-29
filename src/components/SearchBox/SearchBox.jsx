import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectFilters, setFilterContacts } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilters);
  const contacts = useSelector(selectContacts);

  if (!contacts.length) return;

  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={value}
        onChange={(e) => dispatch(setFilterContacts(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
