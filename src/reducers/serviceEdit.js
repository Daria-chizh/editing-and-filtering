import {
  SET_EDIT_MODE_FOR_SERVICE, SET_NAME_FOR_EDITED_SERVICE, SET_PRICE_FOR_EDITED_SERVICE, RESET_EDIT_FORM
} from '../actions/actionTypes';

const initialState = { id: null, name: '', price: '' };

export default function serviceEditReducer(state = initialState,  action) {
  switch (action.type) {
    case SET_EDIT_MODE_FOR_SERVICE:
      return { id: action.payload.id, name: action.payload.name, price: action.payload.price };
    case RESET_EDIT_FORM:
      return { ...initialState };
    case SET_NAME_FOR_EDITED_SERVICE:
      return { ...state, name: action.payload.name };
    case SET_PRICE_FOR_EDITED_SERVICE:
      return { ...state, price: action.payload.price };
    default:
      return state;
  }
}
