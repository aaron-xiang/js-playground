import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 80px;
  margin: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.i
  .attrs(({ icon }) => ({
    className: icon
  }))
``;

const Count = styled.span`
  margin-left: 10px;
`;

class Vote extends React.Component {
  // state = {
  //   count: 0,
  // }
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    }
  }

  increment = (event) => {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;
    const { icon } = this.props;
    return (
      <Wrapper onMouseDown={this.increment}>
        <Icon icon={icon}></Icon>
        <Count>{count}</Count>
      </Wrapper>
    )
  }
}

export default Vote;