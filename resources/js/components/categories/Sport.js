import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Sport extends React.Component {
    constructor()
    {
        super();
        this.state={
            sportifs:[]
        }
    }
    componentDidMount()
    {
        this.getUser();     
    }
    async getUser(){ 
        let res= await fetch('http://127.0.0.1:8000/sportifs_liste');
        let response =  await res.json();
        this.setState({sportifs:response});
        this.state.sportifs.sort((a, b) =>{ return b.followers - a.followers});
        var j = 1;
        for (let i = 0; i < this.state.sportifs.length; i++) {
            $("tbody").append("<tr><td>"+ j++ +"</td><td><img width=\"50px\" style=\"border-radius:50%\" src=\" "+this.state.sportifs[i].imageUrl +"\"</td><td> <a href=\"/profile?data="+this.state.sportifs[i].name +"\"> "
            +  this.state.sportifs[i].fullName +"</a></td><td>"+this.state.sportifs[i].followers+"</td><td>"+ this.state.sportifs[i].category+"</td></tr>");               
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
                                    <th scope="col" colSpan="2">username</th>
                                    <th scope="col">followers</th>
                                    <th scope="col">category sport</th>
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

export default Sport;
if (document.getElementById('Sport')) {   
    ReactDOM.render(<Sport />, document.getElementById('Sport'));
}

