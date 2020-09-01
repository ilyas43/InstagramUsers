import React from 'react';
import axios from 'axios';
import Alert from './Alert';
import Loading from './Loading';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(){
        super();
        this.state={
            name:' ',
            category:' ',
            notExist:null,
            isLoading:null,
            userAlreadyExiste:false
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.fermer = this.fermer.bind(this);
    }
    onChangeName(e){
        this.setState({ name:e.target.value }) 
    }
    onChangeSelect(e){
        this.setState({ category:e.target.value})
    }
    async onSubmit(e){
        e.preventDefault();
           //verifier si user exist
            const user1 = await fetch('/profile/user/'+this.state.name.trim());
            const user = await user1.json();
        if(user.length!=0)//si il y a un utilisateur dans la base
        {
            this.setState({userAlreadyExiste:true}); //afficher userAlreadyExiste           
        } else{
            this.setState({isLoading:true});//loading
            let response = await fetch('http://api.scraperapi.com/?api_key=554d69e00ec6878a4a87ec60276a9007&url=https://www.instagram.com/'+this.state.name+'/?__a=1');                    
            if (response.ok) { //si cette utilisateur exist dans l'instagram
                const res = await response.json();              
                const data={
                    name : this.state.name,
                    category : this.state.category,
                    imageUrl : res.graphql.user.profile_pic_url,
                    followers: res.graphql.user.edge_followed_by.count,
                    follows:   res.graphql.user.edge_follow.count,
                    posts:     res.graphql.user.edge_owner_to_timeline_media.count,
                    bio:       res.graphql.user.biography,
                    fullName:  res.graphql.user.full_name                  
                };
                    this.setState({isLoading:false});
                    this.setState({notExist:false});
                    axios.post('http://127.0.0.1:8000/create',data).then(obj=>console.log(obj)).catch(err=>console.log(err));
                    window.location="/"// la redirection vers la page /
            } else {
                console.log(" user not found "+response.status);             
                this.setState({notExist:true});
                this.setState({isLoading:false});
            }         
        }
                             
    }

    fermer()//si on ferme modal
    {
        this.setState({notExist:null});
        this.setState({isLoading:null});
        this.setState({userAlreadyExiste:false});
    }
  render(){
    return (
    <div className="Modal">       
        <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal" style={{borderRadius:"30px", height:"50px" , marginTop:"15px", width:"250px",backgroundColor:"#e5745a",color:"white",border:"none",fontWeight:"bold"}}>
        Ajouter votre compte + 
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>


            <form onSubmit={this.onSubmit}>              
                <input onChange={this.onChangeName} value={this.state.name} name="name" type="text" placeholder="nom utilisateur d'instagram" style={{width: "100%",height:"40px"}} />
                <br/>
                <br/>
                <select onChange={this.onChangeSelect} value={this.state.category} name="category" id="sele" style={{width: "100%",height:"40px"}}>
                     <option value="actors">actors</option>
                    <option value="sport">sport</option>                 
                    <option value="rap">rap</option>
                    <option value="travel">travel</option>
                    <option value="singer">singer</option>
                    <option value="humor">humor</option>
                    <option value="lifestyle">lifestyle</option>
                    <option value="tv host">tv host</option>
                </select>
                           
                <div className="modal-footer">
                    <Loading Loading={this.state.isLoading} alredyExist={this.state.userAlreadyExiste} />
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.fermer} >Fermer</button>
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                    <Alert show={this.state.notExist} />            
                </div>
            </form>  
            </div>
        </div>
        </div>
    </div>
  );
  }
}
//export default Modal;
if (document.getElementById('Modal')) {   
    ReactDOM.render(<Modal />, document.getElementById('Modal'));
}