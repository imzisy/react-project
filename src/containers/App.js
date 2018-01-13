import React, { Component }  from "react";
import {connect} from "react-redux";
import './App.css';
import Slider from 'react-slick';
import { addA ,setB, setC , checkText, setText ,submit }from '../actions/actions'
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import Header from "../components/Header"

class App extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
       this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev()
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
               <Header/>
                <div className="container">
                    <Slider ref={c => this.slider = c } {...settings}>
                        <div><StepOne state={this.props.state} handleCheckedValues={this.props.handleCheckedValues} next={this.next}/></div>
                        <div><StepTwo state={this.props.state} handleActivButtons={this.props.handleActivButtons} next={this.next}/></div>
                        <div><StepThree state={this.props.state} handleTextChange={this.props.handleTextChange} checkTextFromServer={this.props.checkTextFromServer}  next={this.next}/></div>
                        <div><StepFour state={this.props.state} next={this.next}/></div>
                        <div>
                            <button 
                                className="btn btn-default"
                                onClick={(e) => this.props.submit(this.props.state)}
                                >submit
                            </button>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      state:  state
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCheckedValues:(value)=>{
            dispatch(addA(value));
        },
        handleActivButtons:(value)=>{
            dispatch(setB(value));
        },
        handleSelectedBox:(value)=>{
            dispatch(setC(value));
        },
        handleTextChange:(value)=>{
            console.log(value);
            dispatch(setText(value));
        },
        checkTextFromServer:()=>{
            console.log('checkTextFromServer')
            dispatch(checkText())
        },
        submit:(state)=>{
            dispatch(submit(state))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
