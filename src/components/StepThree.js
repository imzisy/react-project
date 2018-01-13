
import React, { Component }  from "react";
import NextButton from "./NextButton";
import ShowError from "./ShowError";
import Spinner from "react-spinkit";

class StepThree extends Component {
    render() {
        console.log(this.props.state)
        return (
         <div className="form-group">
             <input type="text" onChange={(e) => this.props.handleTextChange(e.target.value)}/>
             <button
                onClick={(e) => this.props.checkTextFromServer()}>
                    check
            </button>

            <Spinner name="circle" />
            <br/><br/>

            <ShowError message={this.props.state.error.checkFail} />
            { this.props.state.form.check ? <NextButton next={this.props.next}/> : null } 
            <br/>
         </div>
        )
    }
}

export default StepThree;