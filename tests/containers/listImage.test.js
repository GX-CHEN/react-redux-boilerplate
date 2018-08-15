import React from 'react';
import { shallow } from 'enzyme';
import { Button, Divider, Input, List } from 'antd';
import { ListImage, mapStateToProps, mapDispatchToProps } from '../../src/containers/pages/listImage';

describe('Test UI elements in listImage component', () => {
  it('ListImage component should contain UI elements from Ant Design, but no List element when no imageList data', () => {
    const listImage = shallow(<ListImage />);
    expect(listImage.find(Button)).toHaveLength(1);
    expect(listImage.find(Divider)).toHaveLength(3);
    expect(listImage.find(Input)).toHaveLength(1);
    expect(listImage.find(List)).toHaveLength(0);
  });
  it('ListImage component should contain UI elements from Ant Design, and has List element when having imageList data', () => {
    const listImage = shallow(<ListImage imageList={[1, 2]} />);
    expect(listImage.find(Button)).toHaveLength(1);
    expect(listImage.find(Divider)).toHaveLength(3);
    expect(listImage.find(Input)).toHaveLength(1);
    expect(listImage.find(List)).toHaveLength(1);
  });
});

describe('Test function inside listImage component', () => {
  const changePage = jest.fn();
  const getTrendingImage = jest.fn();
  const searchImage = jest.fn();
  const listImage = shallow(
    <ListImage
      imageList={[]}
      location={{}}
      changePage={changePage}
      getTrendingImage={getTrendingImage}
      searchImage={searchImage}
    />
  );
  it('When navigateToImageView() is invoked, changePage() from props should be called once', () => {
    listImage.instance().navigateToImageView();
    expect(changePage).toBeCalled();
  });
  it('When listTrendingImage() is invoked, changePage() from props should be called once', () => {
    listImage.instance().listTrendingImage();
    expect(getTrendingImage).toBeCalled();
  });
  it('When searchImage() is invoked, changePage() from props should be called once', () => {
    listImage.instance().searchImage({ target: { value: 'hello' } });
    expect(searchImage).toBeCalled();
  });
  it('mapStateToProps should return correct prop value based on state', () => {
    expect(mapStateToProps({ image: { imageList: [1, 2] } })).toEqual({ imageList: [1, 2] });
  });
  it('mapDispatchToProps should correctly map the function dispatcher', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.getTrendingImage).toBeDefined();
    expect(result.searchImage).toBeDefined();
    expect(result.changePage).toBeDefined();

    result.getTrendingImage();
    result.searchImage();
    result.changePage();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
    expect(dispatch.mock.calls[1][0]).toBeDefined();
    expect(dispatch.mock.calls[2][0]).toBeDefined();
  });
});
