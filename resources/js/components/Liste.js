import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header';

class Liste extends Component {
    constructor(props)
    {
        super(props);   
        this.state= {          
        }
    };

  componentDidMount()
    {     //pour la liste des categories
        $("#select").click(function() {
            var open = $(this).data("isopen");
            if(open) {
              window.location.href = $(this).val()
            }
            //set isopen to opposite so next time when use clicked select box
            //it wont trigger this event
            $(this).data("isopen", !open);
        });
    }


    render(){        
        return (       
            <div className="container">            
                <Header />
                <div className="row">
                    <div className="offset-1 col-10">                   
                        <select name="select" id="select" style={{width: "100%",height:"40px"}}>
                            <option value="/"> toutes les categories  </option>
                            <option value="/sport">Sport </option>
                            <option value="/singer">singer</option>
                            <option value="">tv host</option> 
                            <option value="">rap</option>
                            <option value="">actors</option>
                            <option value="">travel</option>
                        </select>                                                                      
                    </div>            
                </div>                         
            </div>                
        );
    }
}

export default Liste ;


