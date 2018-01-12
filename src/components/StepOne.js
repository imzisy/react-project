
import React, { Component }  from "react";
import NextButton from "./NextButton";

class StepOne extends Component {
    render() {
        return (
            <div className="form-group">
                <input type="checkbox" onClick={(e) => this.props.handleCheckedValues(e.target.value)} value="A1"/> A1<br/>
                <input type="checkbox" onClick={(e) => this.props.handleCheckedValues(e.target.value)} value="A2"/> A2
                <br/><br/>
                { this.props.state.a.length>0 ? <NextButton next={this.props.next}/> : null }
            </div>
        )
    }
}

export default StepOne;