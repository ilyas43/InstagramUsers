import React from 'react';
import ReactDOM from 'react-dom';


class Singer extends React.Component {
    constructor()
    {
        super();
        this.state={
            singers:[]
        }
    }
    componentDidMount()
    {

        this.getUser();     
    }

    async getUser(){ 
        let res= await fetch('http://127.0.0.1:8000/singer_liste');
        let response =  await res.json();
        this.setState({singers:response});
        this.state.singers.sort((a, b) =>{ return b.followers - a.followers});
        var j = 1;
        for (let i = 0; i < this.state.singers.length; i++) {
            $("tbody").append("<tr><td>"+ j++ +"</td><td><img width=\"50px\" style=\"border-radius:50%\" src=\" "+this.state.singers[i].imageUrl +"\"</td><td> <a href=\"/profile?data="+this.state.singers[i].name +"\"> "
            +  this.state.singers[i].fullName +"</a></td><td>"+this.state.singers[i].followers+"</td><td>"+ this.state.singers[i].category+"</td></tr>");               
        }     
    }   
    render()
    {
        return (
            <div className="container">
            <div className="row" >              
                <div className="offset-1 col-10">
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" colSpan="2">username</th>
                                <th scope="col">followers</th>
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

export default Singer;

if (document.getElementById('Singer')) {   
    ReactDOM.render(<Singer />, document.getElementById('Singer'));
}
/*
 const singers = [
            'arianagrande',
            'kyliejenner',
            'selenagomez',
            'beyonce',
            'justinbieber'
            */
