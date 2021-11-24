import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeService, setEditModeForService, resetEditForm } from '../actions/actionCreators';

export default function ServiceList() {
  const dispatch = useDispatch();
  const { items, editingId } = useSelector((state) => ({ items: state.serviceList, editingId: state.serviceEdit.id }));

  const handleRemove = (id) =>  {
    dispatch(removeService(id));

    if (editingId) {
      dispatch(resetEditForm());
    }
  };

  const handleEdit = (id, name, price) =>  {
    dispatch(setEditModeForService(id, name, price));
  };

  return (
    <ul>
      {items &&
        items.map(o => (<li key={o.id} style={{ marginTop: 10 }}>
          <div style={{ display:'inline-block', width: 200 }}>{o.name}</div>
          <div style={{ display:'inline-block', width: 100 }}>{o.price}</div>
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>🖉</button>
          <button onClick={() => handleRemove(o.id)}>×</button>
        </li>))}
    </ul>
  )
}
