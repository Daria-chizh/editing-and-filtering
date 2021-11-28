import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Space } from 'antd';

import setFilter from '../actions/actionCreators';

export default function ServiceFilter() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.serviceFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Space style={{ paddingBottom: 20 }}>
      <Input name="filter" onChange={handleChange} style={{ width: 200 }} value={filter} />
    </Space>
  );
}
