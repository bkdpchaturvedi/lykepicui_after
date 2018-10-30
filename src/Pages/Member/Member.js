import React, { Component } from "react";
import "./Member.css";
import { Button,Grid,Row,Col } from 'react-bootstrap';

import SearchResult from './search/searchresult';
import ImageGallery from './imageGallery/imageGallery';
import Upload from './upload/upload';
import Friends from './friends/friends';
import Welcome from './welcome';
import Search from './search/search';
import LoaderButton from "../Others/LoaderButton";
import {ServiceAPIJs as API} from "../../Services/API.Js";


export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loginUserInfo: null,
        isLoading:false,
        feeds: null
      }; 
  }
 
  async componentDidMount() {
    // if (await Auth.currentSession()) {
    //   this.userHasAuthenticated(true);
    //   this.setState({ user: (await Auth.currentUserInfo())});
    // }
    //console.log(this.props.user.attributes.email);
    let userFeeds = [];

userFeeds=await this.getlykappfeed();

this.setState({feeds:userFeeds});
//console.log(this.state.feeds);
    //if (props.userId) {
      //axios.get("https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta/feed/" + props.userId )
      // axios.get("https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta/feed/user3")
      //   .then(response => {
      //     this.setState({
      //       userFeeds: response.data.pics
      //     }) 
      //   })
      //   .catch(error => {
      //     this.setState({ error: true });
      //   });

      //   let users = [];
      //   axios.get("https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta/feed/user3")
      //   .then(response => {
      //     this.setState({
      //       feeds: response.data.pics
      //     }) 
      //   })
      //   .catch(error => {
      //     this.setState({ error: true });
      //   });
   // }
  }
    getlykappfeed = async userinfo =>{
       // console.log(this.state);
        let apiName = 'LypeAppApi'; // replace this with your api name.
        let path = '/feed/'+this.props.user.username;
       // console.log(path); //replace this with the path you have configured on your API
        let myInit = {
          
        }
       // this.setState({ isLoading: true });
        try {
          this.props.userHasAuthenticated(true);

          return await API.getUserFeed();

         // this.props.history.push("/");
        } catch (e) {
          alert(e.message);
          //this.setState({ isLoading: false });
        }
      }

      handleAddFriends=event=>{
        event.preventDefault();
        this.setState({ isLoading: true });
        this.props.history.push("/SearchFreind");
      }
      handleAddPicture=event=>{
        event.preventDefault();
        this.setState({ isLoading: true });
        this.props.history.push("/Upload");
      }

  render() {
    const memberchildprops={memberuser:this.props.user};
    return (
      <div className="Member">
           
          <Row>
          <Col xs={1} lg={3}>
          
                  <Welcome user={memberchildprops}/>
          
          </Col>
          <Col xs={2} lg={1}>
          <div ></div>
          </Col>
        <Col xs={9} md={8}>
        <Row>
          <Col lg={2}   className="pullleft">
          <LoaderButton
          block
          bsSize="small"
          type="button"
          onClick={this.handleAddPicture}
          isLoading={this.state.isLoading}
          text="Add Picture"
          bsStyle="primary"
          loadingText="Loading…"
        />
          </Col>
          <Col lg={2} lgOffset={8} className="pullright"> <LoaderButton
          block
          bsSize="small"
          type="button"
          onClick={this.handleAddFriends}
          isLoading={this.state.isLoading}
          text="Follow"
          bsStyle="primary"
          loadingText="Loading…"
        /></Col>
        </Row>
        <hr/>
        <Row>
        <Col lg={12}>
       { this.state.feeds?        <ImageGallery picFeeds={this.state.feeds}  /> :""}
       </Col>
       </Row>
        </Col>
            
          </Row>
       
     
      </div>
    );
  }
}
 