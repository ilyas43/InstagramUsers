import React from 'react';


class Loading extends React.Component {
    constructor(props)
    {
        super(props);

    }
   render()
   {
    if(this.props.Loading==true){
        return (
            <div className="alert alert-info" role="alert">
                    Loading please wait ...
            </div>       
        );
    }    
    else if (this.props.alredyExist){
        return(
            <div>
                 <div className="alert alert-danger" role="alert">
                Name already exist !
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                
            </div>
        )
    }

   }
}

export default Loading;
