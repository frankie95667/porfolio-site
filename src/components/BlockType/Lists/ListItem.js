import React from "react";

const ListItem = ({ item }) => {

  const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return <li dangerouslySetInnerHTML={{
      __html: decodeHtml(item)
    }}></li>;
};

export default ListItem;
