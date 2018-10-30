import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3} cellHeight="300px" >
          {images.map(img => (
            <GridTile
              key={img.id}
              // subtitle={
              //   <span>
              //     by <strong>{img.user}</strong>
              //   </span>
              // } 
              // actionIcon={
              //   <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
              //     <ZoomIn color="white" />
              //   </IconButton>
              // }
            >
              
                <Card  style={{ backgroundColor: '#fff', height: '300px', width: '200px', borderColor: '#333' }}>
                  <CardHeader>{img.id}</CardHeader>
                  <CardBody>
                    <CardTitle>{img.id}</CardTitle>
                    <CardImg top  src={img.largeImageURL} alt="Card image cap"  onClick={() => this.handleOpen(img.largeImageURL)} />
                    
                    <CardText>CardText</CardText>
                    {/* <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                      <ZoomIn color="white" />
                    </IconButton> */}
                  </CardBody>
                  <CardFooter>Footer</CardFooter>
                </Card>
              
              {/* <img src={img.largeImageURL} alt="" />  */}
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
