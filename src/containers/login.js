import React, { Component } from "react";
import Logo from '../images/GOOAL.png'
import { Redirect, Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value})
  }

  // submitHandler = e => {
  //   e.preventDefault();
  //   this.props.loginHandler(e);
  //   this.setState({
  //     redirect: true
  //   });
  // };

  loginHandler = e => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.successful){
          let user = data.data
          this.props.updateCurrentUser(user)
        } else{
          alert(data.message)
        }
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />
    }
    return (

      <div className="form-container">
      <form onSubmit={this.loginHandler}>
        <h3 className="signup-text">Log In!!</h3>
        <img src={Logo} alt="Goal Image" id="login-logo"/>
          <div className="form-group row">
              <label for="inputUsername" className="col-sm-2 col-form-label label" >Username</label>
              <div className="col-sm-10">
                  <input type="username" className="form-control" id="inputUsername" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username..." />
              </div>
          </div>
          <div className="form-group row">
              <label for="inputPassword" className="col-sm-2 col-form-label label">Password</label>
              <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password..." />
              </div>
          </div>
          <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                  <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
              <Link to="/signup">
              <p id="not-a-member">Not a member? Sign Up here</p>
              </Link>
          </div>
      </form>
      </div>


    )
  }
}
