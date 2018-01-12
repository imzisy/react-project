
import React, { Component }  from "react";

class NextButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={this.props.next}>Next</button>
            </div>
        )
    }
}

export default NextButton;