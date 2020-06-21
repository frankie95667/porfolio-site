import React from "react";
import styled from "styled-components";

const Image = (props) => {
  
  return (
    <div>
      <Img src={props.data.file.url} alt={props.data.caption} />
    </div>
  );
};

const Img = styled.img`
  width: 100%;
`;

export default Image;