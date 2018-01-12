
import React, { Component }  from "react";
import NextButton from "./NextButton";

class StepTwo extends Component {    
    render() {
        return (
            <div className="form-group">
                <button 
                    className={"B1"===this.props.state.b ? "active": null}
                    value="B1"
                    onClick={(e) => this.props.handleActivButtons(e.target.value)}>B1
                </button>
                <br/>
                <button 
                    className={"B2"===this.props.state.b?"active":null} 
                    value="B2"
                    onClick={(e) => this.props.handleActivButtons(e.target.value)}>B2
                </button>
                <br/><br/>
                { this.props.state.b ? <NextButton next={this.props.next}/> : null }
            </div>
        )
    }
}

export default StepTwo;