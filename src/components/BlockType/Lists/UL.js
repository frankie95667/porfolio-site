import React from "react";
import styled from 'styled-components';
import ListItem from "./ListItem";

const UL = ({items}) => {
    return (
        <StyledUL>
            {items.map((item, idx) => <ListItem key={idx} item={item} />)}
        </StyledUL>
    )
}

const StyledUL = styled.ul`
    list-style: inside;
    list-style-position: outside;
    margin-left: 15px;
`;

export default UL;