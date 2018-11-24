import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../../src/containers/app';

describe('Test for high level App component', () => {
  const app = shallow(<App />);
  it('App component should contain Route', () => {
    expect(app.find(Route)).toHaveLength(2);
  });
});
