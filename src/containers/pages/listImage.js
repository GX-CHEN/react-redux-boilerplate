import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchImage } from '../../action/image';
import { Button, List, Divider, message } from 'antd';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

class ListImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: []
    };
  }

  componentDidMount() {
    message.success('Land on listing page');
  }

  listImage = () => {
    this.props.searchImage();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (isEqual(nextProps.imageList, prevState.imageList)) {
      return null;
    } else {
      return {
        imageList: nextProps.imageList
      };
    }
  }

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
