import React from 'react';
import { shallow } from 'enzyme';
import { Button, Divider, Icon } from 'antd';
import { ViewImage, mapStateToProps, mapDispatchToProps } from '../../src/containers/pages/viewImage';

describe('Test for high level App component', () => {
  it('ViewImage component should contain UI elements from Ant Design', () => {
    const viewImage = shallow(<ViewImage />);
    expect(viewImage.find(Button)).toHaveLength(1);
    expect(viewImage.find(Divider)).toHaveLength(1);
    expect(viewImage.find(Icon)).toHaveLength(1);
  });
});

describe('Test function inside viewImage component', () => {
  const changePage = jest.fn();
  const viewImage = shallow(
    <ViewImage
      location={{ state: { imageUrl: 'testImageUrl', imageTitle: 'testImageTitle' } }}
      changePage={changePage}
      imageUrl={'testUrl'}
    />
  );

  it('When navigateToList() is invoked, changePage() from props should be called once', () => {
    viewImage.instance().navigateToList();
    expect(changePage).toBeCalled();
  });
  it('When componentDidMount() is invoked, corresponding state value should be set', () => {
    viewImage.instance().componentDidMount();
    expect(viewImage.state()).toEqual({ imageUrl: 'testImageUrl', imageTitle: 'testImageTitle' });
  });
  it('mapStateToProps should return correct prop value based on state', () => {
    expect(mapStateToProps({ image: { imageList: [1, 2] } })).toEqual({ imageList: [1, 2] });
  });
  it('mapDispatchToProps should correctly map the function dispatcher', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.changePage).toBeDefined();

    result.changePage();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });
});
