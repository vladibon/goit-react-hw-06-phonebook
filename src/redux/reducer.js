import { combineReducers } from 'redux';
import types from './types';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload.contactId);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
