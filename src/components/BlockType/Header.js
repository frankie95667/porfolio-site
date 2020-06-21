import React from "react";
import styled from 'styled-components';

const Header = (props) => {

    const renderHeader = () => {
        switch(props.data.level){
            case 1:
                return <h1>{props.data.text}</h1>
            case 2:
                return <H2>{props.data.text}</H2>
            case 3:
                return <h3>{props.data.text}</h3>
            case 4:
                return <h4>{props.data.text}</h4>
            case 5:
                return <h5>{props.data.text}</h5>
            case 6:
                return <h6>{props.data.text}</h6>
            default:
                return null
        }
    }

    const H2 = styled.h2`
        border-bottom: 2px solid #e6e6e6;
        padding: 1rem 0 0.8rem;
    `;

    return (
        renderHeader()
    )
}

export default Header;