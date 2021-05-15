import { combineReducers } from 'redux';
import types from './phonebook-types';
import { createReducer } from '@reduxjs/toolkit';

const contactsReducer = createReducer([], {
  [types.ADD]: (state, { payload }) => [...state, payload],
  [types.DELETE]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [types.FILTER]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
