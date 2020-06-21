import React from "react";
import UL from "./UL";
import OL from "./OL";

const Index = ({data}) => {
    const renderList = (style, items) => {
        switch(style){
            case "ordered":
                return <OL items={items} />;
            case "unordered":
                return <UL items={items} />;
            default:
                return null;
        }
    }
    return renderList(data.style, data.items);
}

export default Index;