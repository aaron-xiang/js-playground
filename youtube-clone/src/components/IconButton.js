import React from "react";
import styled from "styled-components";

const View = styled.div`
  position: relative;
`;

const Icon = styled.i.attrs((props) => ({
  className: `fa fa-${props.icon}`,
}))`
  display: inline-block;
  width: 50px;
  text-align: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const Tooltip = styled.div`
  display: ${(props) => (props.hide ? "none" : "block")};
  position: absolute;
  top: 30px;
  padding: 5px;
  border: none;
  background-color: gray;
  color: white;
`;

function IconButton(props) {
  const { tooltip = "Hello" } = props;
  const [hide, setHide] = React.useState(true);
  const toggle = () => setHide(!hide);
  return (
    <View>
      <Icon
        icon={props.icon}
        onClick={props.onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      />
      <Tooltip hide={hide}>{tooltip}</Tooltip>
    </View>
  );
}

export default IconButton;
