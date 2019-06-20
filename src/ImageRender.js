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
        let startShooting = Axios.post('http://192.168.1.2:30011/ccapi/ver100/shooting/liveview', {
            "liveviewsize": "small", 
            "cameradisplay": "on"
        }).then(()=>{
            setTimeout((Axios.get('http://192.168.1.2:30011/ccapi/ver100/shooting/liveview/flip').then(
                (image) => {
                    this.setState({
                        image: image1
                    })
                })
                ), 1000)}
            )
        
        startShooting.then((resp)=>{
            console.log("this is what we get",resp)
        })
        // Axios.post('http://192.168.1.2:30011/ccapi/ver100/shooting/control/shutterbutton', {
        //     "af": true
        // })
        // startShooting.then((resp)=> {
        //     console.log("response:shooting mode",resp);
        //     Axios.post('http://192.168.1.2:30011/ccapi/ver100/shooting/liveview', {
        //         "liveviewsize": "small", 
        //         "cameradisplay": "on"
        //     }).then((resp)=>{
        //         console.log("response: post successful", resp)
        //         Axios.get('http://192.168.1.2:30011/ccapi/ver100/shooting/liveview/flip').then(
        //             (image) => {
        //                 console.log(image);
        //                 image1 = image;
        //             })
        //         // ).then(()=> Axios.get('http://192.168.100.1:30011//ccapi/ver100/shooting/liveview/flip').then(
        //         //     (image) => {
        //         //         console.log(image);
        //         //         image2 = image;
        //         //     }
        //         // ))
        //     })
        // })
        
        return (
            <div>Images: <img src={this.state.image}/></div>
        )
    }

}

export default ImageRender;