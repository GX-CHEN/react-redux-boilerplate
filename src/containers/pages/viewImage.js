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
      imageTitle: null
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.state) {
      this.setState({ imageTitle: location.state.imageTitle });
    }
  }

  navigateToList = () => {
    const { changePage } = this.props;
    changePage('/');
  };

  render() {
    return (
      <div>
        <Button onClick={this.navigateToList}>Back To List</Button>
        <h3>You can see image by click the link here:</h3>
        <a href={`https://en.wikipedia.org/wiki/Albert_Einstein#/media/${escape(this.state.imageTitle)}`}>
          {this.state.imageTitle}
        </a>
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
    imageList: state.wikiImage.imageList
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
