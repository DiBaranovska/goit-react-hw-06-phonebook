import React from 'react';
import css from './filter.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { filterContacts } from '../../redux/contactsSlice';

const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(filterContacts(event.target.value.toLowerCase()));
  };

  return (
    <div className={css.contacts_filter}>
      <label className={css.contacts__name} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        className={css.contacts__input}
        id={filterInputId}
        type="text"
        onChange={changeFilter}
      ></input>
    </div>
  );
};

export default Filter;
