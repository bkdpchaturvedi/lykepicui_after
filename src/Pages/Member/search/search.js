import React from 'react';
//import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'react-bootstrap';
import { FormGroup,InputGroup,FormControl,Form,Glyphicon,Panel } from 'react-bootstrap';
import SearchResult from './searchresult';
import {API} from '../../../Services/API.Js';
class Search extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      isLoading: false,
      searchStr:"",
      result:[]
  };
  }

  handleChange = event => {
  	this.setState({
			[event.target.id]: event.target.value
		});
  }

  handleSearchClick = async event=>{
  this.setState({ isLoading: true });
  this.setState({
  result : await this.getlykappsearch()
});

 // console.log(this.state.result);
  }
  getlykappsearch = async userinfo =>{
    //https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta/search/{name}
    let apiName = 'LypeAppApi'; // replace this with your api name.
    let path = '/search/'+this.state.searchStr;
   // console.log(path); //replace this with the path you have configured on your API
    let myInit = {
      
    }
    this.setState({ isLoading: true });
    try {
      this.props.userHasAuthenticated(true);

      return await API.get(apiName, path, myInit);

     // this.props.history.push("/");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render (){
    const Searchdata={
      result:this.state.result,
      user:this.props.user
    }
  return (
    <div>
    <Panel width="300" height="400" bsStyle="primary" >
    <Panel.Heading>Search A Friend</Panel.Heading>
    <Panel.Body>
    <FormGroup>
    <InputGroup>
        <FormGroup controlId="searchStr" bsSize="large">
       
        <FormControl
          autoFocus
          type="text"
          value={this.state.searchStr}
          onChange={this.handleChange}
        />
      </FormGroup>

     
      <InputGroup.Addon onClick={this.handleSearchClick}> <Glyphicon glyph="glyphicon glyphicon-search" /></InputGroup.Addon>
    </InputGroup>
  </FormGroup>


    
  </Panel.Body>
  </Panel>
  <hr/>
  {this.state.result.count>0?<SearchResult />:
  <SearchResult props={Searchdata}/>
  }</div>
  );
};
}

export default Search;