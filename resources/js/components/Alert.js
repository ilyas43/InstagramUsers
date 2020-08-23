import React from 'react';

class Alert extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        if(this.props.show==true)
        {
           return(
                <div className="alert alert-danger" role="alert">
                Name doesn't exist !
                </div>
            ) 
        }
        else if(this.props.show==false){
            return( 
                <div className="alert alert-success" role="alert">
                    user added !
                </div>
            );
        }
        else{
            return( 
                <div >
                    
                </div>
            );
        }
        
    }
}
export default Alert;
