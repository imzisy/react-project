
import React, { Component }  from "react";

class StepFour extends Component {
    render() {
        return (
         <div>
            <select defaultValue="" onChange={(e) => this.props.handleSelectedBox(e.target.value)}>
                <option value="" disabled></option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
                <option value="C3">C3</option>
            </select>
            <br/><br/>
            <button className="btn btn-default"  onClick={this.props.next}>Next</button>
         </div>
        )
    }
}

export default StepFour;