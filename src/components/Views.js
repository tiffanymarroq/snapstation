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
        let startView = () => {
            return(
                <div className="text-center">
                    <h3 className="title">Welcome! </h3>
                    <p>Ready to take your pic? Click the start button below.</p>
                    <button>Start</button>
                </div>
            )
        }
             
        let displayView = () => {
            if(view == 'startView'){
                console.log('start')
                return startView;
            }else if(view == 'imageView'){
                return startView;
            }else if(view == 'finalView'){
                return startView;
            }else{
               return null
            }
        }

        return(
            <div>
                {displayView}
                <p>test</p>
            </div>
        )
    }
}

export default Views;