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
                    console.log("flip check",resp.data);
                    image1 = resp;
                })
            })
        startShooting.then((resp)=>{
            console.log(resp)})
        
        return (
            <div>Images: <img src={image1}/></div>
        )
    }

}

export default ImageRender;