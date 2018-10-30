import React from 'react';
import { Form, FormGroup, Button, FormControl,Panel,PanelBody } from 'react-bootstrap';
import {s3Upload, s3UploadPublic} from "./S3UploadFunction";

//import axios from 'axios';

import LoaderButton from '../../Others/LoaderButton';
import './upload.css';
import {API} from '../../../Services/API.Js';
class Upload extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      isLoading: false,
      
     file:null
  };
  }



  // fileSelectHandler = event => {
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   })
  // }

  fileUploadHandler = async event => {

    event.preventDefault();

    // if (this.state.file && this.state.file.size > 5) {
    //   alert("Please pick a file smaller than 5MB");
    //   return;
    // }

    this.setState({ isLoading: true });

    try {
      const attachment = this.state.file
        ? await s3UploadPublic(this.state.file,this.props.user.username)
        : null;
        attachment? await this.postlykeappimage(attachment):null;
      console.log(attachment);
      // await this.createNote({
      //   attachment,
      //   content: this.state.content
      // });
     this.props.history.push("/Member");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }


    // const fd = new FormData();
    // fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    // axios.post('/assets', fd)
    // .then(response => {
    //     console.log(response);
    // });        

    // const data = new FormData();
    // data.append('file', this.state.selectedFile);
    // data.append('filename', this.state.selectedFile.name);

    // fetch('http://localhost:3000/assets', {
    //   method: 'POST',
    //   body: data,
    // }).then((response) => {
    // //   response.json().then((body) => {
    //     console.log(response);
    // //   });
    // });

  }

  postlykeappimage=async attachment=>{
    console.log("imageuplaod"+ new Date());
console.log(this.props);
    let apiName = 'LypeAppApi'; // replace this with your api name.
        let path = '/picture'; //replace this with the path you have configured on your API
        let myInit = {
                body: 
                {
                  "userId": this.props.user.username,
                 
                  "picUrl": attachment
                }
        }
       
        try {
      
          console.log(await API.post(apiName, path, myInit));

         
        } catch (e) {
          alert(e.message);
         
        }
  }

  handleChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  }
  render() {
    return (
      <div id="pnlUpload" className="container body-content">
      <Panel width="300" height="400" bsStyle="primary" >
          <Panel.Heading>Add Picture</Panel.Heading>
          <Panel.Body>

      <Form>
        <FormGroup>
          <FormControl type="file" placeholder="Upload" 
            onChange={this.handleChange} />

        
        

          {/* <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText> */}
        </FormGroup>
        <div className="container-fluid" >
        <LoaderButton
        block
        bsSize="small"
        type="submit"
       
        onClick={this.fileUploadHandler}
        isLoading={this.state.isLoading}
        text="Upload"
        loadingText="Uploading…"
      />
      </div>
      </Form>
      </Panel.Body>
      </Panel>
      </div>
    );
  }
}

export default Upload;