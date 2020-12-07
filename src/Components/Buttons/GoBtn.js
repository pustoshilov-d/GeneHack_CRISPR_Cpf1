import React, {Component} from 'react';
import icon from "../../images/Buttons/GoButton.png";
import {Link} from "react-router-dom";
import iconActive from "../../images/Buttons/Go-Active.png";

class GoBtn extends Component {
    render() {
        return (
            <img
                className={"image-button"}
                src={icon}
                alt={"Go button"}
                onMouseOver={e => (e.currentTarget.src =  iconActive)}
                onMouseOut={e => (e.currentTarget.src = icon)}
            />

        );
    }
}

export default GoBtn;