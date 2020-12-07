import React, {Component} from 'react';
import {ProgressBar} from "react-bootstrap";

class LoadingModelBar extends Component {

    render() {

        return (
            <div className={"loading-model-bar-wrapper"}>
                <div className={"loading-model-bar"}>
                    <ProgressBar animated now={this.props.progress} />
                    <p className={"text-color-sub text text-main"}>
                        Results are loading and will be available in {this.props.calculated_time}. Update this page later.
                    </p>
                </div>
            </div>
        );
    }
}

LoadingModelBar.defaultProps = {
    calculatedTime: 999,
    progress: 10
}

export default LoadingModelBar;

