import React from 'react';
import $ from 'jquery';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class Header extends React.Component {
    constructor()
    {
        super();
 
        this.state={
            name:' ',
            names:[]
        }
        this.getUser=this.getUser.bind(this);
        this.getName=this.getName.bind(this);
    }
    componentDidMount()
    {   
        var d = new Date();
        var day = d.getMonth() +1 ;
        $("#date").html("Date : "+d.getDate()+"."+day +"."+d.getUTCFullYear());
        this.getUrl();
    }
    getUser(){
    window.location.href="/profile?data="+this.state.name;
   }
    getName(e){
        this.setState({name:e.target.value});
    }
    async getUrl(){
        let res = await fetch('http://127.0.0.1:8000/liste');
         let response =  await res.json();
         for (let i = 0; i < response.length; i++) {
            this.state.names.push(response[i].name);              
        }       
         console.log(this.state.names);
    } 

  render(){
    
    /*const names = [
        {name: 'cristiano'},
        {name: 'arianagrande'},
        {name: 'theroock2'},
        {name: 'kyliejenner'},
        {name: 'selenagomez'},
        {name: 'kimkardashian'},
        {name: 'leomessi'},
        {name: 'beyonce'},
        {name: 'justinbieber'}
    ]*/
        return (
            <div className="container ">
                
                <div className="row">
                    <div className="offset-2 col-8 Header">                    
                        <h3>Top 500 influenceurs instagram en 2020</h3>                    
                    </div>
                </div> 
                <div className="row">
                    <div className="offset-7 col-4" id="date" style={{fontSize:"20px",fontWeight:"bold",color:"white",marginBottom:"20px"}}>

                    </div>
                </div>           
                <div className="row" >
                    <div className=" col-6" style={{position:"relative" ,left:"120px"}}>                    
                        {/*<div className="search" >
                        <Autocomplete                         
                            id="freeSolo"
                            freeSolo
                            options={this.state.names}
                            variant="outlined"
                            getOptionLabel={(option) => option}
                            style={{ width: 500 }}
                            renderInput={(params) => <TextField {...params} value={this.state.name} onChange={this.getName}  style={{backgroundColor:"white", height:"60px",outline:"none",padding:"5px",marginLeft:"90px"}}/>}
                        />                             
                        </div>*/}
                        <input type='text' placeholder="user.." onChange={this.getName} style={{backgroundColor:"white", height:"60px",outline:"none",padding:"5px",marginLeft:"90px",width:"500px"}} />                                  
                    </div>
                    <div className=" col-6" style={{position:"relative" ,left:"120px"}}>
                        <Button type="button" onClick={this.getUser} className="btn" style={{color:"#6f829b",backgroundColor:"#e9edf2",height:"60px",width:"150px",fontWeight:"bold"}}>verifier</Button>
                    </div>         
                </div>
                <br/>
                <br/>
                <br/>                              
            </div>
        );
    }
}

export default Header;
