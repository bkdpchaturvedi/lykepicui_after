import React, { Component } from "react";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import LoaderButton from "../Others/LoaderButton";
import "./SignUp.css";
import {API} from "../../Services/API.Js";

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            phonenumber:"",
            given_name:" ",

            newUser: null
        };
    }
    validateForm() {
        return (
          this.state.email.length > 0 &&
          this.state.password.length > 0 &&
          this.state.password === this.state.confirmPassword &&this.state.phonenumber.length>0 && this.state.given_name.length>0
        );
      }
      validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
      handleSubmit = async event => {
        event.preventDefault();
    
        this.setState({ isLoading: true });
        try {
            const newUser = await API.signUp({
                username: this.state.email,
                password: this.state.password,
                email:this.state.email,
                'attributes': {
                  given_name:this.state.given_name,
                  profile:"User"
                   // custom attribute, not standard
                }
              
              });
              this.setState({
                newUser
              });
              console.log(newUser);
             // this.props.assignuserinfo(newUser);
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
        this.setState({ isLoading: false });
        
      }
      // handleConfirmationSubmit = async event => {
      //   event.preventDefault();
    
      //   this.setState({ isLoading: true });
      //   try {
      //       await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
           
      //       await Auth.signIn(this.state.email, this.state.password);
      //       await this.postlykappuser();
      //       this.props.userHasAuthenticated(true);
      //       this.props.history.push("/");
      //   } catch (e) {
            
      //       alert(e.message);
      //       this.setState({ isLoading: false });
      //   }
      //   this.setState({ isLoading: false });
      // }

      postlykappuser = async userinfo =>{
        console.log(this.state);
        let apiName = 'LypeAppApi'; // replace this with your api name.
        let path = '/user'; //replace this with the path you have configured on your API
        let myInit = {
                body: {
                  "id": this.state.newUser.userSub,
                  "name": this.state.given_name,
                  "email": this.state.email
                  
                }
        }
        this.setState({ isLoading: true });
        try {
          this.props.userHasAuthenticated(true);
          console.log(await API.post(apiName, path, myInit));

          this.props.history.push("/");
        } catch (e) {
          alert(e.message);
          this.setState({ isLoading: false });
        }
      }

      // renderConfirmationForm() {
      //   return (
      //     <form onSubmit={this.handleConfirmationSubmit}>
      //       <FormGroup controlId="confirmationCode" bsSize="large">
      //         <ControlLabel>Confirmation Code</ControlLabel>
      //         <FormControl
      //           autoFocus
      //           type="tel"
      //           value={this.state.confirmationCode}
      //           onChange={this.handleChange}
      //         />
      //         <HelpBlock>Please check your email for the code.</HelpBlock>
      //       </FormGroup>
      //       <LoaderButton
      //         block
      //         bsSize="large"
      //         disabled={!this.validateConfirmationForm()}
      //         type="submit"
      //         isLoading={this.state.isLoading}
      //         text="Verify"
      //         loadingText="Verifying…"
      //       />
      //     </form>
      //   );
      // }
      renderForm() {
        return (
          <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="given_name" bsSize="large">
          <ControlLabel>Full Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.given_name}
            onChange={this.handleChange}
          />
        </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="phonenumber" bsSize="large">
            <ControlLabel>Phone Number #</ControlLabel>
            <FormControl
              autoFocus
              type="phonenumber"
              value={this.state.phonenumber}
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
            <FormGroup controlId="confirmPassword" bsSize="large">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                value={this.state.confirmPassword}
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
              text="Signup"
              loadingText="Signing up…"
            />
          </form>
        );
      }
    
      render() {
        return (
          <div className="Signup">
            {
              //this.state.newUser === null
              //? 
              this.renderForm()
             // : this.renderConfirmationForm()
            }
          </div>
        );
      }
}