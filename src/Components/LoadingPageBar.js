import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";
import image from '../images/loading@4x.png'

class LoadingPageBar extends Component {
    render() {
        return (
            <div style={{weight: "100hv", height: "80hv"}}>
                {/*<Spinner*/}
                {/*    className = {''}*/}
                {/*    style = {{padding:"auto"}}*/}
                {/*    animation="border"*/}
                {/*    variant="primary" />*/}
                <img
                    src={image}
                    alt={"loading"}
                    className={"loading-page-bar rotating"}
                />
            </div>
        );
    }
}

export default LoadingPageBar;