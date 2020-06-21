import React from "react";

const Paragraph = (props) => {

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return <p>{decodeHtml(props.data.text)}</p>;
};

export default Paragraph;
