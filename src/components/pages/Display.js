import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBRow,MDBAnimation } from "mdbreact";
import Card from "./card";
import axios from "axios";
//
class Display extends Component {

  downloadImage(imageToBeDownloaded) {
    axios({
      url: imageToBeDownloaded,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      let fileURL = window.URL.createObjectURL(new Blob([response.data]));
      let fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', imageToBeDownloaded);
      document.body.appendChild(fileLink);
      fileLink.click();
    });
  }
  render() {
    let imageListContent;

    const { images } = this.props;

    if (images) {
      imageListContent = (
        <div className="container">
          <div className="">
            {images.map((img, key) => (
              // <a href={img.main} data-lightbox="mygallery" data-title={img.by}>
              //    </a>
              <div className="img-container" >
             <MDBAnimation reveal type="fadeInLeft">    
                <Card
                  key={key}
                  small={img.tumb}
                  large={img.main}
                  user={img.by}
                  id={img.id}
                />
            </MDBAnimation>
                <div className="download"> 
                <div className="download-btn"
                  onClick={() => this.downloadImage(img.main)}
                >
                  <i className="ion-arrow-down-a"> </i>
                </div>
                </div>
              
              </div>

            ))}
          </div>
        </div>
      );
    } else {
      imageListContent = null;
    }

    return (
      <MDBRow>
        <div>{imageListContent}</div>
      </MDBRow>
    );
  }
}
Display.propTypes = {
  images: PropTypes.array.isRequired
};
export default Display;
