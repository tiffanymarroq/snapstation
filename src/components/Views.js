import React,{ Component} from 'react';
import { Modal } from 'reactstrap'




class Views extends Component{
    constructor(props){
        super(props);
        this.state={
            view:'startView',
            isOpen: false,
            loading: false,
            success: false
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
        this.setState({
            loading: true
        })
        setTimeout(()=>{
            this.setState({
                loading: false,
                success: true
            })
        },3200)
        setTimeout(()=>{
            this.setState({

                view: 'startView',
                isOpen: false,
                success: false
            })
        },6000)
    }
 
    render(){
        let { view, isOpen,loading,success } = this.state;
        let startView = (
            <div className="text">
                <h3 className="title">Welcome! </h3>
                <p>Ready to take your pic? Click the start button below.</p>
                <button onClick={ () => this.changeView("imageView")}>Start</button>
            </div>
            )
        let imageView = 
            (
                <div className={"text " + (isOpen ? "mx-r-15" : "")}>
                    <h3 className="title"></h3>
                    <div className="image-container">
                    </div>
                    <button onClick={this.modalToggle}>Send to Friends</button>
                    <br/>
                    <br/>
                    <button className="invert-btn" onClick={this.onRestart}>Restart</button>
                </div>
            )
        let displayView;
        if(view === 'startView'){
            displayView = startView;
        }else if(view === 'imageView'){
            displayView = imageView;
        }else{
            displayView = startView;
        }
        return(
            <div  style={{position:'relative',width:'100%',height:'100%'}}>
                <Modal centered={true} isOpen={isOpen} toggle={this.modalToggle}>
                   { success ? 
                   <div>
                       
                       <p className="modal-title">Thank you!</p>
                       <p className="text-center" style={{fontSize: "16px", margin:"0"}}>Your images have been sent.</p>
                       <button className="submit-btn success-btn">Success!</button>

                   </div>
                       

                   : 
                   <div style={{flexDirection:'column'}} className="flex">
                       <p className="modal-title">Enter Yubico Key</p>
                        <input placeholder="key"/>
                        <button 
                            onClick={this.onSubmit} 
                            className={"submit-btn " +  (loading ? 'load-btn ': "") + (success ? 'success-btn' :"")}>
                            {success ?
                                "Success!"
                            : <span> { loading ? "": "Send"}</span>
                            
                            }
                        </button>
                   </div>

                   } 
                </Modal>
                <div className={"text-center view flex flex-center " + view }>
                    {displayView}
                </div>
            </div>
        )
    }
}

export default Views;