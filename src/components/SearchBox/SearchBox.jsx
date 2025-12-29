import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilterContacts } from "../../redux/filtersSlice";
import { getFilters } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilters);

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
