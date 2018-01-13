import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './App.css';
import { addA, setB, setC, checkText, setText, submit } from '../actions/actions';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';
import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Slider ref={this.slider} {...settings}>
            <div>
              <StepOne
                state={this.props.state}
                handleCheckedValues={this.props.handleCheckedValues}
                next={this.next}
              />
            </div>
            <div>
              <StepTwo
                state={this.props.state}
                handleActivButtons={this.props.handleActivButtons}
                next={this.next}
              />
            </div>
            <div>
              <StepThree
                state={this.props.state}
                handleTextChange={this.props.handleTextChange}
                checkTextFromServer={this.props.checkTextFromServer}
                next={this.next}
              />
            </div>
            <div><StepFour state={this.props.state} next={this.next} /></div>
            <div>
              <button
                className="btn btn-default"
                onClick={this.props.submit(this.props.state)}
              />submit
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckedValues: (value) => {
      dispatch(addA(value));
    },
    handleActivButtons: (value) => {
      dispatch(setB(value));
    },
    handleSelectedBox: (value) => {
      dispatch(setC(value));
    },
    handleTextChange: (value) => {
      dispatch(setText(value));
    },
    checkTextFromServer: () => {
      dispatch(checkText());
    },
    submit: (state) => {
      dispatch(submit(state));
    },
  };
};

App.propTypes = {
  next: PropTypes.func.isRequired,
  state: PropTypes.shape({ a: [] }).isRequired,
  submit: PropTypes.func.isRequired,
  handleCheckedValues: PropTypes.func.isRequired,
  handleActivButtons: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  checkTextFromServer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
