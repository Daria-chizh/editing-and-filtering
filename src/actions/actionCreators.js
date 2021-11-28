import {
  ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE,
  SET_EDIT_MODE_FOR_SERVICE, SET_NAME_FOR_EDITED_SERVICE,
  SET_PRICE_FOR_EDITED_SERVICE, RESET_EDIT_FORM, SET_FILTER
} from './actionTypes';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } }
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function setEditModeForService(id, name, price) {
  return { type: SET_EDIT_MODE_FOR_SERVICE, payload: { id, name, price } };
}

export function setNameForEditedService(name) {
  return { type: SET_NAME_FOR_EDITED_SERVICE, payload: { name } };
}

export function setPriceForEditedService(price) {
  return { type: SET_PRICE_FOR_EDITED_SERVICE, payload: { price } };
}

export function resetEditForm() {
  return { type: RESET_EDIT_FORM };
}

export default function setFilter(filter) {
  return { type: SET_FILTER, payload: { filter } };
}
