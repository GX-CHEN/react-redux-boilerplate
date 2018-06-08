import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchImage } from '../../action/image';
import { Button, List, message } from 'antd';
import PropTypes from 'prop-types';

class ListImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: []
    };
  }

  success = content => {
    message.success(content, 3);
  };

  componentDidMount() {
    this.success('Land on listing page');
  }

  listImage = () => {
    this.props.searchImage();
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.imageList) {
      this.setState({ imageList: nextProps.imageList });
    }
  }

  navigateToImageView = imageTitle => {
    const { changePage } = this.props;
    changePage('viewImage', { imageTitle });
  };

  render() {
    return (
      <div>
        <Button onClick={this.listImage}>Get Images From Wiki Einsten Page</Button>
        <List
          header={<div style={{ fontWeight: 'bold' }}>Header</div>}
          bordered
          dataSource={this.state.imageList}
          renderItem={item => (
            <List.Item onClick={this.navigateToImageView.bind(this, item.title)}>{item.title}</List.Item>
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
