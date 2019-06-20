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
        let startShooting = Axios.post('http://192.168.1.2:30011/ccapi/ver100/shooting/liveview', {
            "liveviewsize": "medium", 
            "cameradisplay": "on"
        }).then((resp)=>{
            console.log("liveview is on", resp.status)
            Axios.get('http://192.168.1.2:30011/ccapi/ver100/shooting/liveview/flip').then(
                function (resp){
                    console.log("flip check",resp.status);
                    let b64Response = resp.data;
                    let outputImg = document.createElement('img');
                    outputImg.src = b64Response;
                    image1 = outputImg;
                })
            })
        startShooting.then((resp)=>{
            console.log(resp)})
        
        return (
            <img src="http://192.168.1.2:30011/ccapi/ver100/shooting/liveview/flip"/>
        )
    }

}

export default ImageRender;