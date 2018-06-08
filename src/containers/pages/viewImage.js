import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class ViewImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      imageTitle: null
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.state) {
      const { imageUrl, imageTitle } = location.state;
      this.setState({ imageUrl, imageTitle });
    }
  }

  navigateToList = () => {
    const { changePage } = this.props;
    changePage('/');
  };

  render() {
    const { imageUrl, imageTitle } = this.state;
    return (
      <div>
        <Button onClick={this.navigateToList}>Back To List</Button>
        <h3>{imageTitle}</h3>
        <img src={imageUrl} alt={imageTitle} />
      </div>
    );
  }
}

ViewImage.propTypes = {
  location: PropTypes.object,
  changePage: PropTypes.func
};

const mapStateToProps = state => {
  return {
    imageList: state.image.imageList
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: (route, params) => push(route, params)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewImage);
