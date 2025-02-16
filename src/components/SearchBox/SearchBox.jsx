import React from "react";
import s from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleSearch = (event) => {
    event.preventDefault();
    dispatch(changeFilter(event.target.value));
  };
    
    return (
        <div className={s.wrapper}>
            <label className={s.label}>Find contacts by name
                <input className={s.input}
                    type="text"
                    value={filter}
                    onChange={handleSearch}
                    placeholder="Search contacts"
                /></label>
        </div>
    );
};


export default SearchBox;