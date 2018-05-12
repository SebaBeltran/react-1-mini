import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pictureInput: '',
      nameInput: '',
      listOfFriends: []
    }
  }

  pictureChange(val) {
    this.setState({ pictureInput: val })
  }
  nameChange(val) {
    this.setState({ nameInput: val })
  }
  handleClick() {
    let newFriend = {
      url: this.state.pictureInput,
      name: this.state.nameInput
    }
    this.setState({
      listOfFriends: [...this.state.listOfFriends, newFriend],
      pictureInput: '',
      nameInput: ''
    })
  }

  render() {
    let list = this.state.listOfFriends.map( (friend, index) => {
      return (
        <div key={index}>
          <p>Name: {friend.name}</p>
          <p>Picture:</p>
          <img src={friend.url}/>
        </div> 
      )
    })
    return (
      <div>
        <p>Picture:</p>
        <input 
          value={this.state.pictureInput} 
          onChange={(e)=> this.pictureChange(e.target.value)} 
        />
        <p>Name:</p>
        <input 
          value={this.state.nameInput} 
          onChange={(e) => this.nameChange(e.target.value)}
        />
        <br/>
        <button onClick={()=> this.handleClick()}>Add Friend</button>

        <hr />
        {list}
      </div>
    );
  }
}

export default App;
