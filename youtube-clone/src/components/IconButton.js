import React from "react";
import styled from "styled-components";

const View = styled.i.attrs((props) => ({
  className: `fa fa-${props.icon}`,
}))`
  display: inline-block;
  width: 50px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

function IconButton(props) {
  return <View icon={props.icon} />;
}

export default IconButton;
