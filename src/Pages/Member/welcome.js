import React from 'react';
import { Row, Col, Thumbnail, Panel, ListGroup } from 'react-bootstrap';
import Upload from './upload/upload';
import Search from './search/search';
import SearchResult from './search/searchresult';
import Friend from './friends/friends';
import {API} from "../../Services/API.Js";

import LoaderButton from '../Others/LoaderButton';
import { isNullOrUndefined, isUndefined } from 'util';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userlykeappdata: null,
    };
  }

  async componentDidMount() {

    //// <<ToDo>> Friends list parameter is not passed
    //if (props.userId) {
    //axios.get("https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta/user/{" + props.userId  + "}")
    //     axios.get("https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta/user/user3")
    //       .then(response => {
    //         //console.log(response.data.friends);
    //         this.setState({
    //           friends: response.data.friends
    //         })
    //       })
    //       .catch(error => {
    //         this.setState({ error: true });
    //       });
    //  // }
    let userinfovar = await this.getLykeAppUser()
  
    this.setState({
      userlykeappdata: userinfovar
    });

    console.log(this.state);
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



  render() {

   

    // let friends = !isNullOrUndefined(this.state.userinfo.friends)?this.state.userinfo.friends.map(frnd => {
    //   return (<Friend key={frnd} friendName={frnd}  />);
    // }):"";



    return (

      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>Profile</Panel.Heading>
          <Panel.Body>
            <Thumbnail src="https://i.stack.imgur.com/l60Hf.png" alt="242x200" bsSize="xs">
           { isNullOrUndefined(this.state.userlykeappdata) ? <div>no date</div>:<div>
            

              <h4>{this.state.userlykeappdata.name}</h4>
              <p className="small">{this.state.userlykeappdata.email}</p>
            
            </div>
          }
            </Thumbnail>
          </Panel.Body>
        </Panel>
        <Panel bsStyle="primary">
          <Panel.Heading> Freinds</Panel.Heading>
          <Panel.Body>
{
  
  isNullOrUndefined(this.state.userlykeappdata) ? <div>no date</div>:<div>
    {
      <ListGroup>
      {isNullOrUndefined(this.state.userlykeappdata.friends)?<div>no date</div>:this.state.userlykeappdata.friends.map(
            irc => {
              return (
                <div key={irc}>
                <Friend  member={irc}/>
                </div>
              );
           }) }
           </ListGroup>
    }
  
  </div>
          //   {
             
          //  ? <div></div>:this.state.userlykeappdata.friends.map(
          //     irc => {
          //       return (

          //         <div>{irc.name}</div>
          //       );
          //     }) 
          //   }
        }

          </Panel.Body>
        </Panel>

      </div>
    );
  }
}

export default Welcome;