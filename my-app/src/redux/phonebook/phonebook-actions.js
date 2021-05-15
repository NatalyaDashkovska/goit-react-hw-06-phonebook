import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const makeCard = createAction(types.ADD, (name, number) => {
  return {
    payload: {
      text: name,
      id: uuidv4(),
      number,
    },
  };
});

const deleteCard = createAction(types.DELETE);
const filterValue = createAction(types.FILTER);

export default { makeCard, deleteCard, filterValue };
