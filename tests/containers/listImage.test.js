import React from 'react';
import { shallow } from 'enzyme';
import { Button, Divider, Input, List } from 'antd';
import { ListImage, mapStateToProps, mapDispatchToProps } from '../../src/containers/pages/listImage';

describe('Test UI elements in listImage component', () => {
  const changePage = jest.fn();
  const dispatchGetTrendingImage = jest.fn();
  const dispatchSearchImage = jest.fn();

  it('ListImage component should contain UI elements from Ant Design, but no List element when no imageList data', () => {
    const listImage = shallow(
      <ListImage changePage={changePage} dispatchGetTrendingImage={dispatchGetTrendingImage} dispatchSearchImage={dispatchSearchImage} />,
    );
    expect(listImage.find(Button)).toHaveLength(1);
    expect(listImage.find(Divider)).toHaveLength(3);
    expect(listImage.find(Input)).toHaveLength(1);
    expect(listImage.find(List)).toHaveLength(0);
  });
  it('ListImage component should contain UI elements from Ant Design, and has List element when having imageList data', () => {
    const listImage = shallow(
      <ListImage
        imageList={[1, 2]}
        changePage={changePage}
        dispatchGetTrendingImage={dispatchGetTrendingImage}
        dispatchSearchImage={dispatchSearchImage}
      />,
    );
    expect(listImage.find(Button)).toHaveLength(1);
    expect(listImage.find(Divider)).toHaveLength(3);
    expect(listImage.find(Input)).toHaveLength(1);
    expect(listImage.find(List)).toHaveLength(1);
  });
});

describe('Test function inside listImage component', () => {
  const changePage = jest.fn();
  const dispatchGetTrendingImage = jest.fn();
  const dispatchSearchImage = jest.fn();
  const listImage = shallow(
    <ListImage
      imageList={[]}
      location={{}}
      changePage={changePage}
      dispatchGetTrendingImage={dispatchGetTrendingImage}
      dispatchSearchImage={dispatchSearchImage}
    />,
  );

  it('When navigateToImageView() is invoked, changePage() from props should be called once', () => {
    listImage.instance().navigateToImageView();
    expect(changePage).toBeCalled();
  });
  it('When listTrendingImage() is invoked, changePage() from props should be called once', () => {
    listImage.instance().listTrendingImage();
    expect(dispatchGetTrendingImage).toBeCalled();
  });
  it('When searchImage() is invoked, changePage() from props should be called once', () => {
    listImage.instance().listSearchImage({ target: { value: 'hello' } });
    expect(dispatchSearchImage).toBeCalled();
  });
  it('mapStateToProps should return correct prop value based on state', () => {
    expect(mapStateToProps({ image: { imageList: [1, 2] } })).toEqual({ imageList: [1, 2] });
  });
  it('mapDispatchToProps should correctly map the function dispatcher', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.dispatchGetTrendingImage).toBeDefined();
    expect(result.dispatchSearchImage).toBeDefined();
    expect(result.changePage).toBeDefined();

    result.dispatchGetTrendingImage();
    result.dispatchSearchImage();
    result.changePage();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
    expect(dispatch.mock.calls[1][0]).toBeDefined();
    expect(dispatch.mock.calls[2][0]).toBeDefined();
  });
});
