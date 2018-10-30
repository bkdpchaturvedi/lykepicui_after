import React, { Component } from 'react';

// import {
//     Card, CardImg, CardText, CardBody, Row, Col, Button,
//     CardTitle, CardSubtitle
// } from 'reactstrap';

//import ImageModal from '../imageCard/zoom';
import { Panel, Label, Image, Row, Col, Badge, ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import {API} from '../../../Services/API.Js';
class ImageCard extends Component {
    constructor(props) {
        super(props);
        // const ImageCard = (props) => {
        this.state = {
            imageURL: '',
            likeCount: 0
        }
    }

    async componentDidMount() {
        let imgurlnew ='';
        try{
           // imgurlnew=await Storage.get(this.props.url,{level:"private|public"});
        }
        catch(e){
            console.log(e);
           // imgurlnew= await Storage.vault.get(this.props.url);

        }
       
        this.setState({ imageURL: imgurlnew, likeCount: this.props.likes });


    }

    handleLike = async (event) => {
        event.preventDefault();
        
        await this.putlykeappimage(1);

    }

    
    handleunLike = async (event) => {
        event.preventDefault();
        
        await this.putlykeappimage(-1);

    }

    async  putlykeappimage(count) {
        this.setState(prevState => ({
            likeCount: prevState.likeCount>=0? prevState.likeCount + count:0
          }));

        let apiName = 'LypeAppApi'; // replace this with your api name.
        let path = '/picture'; //replace this with the path you have configured on your API
        let myInit = {
            body:
                {
                    "id": this.props.id,
                    "createdTime": this.props.uploadedOn,
                    "userId": this.props.uploadedBy,
                    "likes": this.state.likeCount>=0?this.state.likeCount+ count:0,
                    "tags": this.props.tags,
                    "picUrl": this.props.url
                }
        }
        console.log(myInit);

        try {

            console.log(await API.put(apiName, path, myInit));


        } catch (e) {
            alert(e.message);

        }
    }

    // handleOpen = (url) => {
    //     this.setState({ imageURL: url });
    //     }


    render() {

        // let imgModal = null;
        // if (this.state.imageURL !== '') {
        //     // console.log(this.state.imageURL);
        //     imgModal = (<ImageModal clicked={this.handleOpen} URL={this.state.imageURL} />);
        // }

        // let imageUrl = this.props.url;
        // if(imageUrl) {
        //  imageUrl = 'https://i.stack.imgur.com/l60Hf.png';            
        // }
        return (
            //style={{ backgroundColor: '#fff', height: '300px', width: '200px', borderColor: '#333', marginBottom: '10px' }}

            // <Card style={{ marginBottom: '10px' }} key={this.props.id}>
            //     <Row>
            //         <Col sm="4" >
            //             <CardImg height="100%" width="100%" src={this.props.url} alt={this.props.name} />
            //         </Col>
            //         <Col sm="8" >
            //             <CardBody>
            //                 <CardTitle>{this.props.name}</CardTitle>
            //                 <CardSubtitle>{this.props.uploadedBy}</CardSubtitle>
            //                 <CardText>{this.props.uploadedOn}</CardText>
            //                 <Button onClick={() => this.handleOpen(this.props.url)} className="primary" >Zoom it</Button>


            //                 {imgModal}
            //                 {/* <CardLink href="/">Zoom</CardLink>
            //                 <CardLink href="/">Remove</CardLink> */}
            //             </CardBody>
            //         </Col>
            //     </Row>
            // </Card>

            <Panel bsStyle="primary">
                <Panel.Body>
                    <Image src={this.state.imageURL} alt="242x200" width="100%" height="100%" thumbnail={true} rounded responsive bsSize="xsmall">
                    </Image>
                </Panel.Body>
                <Panel.Footer>
                    <Row>
                        <Col xs={3}>
                        <h5 className="">
                        Likes <Badge>{this.state.likeCount}</Badge>
                    </h5>   
                        </Col>
                        <Col xs={3}>
                           

                        </Col>
                        <Col xs={3}>
                           
                        </Col>
                        <Col xs={3}>
                            <ButtonToolbar>
                                <ButtonGroup bsSize="small">
                                    <Button onClick={this.handleLike}> <Glyphicon glyph="thumbs-up" /> Like</Button>
                                    <Button onClick={this.handleunLike}> <Glyphicon glyph="thumbs-down" /> Unlike</Button>

                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pull-left smPush" smPush={1}>
                            <p>{this.props.tags}</p>
                 </Col>
                    </Row>
                </Panel.Footer>


            </Panel>



        );
    }
}


export default ImageCard;