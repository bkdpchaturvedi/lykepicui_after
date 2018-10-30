import React,{Component} from 'react';
//import { Row, Col, CardImg, H5 } from 'react-bootstrap';
import {  Label, ListGroupItem,h5 } from 'react-bootstrap';
import "./friends.css";
import { isNullOrUndefined } from 'util';
import {API} from '../../../Services/API.Js';
export default class Friend extends Component {
    constructor(props) {
      super(props);
      this.state = {
          userinfomember:null
        }; 
        
    }
    getLykeAppUser = async (event) => {

        let apiName = 'LypeAppApi'; // replace this with your api name.
        let path = '/user/' + this.props.user.memberuser.username;
        //replace this with the path you have configured on your API
        let myInit = {
    
        }
        // this.setState({ isLoading: true });
        try {
    
    
          return await API.getProfile();
    
          // this.props.history.push("/");
        } catch (e) {
          alert(e.message);
          // this.setState({ isLoading: false });
        }
      }
    async componentDidMount() {
        let userinfovar = await this.getLykeAppUser()
       
    
        this.setState({
            userinfomember: userinfovar
        });
    
       
    }
    render(){
    return (
        // <div  key={props.friendName} >
        //     <Row className="show-grid text center">
        //         <Col xs={12} sm={4} className="person-wrapper" >
        //             <CardImg src="..\assets\avatar.png"  circle="true"  className="person-wrapper" />
        //             <h4>{props.friendName}</h4>
        //         </Col>
        //     </Row>
        // </div>
        isNullOrUndefined(this.state.userinfomember)?
        <ListGroupItem id={this.props.member}>
            <p>
                <Label>{this.props.member}</Label>
            </p>
        </ListGroupItem>: 
        <ListGroupItem>
        <div>
       
            <h4>{this.state.userinfomember.name}
            </h4>
            <span >{this.state.userinfomember.email}</span>
       
        </div>
    </ListGroupItem>
    );
}
}

