import React, {Component} from 'react';
import Axios from 'axios';

class ImageRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageCapture: []
        }
    }

    componentDidMount(){
        console.log("componentdidmount began")
        Axios.get('http://192.168.100.1:30011/ccapi/ver100/contents/sd/100CANON/')
        .then((response) => {
            let photos = [];
            photos = this.state.imageCapture;
            response.data.url.map( photo=>{
                console.log("these are the photos", photo)
                photos.push(photo)
            }, () => this.setState({
                imageCapture: photos
            }))
        })
    }

    render(){
        let canonCapture = this.state.imageCapture;
        let displayImages = canonCapture.map((image => {
                return <img src={image} />
            }))

        return (
            <div>Images: {displayImages}</div>
        )
    }

}

export default ImageRender;