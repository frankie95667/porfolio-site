import React from "react";
import ListItem from "./ListItem";

const OL = ({items}) => {
    return (
        <ol>
            {items.map((item, idx) => <ListItem key={idx} item={item} />)}
        </ol>
    )
}

export default OL;