import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const items = ["home", "trending", "library"];
const View = styled.div`
  width: ${(props) => (props.hide ? "75px" : "200px")};
  font-size: ${(props) => (props.hide ? "0.8em" : "1em")};
  display: flex;
  flex-direction: column;
  transition: width 0.25s;
`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function SideMenu(props) {
  const { hide } = props;
  return (
    <View hide={hide}>
      {items.map((item) => (
        <MenuItem key={item} name={capitalize(item)} icon={item} />
      ))}
    </View>
  );
}

export default SideMenu;
