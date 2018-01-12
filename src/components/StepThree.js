
import React, { Component }  from "react";
import NextButton from "./NextButton";
import ShowError from "./ShowError"

class StepThree extends Component {
    render() {
        console.log(this.props.state.error.checkFail)
        return (
         <div className="form-group">
             <input type="text" onChange={(e) => this.props.handleTextChange(e.target.value)}/>
             <button
                onClick={(e) => this.props.checkTextFromServer()}>
                    check
            </button>
            <br/><br/>
            <ShowError message={this.props.state.error.checkFail} />
            { this.props.state.text ? <NextButton next={this.props.next}/> : null }
            <br/>
         </div>
        )
    }
}

export default StepThree;