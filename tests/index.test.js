import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/containers/app';
import { Route } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Test for high level App component', () => {
  const app = shallow(<App />);
  it('App component should contain Route', () => {
    expect(app.find(Route)).toHaveLength(2);
  });
})