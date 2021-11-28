import { SET_FILTER } from '../actions/actionTypes';

const initialState = { filter: '' };

export default function serviceFilterReducer(state = initialState,  action) {
  switch (action.type) {
    case SET_FILTER:
      return { filter: action.payload.filter };
    default:
      return state;
  }
}
