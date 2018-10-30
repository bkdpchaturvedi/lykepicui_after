import React, { Component } from "react";
import "./Home.css";
import { Button } from 'react-bootstrap';

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  async componentDidMount() {
    try {
      if (this.props.isAuthenticated) {
        this.props.history.push("/Member");
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        this.props.history.push("/");
      }
    }
  }

  handleredirectSignup= event=>{
    event.preventDefault();
    this.props.history.push("/SignUp");
  }
  handleredirectLogin= event=>{
    event.preventDefault();
    this.props.history.push("/Login");
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Lyke Pic</h1>
          <p>A simple place to like and share pictures</p>
          <p>If you are a new user please <Button onClick={this.handleredirectSignup}>Sign Up</Button>  or else please <Button onClick={this.handleredirectLogin}> Login</Button></p>
        </div>
      </div>
    );
  }
}
