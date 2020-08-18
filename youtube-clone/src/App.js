import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

const View = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Main = styled.div`
  background-color: rgb(245, 245, 245);
  flex-grow: 1;
`;

function App(props) {
  const [hide, setHide] = React.useState(false);
  const toggle = () => {
    console.log("toggle");
    setHide(!hide);
  };
  return (
    <View>
      <Header toggle={toggle} />
      <Content>
        <SideMenu hide={hide} />
        <Main>Main Content</Main>
      </Content>
    </View>
  );
}

export default App;
