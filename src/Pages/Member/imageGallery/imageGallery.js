import React, { Component } from 'react';
import ImageCard from '../imageCard/imageCard';
//import ImageModal from '../imageCard/zoom';

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageGallery: [
                {
                    id: 1,
                    name: "flamingo",
                    url: "../assets/flamingo2.jpeg",
                    description: "flamingo",
                    uploadedBy: "Praba",
                    uploadedOn: new Date().Date
                },
                {
                    id: 2,
                    name: "hummingbird",
                    url: "../assets/hummingbird.jpeg",
                    description: "hummingbird",
                    uploadedBy: "Praba",
                    uploadedOn: new Date().Date
                },
                {
                    id: 3,
                    name: "king-penguin",
                    url: "../assets/king-penguin.jpeg",
                    description: "king-penguin",
                    uploadedBy: "Praba",
                    uploadedOn: new Date().Date
                },
                {
                    id: 4,
                    name: "parrots",
                    url: "../assets/parrots.jpeg",
                    description: "parrots",
                    uploadedBy: "Praba",
                    uploadedOn: new Date().Date
                },
                {
                    id: 5,
                    name: "sunset",
                    url: "../assets/sunset.jpeg",
                    description: "sunset",
                    uploadedBy: "praba",
                    uploadedOn: new Date().Date
                }
            ],
            imageURL: ''
        }
      //  let imgr=Storage.vault.get("1527863838325-apple1.jpg",{ level: 'private' });


    }

    render() {
      
        console.log(this.props.picFeeds);
    // if (this.props.picFeeds !=null) {
       
  // }
 // 
   //     console.log(imgr);

        return (
            <div >
              {
                [].concat(this.props.picFeeds.pics)
                .sort((a, b) => a.createdTime < b.createdTime).
                  map(img => {
            return (
                <ImageCard
                    key={img.id}
                    id={img.id}
                    uploadedBy={img.userId}
                    likes={img.likes}
                    tags={img.tags}
                    url={img.picUrl}
                    uploadedOn={img.createdTime}
                />
            )
        })}
                {/* {imgModal} */}
            </div>

        );
    }
}

export default ImageGallery;