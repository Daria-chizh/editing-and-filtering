import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from '../actions/actionTypes';

const initialState= [
  { id: Math.random(), name: 'Диагностика', price: 'Бесплатно' },
  { id: Math.random(), name: 'Замена cтекла', price: 21000 },
  { id: Math.random(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case ADD_SERVICE:
      const newService = { id: Math.random(), name: payload.name, price: payload.price };
      return [...state, newService];
    case REMOVE_SERVICE:
      return state.filter((item) => item.id !== payload.id);
    case EDIT_SERVICE:
      const newState = [...state];
      const service = newState.find((item) => item.id === payload.id);
      service.name  = payload.name;
      service.price = payload.price;
      return newState;
    default:
      return state;
  }
}

