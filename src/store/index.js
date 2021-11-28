import { createStore, combineReducers} from 'redux';

import serviceListReducer from '../reducers/serviceList';
import serviceEditReducer from '../reducers/serviceEdit';
import serviceFilterReducer from "../reducers/serviceFilter";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceEdit : serviceEditReducer,
  serviceFilter: serviceFilterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
