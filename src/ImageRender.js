import React, {Component} from 'react';
import Axios from 'axios';


class ImageRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: "/assets/tajMahal.jpg"
        }
    }

    componentDidMount(){
    }

    render(){
        let image1;
        let image2;
        let resp = Axios.get('http://192.168.1.2:30011/ccapi/ver100/shooting/liveview/flip').then(
                function (resp){
                    console.log("flip check",resp.status);
                    console.log("flip check",resp);
                    return resp
                })
        return <div>Images: <img src={resp}/></div>
        }}

export default ImageRender;