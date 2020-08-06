import React from 'react';
import './App.css';
import Vote from './components/Vote';

const styles = {
  thumbUpCount: {
    marginLeft: '15px',
  }
}
class App extends React.Component {
  state = {
    up: 0,
    down: 0,
  }

  upVote = () => {
    let { up } = this.state;
    up++;
    this.setState({up})
  }

  render() {
    return (
      <div>
        <Vote icon="fa fa-thumbs-up" count={0}></Vote>
        <Vote icon="fa fa-thumbs-down" count={0}></Vote>
      </div>
    )
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <i onClick={this.upVote} className="fa fa-thumbs-up"></i>
  //       <span style={styles.thumbUpCount}>{this.state.up}</span>
  //     </div>
  //   );
  // }
}

export default App;
