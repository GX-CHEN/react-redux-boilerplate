import React from 'react';
import { shallow } from 'enzyme';
import { Button, Divider, Input } from 'antd';
import { ListImage } from '../../src/containers/pages/listImage';

describe('Test for high level App component', () => {
  const listImage = shallow(<ListImage />);
  it('App component should contain Route', () => {
    expect(listImage.find(Button)).toHaveLength(1);
    expect(listImage.find(Divider)).toHaveLength(3);
    expect(listImage.find(Input)).toHaveLength(1);
  });
})