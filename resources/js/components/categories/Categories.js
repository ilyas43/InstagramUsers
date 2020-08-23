import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Axios from 'axios';

class Categories extends React.Component {
    constructor()
    {
        super();
        this.state={
            names:[]
        }
    }
    componentDidMount()
    {        
        this.getUser();       
    }
    async getUser(){ 
        let res= await fetch('http://127.0.0.1:8000/liste');
        let response =  await res.json();
        this.setState({names:response});
        this.state.names.sort((a, b) =>{ return b.followers - a.followers});
        var j = 1;
        for (let i = 0; i < this.state.names.length; i++) {
            $("tbody").append("<tr><td>"+ j++ +"</td><td><img width=\"50px\" style=\"border-radius:50%\" src=\" "+this.state.names[i].imageUrl +"\"</td><td> <a href=\"/profile?data="+this.state.names[i].name +"\"> "
            +  this.state.names[i].fullName +"</a></td><td>"+this.state.names[i].followers+"</td><td>"+ this.state.names[i].category+"</td></tr>");               
        }     
    }   
    render()
    { 
        return (
            <div className="container">
                <div className="row" >              
                    <div className="offset-1 col-10">
                        <br/>
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" colSpan="2"><center>username</center> </th>
                                    <th scope="col" style={{paddingLeft:"40px"}}> followers</th>
                                    <th scope="col">category</th>
                                </tr>
                            </thead>
                            <tbody style={{fontWeight:"bold",textAlign:"center"}}>   
                            </tbody>
                        </table>                      
                    </div>
                </div>  
            </div>
        ); 
    } 
}

export default Categories;
if (document.getElementById('Categories')) {   
    ReactDOM.render(<Categories />, document.getElementById('Categories'));
}

/*

  'cristiano',
            'arianagrande',
            'theroock2',
            'kyliejenner',
            'selenagomez',
            'kimkardashian',
            'leomessi',
            'beyonce',
            'justinbieber',
            'natgeo',
            'neymarjr'
            
*/