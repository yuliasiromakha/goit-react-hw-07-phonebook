import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filterSlice'; 

const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value.toLowerCase()));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterContact;