import React from "react";
import styled from "styled-components";
import icons from "../icons";

const View = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 0px 5px 20px;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: rgb(240, 240, 240);
  }
`;

const Icon = styled.img.attrs((props) => ({
  src: icons[props.icon],
  alt: props.icon,
}))`
  width: 24px;
`;

function MenuItem(props) {
  const { name, icon } = props;
  return (
    <View>
      <Icon icon={icon} />
      <span>{name}</span>
    </View>
  );
}

export default MenuItem;
