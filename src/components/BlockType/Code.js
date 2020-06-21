import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";
// import "highlight.js/styles/solarized-dark.css";
import "highlight.js/styles/vs2015.css";

const Code = (props) => {
  const code = useRef(props.data.code);
  
  useEffect(() => {
    code.current = props.data.code;
  }, [props.data]);

  function decodeHtml(html){
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  
  return (
    <div>
      <HLJS language={"javascript"}>{decodeHtml(props.data.code)}</HLJS>
    </div>
  );
};

const HLJS = styled(Highlight)`
  .hljs {
    padding: 1.5em;
  }
`;

export default Code;
