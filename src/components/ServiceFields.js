import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Space, Button } from 'antd';

import {
  setNameForEditedService, setPriceForEditedService,
  addService, editService, resetEditForm,
} from '../actions/actionCreators';

export default function ServiceFields() {
  const dispatch = useDispatch();
  const { id, name, price} = useSelector((state) => state.serviceEdit);

  const handlePriceChange = (event) => {
    dispatch(setPriceForEditedService(event.target.value));
  };

  const handleNameChange = (event) => {
    dispatch(setNameForEditedService(event.target.value));
  };

  const handleSave = () => {
    if (id) {
      dispatch(editService(id, name, price));
    } else {
      dispatch(addService(name, price));
    }
    dispatch(resetEditForm());
  };

  const handleCancel = () => {
    dispatch(resetEditForm());
  };

  return (
    <Space style={{ paddingBottom: 20 }}>
      <Input name="name" onChange={handleNameChange} value={name} style={{ width: 200 }} />
      <Input name="price" onChange={handlePriceChange} value={price} style={{ width: 200 }} />
      <Button onClick={handleSave} type="primary">Save</Button>
      { id && <Button onClick={handleCancel} type="primary">Cancel</Button>}
    </Space>
  );
}


