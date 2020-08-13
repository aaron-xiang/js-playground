import React, { useState } from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  width: 320px;
  padding: 10px 0px;
  box-shadow: 5px 5px 12px;
`;
const Display = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 2em;
  font-size: 1.5em;
  text-align: right;
  line-height: 2em;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0px 5px;
`;
const Control = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 70px;
  height: 50px;
  border-radius: 5px;
  margin: 3px 0px;
  &:focus {
    outline: none;
  }
`;

const buttons = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "=",
  "C",
];

function App() {
  const [result, setResult] = useState("");
  const onClick = (event) => {
    const btn = event.target.id;
    switch (btn) {
      case "C":
        setResult("");
        break;
      case "=":
        try {
          const evalResult = eval(result);
          setResult(evalResult);
        } catch (e) {
          setResult("error");
        }
        break;
      default:
        setResult(result + btn);
        break;
    }
  };
  return (
    <View>
      <Display>{result}</Display>
      <Control>
        {buttons.map((b) => (
          <Button id={b} key={b} onClick={onClick}>
            {b}
          </Button>
        ))}
      </Control>
    </View>
  );
}

export default App;
