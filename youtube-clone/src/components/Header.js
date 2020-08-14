import React from "react";
import styled from "styled-components";
import logo from "../logo.jpg";
import IconButton from "./IconButton";

const View = styled.div`
  display: flex;
  height: 60px;
  border-bottom: 1px solid lightgray;
  align-items: center;
`;

const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 55px;
  margin-right: 20vw;
`;

const SearchBox = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Input = styled.input.attrs({
  placeholder: "Search",
})`
  display: inline-block;
  height: 30px;
  width: 90%;
  padding: 5px 10px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  border-radius: 0;
`;

const Button = styled.button`
  height: 30px;
  width: 60px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const ToolBar = styled.div`
  display: flex;
  width: 25vw;
  justify-content: flex-end;
`;

function Header(props) {
  return (
    <View>
      <IconButton icon="bars" />
      <Logo src={logo} />
      <SearchBox>
        <Input />
        <Button>
          <i className="fa fa-search" />
        </Button>
      </SearchBox>
      <ToolBar>
        <IconButton icon="video-camera" />
        <IconButton icon="th" />
        <IconButton icon="bell" />
      </ToolBar>
    </View>
  );
}

export default Header;
