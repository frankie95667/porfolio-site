import React from "react";

const Quote = (props) => {
  
  return (
    <div>
      <blockquote style={{ textAlign: props.data.alignment }}>{props.data.text}</blockquote> -{props.data.caption}
    </div>
  );
};

export default Quote;
