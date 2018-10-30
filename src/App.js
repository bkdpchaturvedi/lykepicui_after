import { React, Component, Fragment } from "react";
import { Link ,withRouter} from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import Routes from "./Configuration/Routes";
import './App.css';
import {API} from "./Services/API.Js";


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user:null      
    };
  }
async componentDidMount() {
  try {
    
    if (API.getToken()) {
      this.userHasAuthenticated(true);
      this.assignuserinfo(await API.getProfile());
    }
  }
  catch(e) {
    if (e !== 'No current user') {
      alert(e);
    }
  }

  this.setState({ isAuthenticating: false });
}

  assignuserinfo=currentUserInfo=>{
    this.setState({ user: currentUserInfo});
    // console.log(currentUserInfo);
    // console.log(currentUserInfo.attributes.email);
    // console.log(currentUserInfo.id);
    // console.log(currentUserInfo.username);
  }
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  handleLogout = async event => {
    await API.logout();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
    
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      assignuserinfo:this.assignuserinfo,
      user:this.state.user
    };
  
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
   
        <Navbar bsStyle="primary" fluid collapseOnSelect >
          <Navbar.Header >
            <Navbar.Brand>
              <Link to="/">Lyke Pic</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
           
            {this.state.isAuthenticated
              ?
              <Nav pullRight> 
              <NavItem>Welcome </NavItem>
                 <NavItem onClick={this.handleLogout}>Logout</NavItem>
                 </Nav>
              : 
              <Nav pullRight> 
              <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
                </Nav>
            }
           
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />

        <div className="footer">
        <p>@all rights belong to Part time team 3</p>
      </div>
      </div>
    );
  }
}

export default withRouter(App);
