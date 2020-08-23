import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
class Profile extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:''
    }
    this.onSend=this.onSend.bind(this);
    //this.getprofile=this.getprofile.bind(this);
  }
  
   componentWillMount()
   {
    const url = new URL(window.location.href);
    var data = url.searchParams.get("data");
    this.setState({name:data});
   }
  componentDidMount()
  {
    
    fetch('/profile/user/'+this.state.name)
    .then(res=>res.json())
    .then(response=>{
            if(response[0].bio ==null)
            {
              response[0].bio = "hasn't bio ";
            }
            $('.co').html(
              "<center style=\"font-weight:bold\"> <img width=\"200px\" style=\"border-radius:50%\" src=\""
              +response[0].imageUrl +"\"/> <br/> <a style=\"font-weight:bold;font-size:x-large \" href=\"https://www.instagram.com/"+this.state.name+"/\">"
              +response[0].fullName+"<a/><br/> followed by "
              +response[0].followers
              +" <br/> follows "+response[0].follows 
              +" <br/> has "+response[0].posts+' posts <br/>'
              +response[0].bio+"</center>");
    })
  }
  
  onSend()
  {
    axios.delete('http://127.0.0.1:8000/destroy/'+this.state.name).then(res=>console.log(res));
    window.location="/";
  }

  render()
  {
    return (       
      <div>
        <div className="co" >    
          
        </div>
        
        <center>
          <div>
            <button className="btn btn-warning" onClick={this.onSend}> DELETE {this.state.name}</button>
          </div>         
        </center>
      </div>
    ); 
  }
}

export default Profile;

if (document.getElementById('Profile')) {   
    ReactDOM.render(<Profile />, document.getElementById('Profile'));
}
