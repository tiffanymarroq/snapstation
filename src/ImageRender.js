import React, {Component} from 'react';


class ImageRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageCapture: []
        }
    }

    componentWillMount(){
        const canonCapture = "curl to canon"
        this.setState({
            imageCapture: canonCapture
        })
    }

    render(){
        let canonCapture = this.state.canonCapture;
        let displayImages = canonCapture.map((image => {
            return <img src={image} />
        }   
    ))
        return (
            <div>{displayImages}</div>
        )
    }
    
}

export default ImageRender;