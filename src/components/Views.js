import React,{ Component} from 'react';



class Views extends Component{
    constructor(props){
        super(props);
        this.state={
            view:'startView',
            isOpen: false
        }
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
                    <button>Send to Friends</button>
                    <br/>
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
                <div className={"text-center view flex flex-center " + view }>
                    {displayView}
                </div>
            </div>
        )
    }
}

export default Views;