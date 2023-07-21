// import { useDispatch } from "react-redux";
// import { setFilter } from "redux/slice";

const FilterContact = () => {
  // const dispatch = useDispatch();

  const handleInputChange = (event) => {
    // const { value } = event.target;
    // dispatch(setFilter(value.toLowerCase()));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterContact;