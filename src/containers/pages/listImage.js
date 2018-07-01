import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchImage } from '../../action/image';
import { Button, List, Divider, message } from 'antd';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

/**
 * This component corresponding to the listImage view
 * It has a button to trigger an API call, then generate a list
 * When clicking on element of the list, user will be navigate to viewPage to see the gif image
 */
class ListImage extends React.Component {
  /**@constructor
   * @param {Object} props
   * @param {Object} props.location - location is from redux-react-router, which maintains current page and variables send to the page
   * @param {Function} props.changePage - changePage is a function which can navigation from a page to another
   * @param {Function} props.searchImage  - searchImage will return a list of image which is trending on giphy
   */
  constructor(props) {
    super(props);
    this.state = {
      imageList: []
    };
  }

  componentDidMount() {
    message.success('Land on listing page', 1);
  }

  /**
   * dispatch the searchImage action and return a list of image
   */
  listImage = () => {
    this.props.searchImage();
  };

  /**
   * getDerivedStateFromProps will be called everytime before render (it is new React lifecyle function to replace the old componentWillRecieveProps)
   * So in order to avoid too frequent render, we need to compare the data then decide do we need to re-render
   * @param {Object} nextProps
   * @param {Object} prevState
   * @param {Array} nextProps.imageList - imageList from nextProps (new one)
   * @param {Array} prevState.imageList - imageList which now existed in state
   * @returns {state} - will return new imageList if there's change
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (isEqual(nextProps.imageList, prevState.imageList)) {
      return null;
    } else {
      return {
        imageList: nextProps.imageList
      };
    }
  }

  /**
   * @param {string} imageUrl - url of image which pass to next page
   * @param {string} imageTitle - title of image which pass to next page
   */
  navigateToImageView = (imageUrl, imageTitle) => {
    const { changePage } = this.props;
    changePage('viewImage', { imageUrl, imageTitle });
  };

  render() {
    return (
      <div className="list-image-container">
        <Button onClick={this.listImage} className="full-with-btn" type="primary">
          Get Images From Trending Giphys
        </Button>
        <Divider dashed />
        <List
          header={<div style={{ fontWeight: 'bold' }}>List Of Trending Giphy URL</div>}
          bordered
          dataSource={this.state.imageList}
          renderItem={item => (
            <List.Item
              onClick={this.navigateToImageView.bind(
                this,
                item.images.downsized_medium.url,
                item.title ||
                  item.slug
                    .split('-')
                    .slice(0, -1)
                    .join(' ')
              )}>
              {item.title ||
                item.slug
                  .split('-')
                  .slice(0, -1)
                  .join(' ')}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

ListImage.propTypes = {
  location: PropTypes.object,
  changePage: PropTypes.func,
  searchImage: PropTypes.func
};

const mapStateToProps = state => {
  return {
    imageList: state.image.imageList
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchImage,
      changePage: (route, params) => push(route, params)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListImage);
