import React from 'react';
import { ListGroup, Label, Table, ListGroupItem, Panel } from 'react-bootstrap';
import { isNullOrUndefined } from 'util';
import LoaderButton from '../../Others/LoaderButton';
import {API} from '../../../Services/API.Js';
export default class SearchResult extends React.Component {

    constructor(props) {
        super(props);
       // console.log(this.props);
        this.state = {
            isLoading: false,

            file: null
        };
    }
    handlefollowclick = async (event, id, name, email) => {
       
        let currentuser = await this.getLykeAppUser();

        if (!isNullOrUndefined(currentuser.friends)) {
         
            currentuser.friends[currentuser.friends.length] = id;
           
            await this.postlykappuser(currentuser);
        }
        else
        {
            currentuser.friends=[];
            currentuser.friends[0]=id;
            await this.postlykappuser(currentuser);
        }
        this.setState({ isLoading: false });
       
    }

    getLykeAppUser = async (event) => {

        let apiName = 'LypeAppApi'; // replace this with your api name.
        let path = '/user/' + this.props.props.user.username;
        //console.log(path); //replace this with the path you have configured on your API
        let myInit = {

        }
        this.setState({ isLoading: true });
        try {


            return await API.get(apiName, path, myInit);

            // this.props.history.push("/");
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }
    postlykappuser = async userinfo => {
        
        let apiName = 'LypeAppApi'; // replace this with your api name.
        let path = '/user'; //replace this with the path you have configured on your API
        let myInit = {
            body: {
                "id": userinfo.id,
                "name": userinfo.name,
                "email": userinfo.email,
                "friends": userinfo.friends
            }
        }
        this.setState({ isLoading: true });
        try {

            console.log(await API.put(apiName, path, myInit));

            //this.props.history.push("/");
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }

    render() {
       // console.log(this.props);
        return (
            // <div >
            //     <Grid fluid>
            //         <Row className="show-grid">
            //             <Col xs={8}  >
            //                 <p>userName</p>
            //             </Col>
            //             <Col  xs={4} >
            //                 <p>follow</p>
            //             </Col>
            //         </Row>
            //     </Grid>
            // </div>

            isNullOrUndefined(this.props.props.result.user) ? <ListGroup>
                <ListGroupItem>
                    <p>
                        No data found
                    </p>
                </ListGroupItem>
            </ListGroup>
                :

                <Panel width="300" height="400" bsStyle="success" >
                    <Panel.Heading>Result:</Panel.Heading>
                    <Panel.Body>





                        <Table responsive striped bordered condensed hover>
                            <thead>
                                <tr>


                                    <th>name</th>
                                    <th>email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.props.result.user.map(frd => {
                                    return (
                                        <tr key={frd.id}>
                                            <td>
                                                {frd.name}
                                            </td>
                                            <td>
                                                <Label> {frd.email}</Label>
                                            </td>
                                            <td>
                                                <LoaderButton
                                                    block
                                                    bsSize="small"

                                                    type="button"
                                                    isLoading={this.state.isLoading}
                                                    text="Follow"
                                                    loadingText="Following…"
                                                    onClick={(e) => this.handlefollowclick(e, frd.id, frd.name, frd.email)}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </Table>

                    </Panel.Body>
                </Panel>

        );

    }

}