import React, { Component } from "react";
import Axios from "axios";

class ImageRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCapture: []
    };
  }

  componentDidMount() {
    console.log("componentdidmount began");

    Axios.get("http://192.168.100.1:30011/ccapi/ver100/contents/sd/100CANON/")
      .then(response => {
        let photos = [];
        photos = this.state.imageCapture;
        response.data.url.map(
          photo => {
            console.log("these are the photos", photo);
            photos.push(photo);
            return true;
          },
          () =>
            this.setState({
              imageCapture: photos
            })
        );
      })
      .catch(err => "Could Not Retrieve Photos, Error: \n" + err);
  }

  render() {
    let canonCapture = this.state.imageCapture;
    let displayImages = canonCapture.map(image => {
      return <img src={image} alt="" />;
    });

    return this.state.imageCapture.length !== 0 ? (
      <div>Images: {displayImages}</div>
    ) : (
      <div />
    );
  }
}

export default ImageRender;
