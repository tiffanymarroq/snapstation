import React,{ Component} from 'react';
import { Modal } from 'reactstrap'




class Views extends Component{
    constructor(props){
        super(props);
        this.state={
            view:'startView',
            isOpen: false
        }
        this.modalToggle = this.modalToggle.bind(this)
    }
    changeView = (view) => {
        this.setState({
            view: view
        })
    }

    onRestart = () => {
        this.setState({
            view: 'startView'
        })
    }

    modalToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    onSubmit = () => {
        setTimeout(()=>{
            this.setState({
                view: 'startView',
                isOpen: false
            })
        },3000)
    }
 
    render(){
        let { view } = this.state;
        let startView = (
            <div className="text">
                <h3 className="title">Welcome! </h3>
                <p>Ready to take your pic? Click the start button below.</p>
                <button onClick={ () => this.changeView("imageView")}>Start</button>
            </div>
            )
        let imageView = 
            (
                <div className="text">
                    <h3 className="title"></h3>
                    <p>Ready?</p>
                    <div className="image-container">

                    </div>
                    <button onClick={this.modalToggle}>Send to Friends</button>
                    <br/>
                    <br/>
                    <button onClick={this.onRestart}>Restart</button>
                </div>
            )
        let displayView;
        if(view === 'startView'){
            displayView = startView;
        }else if(view === 'imageView'){
            displayView = imageView;
        }else if(view === 'finalView'){
            displayView = startView;
        }else{
            displayView = startView;
        }
        return(
            <div  style={{position:'relative',width:'100%',height:'100%'}}>
                <Modal centered={true} isOpen={this.state.isOpen} toggle={this.modalToggle}>
                    <p>Enter Yubico Key</p>
                    <input/>
                    <br/>
                    <br/>
                    <br/>

                    <button onClick={this.onSubmit}>Send</button>
                </Modal>
                <div className={"text-center view flex flex-center " + view }>
                    {displayView}
                </div>
            </div>
        )
    }
}

export default Views;