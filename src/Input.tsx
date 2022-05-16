import React, { useEffect, useState } from 'react';
import { v1 } from 'uuid';
import { AddValueComponent } from './AddValueComponent';
import { FilterPanel } from './FilterPanel';
import { InputItem } from './InputItem';

type valuesType = {
  id: string
  value: string
  isChecked: boolean
  rating: number
}

const initialValue = [
  { id: v1(), value: 'qwe', isChecked: false, rating: 0 },
  { id: v1(), value: 'qwee', isChecked: true, rating: 1 },
  { id: v1(), value: 'qweee', isChecked: false, rating: 2 },
  { id: v1(), value: 'qweeee', isChecked: true, rating: 3 },
];

export const Input = () => {

  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [values, setValues] = useState<valuesType[]>(initialValue);
  const [filteredValues, setFilteredValues] = useState(values);

  // reading value in input
  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // add new item
  const addValueHandler = () => {
    if (value.trim() !== '') {
      setValues([{ id: v1(), value, isChecked: false, rating: 0 }, ...values]);
      setValue('');
      setError('');
    } else {
      setError('ERROR');
      setTimeout(() => {
        setError('');
      }, 1000);
    }
  };

  // add new item by press key;
  const addValueKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addValueHandler();
  };

  // change checkbox
  // const checkChangeHandler = (select: string, isCheckedSelect: boolean) => {
  //   setValues(values.map((item) => item.id === select
  //     ? { ...item, isChecked: isCheckedSelect }
  //     : item));
  // };

  const checkChangeHandler = (select: string, isCheckedSelect: boolean) => {
    let currentValue = values.find((item) => item.id === select);
    if (currentValue) currentValue.isChecked = isCheckedSelect;
    setFilteredValues([...values]);
  };

// remove item
  const removeValueHandler = (id: string) => {
    setFilteredValues(values.filter(v => v.id !== id));
  };

  // filter by checkbox
  const filterValueHandler = (filter: 'All' | 'Checked' | 'Unchecked') => {
    if (filter === 'All') setFilteredValues(values);
    if (filter === 'Checked') setFilteredValues(values.filter(({ isChecked }) => isChecked));
    if (filter === 'Unchecked') setFilteredValues(values.filter(({ isChecked }) => !isChecked));
  };

  // change rating
  const ratingChange = (id: string, value: number) => {
    let currentValue = values.find(v => v.id === id);
    if (currentValue) currentValue.rating = value;
    setFilteredValues([...values]);
  };

  // filter by rating
  const filterByRating = (value: number) => {
    setFilteredValues(values.filter(v => v.rating === value));
  };

  // USE EFFECT IN FIRST TIME )
  useEffect(() => {
    setFilteredValues(values);
  }, [values]);

  return (
    <div>
      <AddValueComponent
        value={value}
        error={error}
        onChange={inputOnChangeHandler}
        onKeyPress={addValueKeyPress}
        onClick={addValueHandler}
      />
      <h4>{filteredValues.length === 0 ? 'list is empty' : 'list:'}</h4>
      {filteredValues.map(v => <li key={v.id}>
        <InputItem
          id={v.id}
          value={v.value}
          isChecked={v.isChecked}
          rating={v.rating}
          ratingChange={ratingChange}
          checkChangeHandler={checkChangeHandler}
          removeValueHandler={removeValueHandler} />
      </li>)}
      <FilterPanel
        filterByCheck={filterValueHandler}
        filterByRating={filterByRating}
      />
    </div>
  );
};

