import React, { Component } from "react";
import {  FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import LoaderButton from "../Others/LoaderButton";
import {API} from "../../Services/API.Js";


export default class Login extends Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
        isLoading: false,
          email: "",
          password: "",
          userpoolinfo:""
        };
      }
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
      handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        try {
          this.state.userpoolinfo= await API.login(this.state.email, this.state.password);
          
               this.props.userHasAuthenticated(true);
      //     console.log(await API.post(apiName, path, myInit));

          this.props.history.push("/Member");
          } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
          }
      }
      // postlykappuser = async userinfo =>{
      //   let apiName = 'LypeAppApi'; // replace this with your api name.
      //   let path = '/user'; //replace this with the path you have configured on your API
      //   let myInit = {
      //           body: {
      //             "id": this.state.userpoolinfo.username,
      //             "name": this.state.email,
      //             "email": this.state.email
                  
      //           }
      //   }
      //   this.setState({ isLoading: true });
      //   try {
      //     this.props.userHasAuthenticated(true);
      //     console.log(await API.post(apiName, path, myInit));

      //     this.props.history.push("/");
      //   } catch (e) {
      //     alert(e.message);
      //     this.setState({ isLoading: false });
      //   }
      // }

      handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
      render() {
        return (
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <LoaderButton
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Login"
              loadingText="Logging in…"
            />
            </form>
          </div>
        );
      }

}