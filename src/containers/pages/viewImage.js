import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Button, Divider, Icon, message } from 'antd';
import PropTypes from 'prop-types';

/**
 * This component corresponding to the viewImage view
 * It displays the selected gif image with title
 * There's also a 'back to list' button to go back to list view
 */
export class ViewImage extends React.Component {
  /**
   * @constructor
   * @param {Object} props
   * @param {Object} props.location - location is from redux-react-router, which maintains current page and variables send to the page
   * @param {string} props.location.state.imageUrl - image URL of selected gif image from the list image page
   * @param {string} props.location.state.imageTitle - title of selected gif image from the list image page
   * @param {Function} props.changePage - changePage is a function which can navigation from a page to another
   */
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      imageTitle: null,
    };
  }

  componentDidMount() {
    message.info('Land on listing page', 1);
    const { location } = this.props;
    if (location && location.state) {
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
      <div className="view-image-container">
        <Button onClick={this.navigateToList} type="primary">
          <Icon type="left" />
          Back To List
        </Button>
        <Divider dashed />
        <div style={{ textAlign: 'center' }}>
          <h3>{imageTitle}</h3>
          <img src={imageUrl} alt={imageTitle} />
        </div>
      </div>
    );
  }
}

ViewImage.propTypes = {
  location: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  imageList: state.image.imageList,
});

export const mapDispatchToProps = dispatch => ({
  changePage: (route, params) => dispatch(push(route, params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewImage);
