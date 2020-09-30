import React, { Component } from "react";
import axios from "axios";
class Card extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }
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
  componentWillMount() {
    this.setState({ img: this.props.small });
  }
  componentDidMount() {
    this.setState({ img: this.props.web });
  }

  render(props) {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <img src={this.state.img} alt={user} />
        <div className="download">
          <div className="download-btn"
            onClick={() => this.downloadImage(this.props.large)}
          >
            <i className="ion-arrow-down-a"> </i>
          </div>
        </div>
      </div>
    )


  }
}

export default Card;
