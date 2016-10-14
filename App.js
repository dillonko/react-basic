import React from 'react';
//import ReactDOM from 'react-dom';

//This class component can have state
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: ""}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <input type="text"
          onChange={this.update} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

export default App

