import React from 'react';
import { shallow } from 'enzyme';
import { Button, Divider, Icon } from 'antd';
import { ViewImage } from '../../src/containers/pages/viewImage';

describe('Test for high level App component', () => {
  const viewImage = shallow(<ViewImage />);
  it('App component should contain Route', () => {
    expect(viewImage.find(Button)).toHaveLength(1);
    expect(viewImage.find(Divider)).toHaveLength(1);
    expect(viewImage.find(Icon)).toHaveLength(1);
  });
})