import React, { useReducer } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';


class App extends React.Component {
  state = {
    userData: [],
    followerData: []
  };


  componentDidMount() {
  axios.get('https://api.github.com/users/kmilliner888')
    .then(user => {this.setState({userData: user.data})})
    .catch(error => console.log("error!", error));

  axios.get('https://api.github.com/users/kmilliner888/followers')
    .then(user => {this.setState({followerData: user.data})})
    .catch(error => console.log("error!", error));
  
  };



    // const followerData = () => {
    //   axios.get('https://api.github.com/users/kmilliner888/followers')
    //   .then(response => response.json())
    //   .then(response => this.setState({response: response.data}))
    //   .catch(error => console.log("error!", error));
    //   };





  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard userData={this.state} />
        <h2>My Followers</h2>
        <FollowerCard followerData={this.state}  />
      </div>
    );
  }
};

export default App;
