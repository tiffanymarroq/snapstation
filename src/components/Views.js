import React,{ Component} from 'react';



class Views extends Component{
    constructor(props){
        super(props);
        this.state={
            view:'startView'
        }
    }
 
    render(){
        let { view } = this.state;
        let startView = (
                <div className="text-center start-view view flex flex-center">
                    <div className="text">
                        <h3 className="title">Welcome! </h3>
                        <p>Ready to take your pic? Click the start button below.</p>
                        <button>Start</button>
                    </div>
                </div>
            )

        let displayView;
        if(view === 'startView'){
            displayView = startView;
        }else if(view === 'imageView'){
            displayView = startView;
        }else if(view === 'finalView'){
            displayView = startView;
        }else{
            displayView = startView;
        }
        
        return(
            <div  style={{position:'relative',width:'100%',height:'100%'}}>
                {displayView}
            </div>
        )
    }
}

export default Views;